import React, {useEffect} from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks'
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles, IconButton, TextField, CircularProgress, InputAdornment } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import scrollIntoView from 'scroll-into-view';

const GET_PROFILES = gql`
    query getPeople {
        getPeople {
            name
            tree_id
        }
    }`;

const Search = () => {

    const useStyles = makeStyles({
        root: {
            position: 'fixed',
            top: '75px',
            right: '0'
        }
    });

    const classes = useStyles();

    const [open, setOpen] = React.useState(false);
    const [options, setOptions]= React.useState<any>([]);
    const [value, setValue] = React.useState<any>();
    const [highlight, setHighlight] = React.useState<any>(null);

    const { loading, error, data } = useQuery(GET_PROFILES);

    const handleChange = (event, value) => {
        setValue(value);
      };

    const getValuePos = (event: React.MouseEvent<HTMLButtonElement>) => {
        const scrollId = document.getElementById(`node${value.tree_id}`);
        if (highlight !== null) {
            highlight.classList.remove('tree_node--highlight');
        }
        setHighlight(scrollId)
        scrollIntoView(scrollId);
    }

    useEffect(() => {
        if (data && open) setOptions(data.getPeople);
        console.log('useEffect', highlight);
        if (highlight) {
            highlight.classList.add('tree_node--highlight');
        }
    }, [data, open, highlight]);

    return (
        <Autocomplete
        className={classes.root}
        id="search-tree"
        style={{ width: 300 }}
        open={open}
        onOpen={() => {
            setOpen(true);
        }}
        onClose={() => {
            setOpen(false);
        }}
        getOptionSelected={(option: any, value) => option.name === value.name}
        getOptionLabel={(option) => option.name}
        onChange={handleChange}
        noOptionsText="Not found"
        options={options}
        loading={loading}
        renderInput={(params) => (
            <TextField
            {...params}
            label="Search Tree"
            variant="outlined"
            InputProps={{
                ...params.InputProps,
                endAdornment: (
                <React.Fragment>
                    {loading ? <CircularProgress color="inherit" size={20} /> : null}
                    {params.InputProps.endAdornment}
                    {   
                        <InputAdornment position="end" hidden={false}>
                            <IconButton
                                aria-label="search-button"
                                onMouseDown={getValuePos}
                            >
                                <SearchIcon/>
                            </IconButton>
                        </InputAdornment>
                    }
                </React.Fragment>
                ),
            }}
            />
        )}
        />
    );
}

export default Search;