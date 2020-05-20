import React, {useEffect, useState} from 'react';
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

const useStyles = makeStyles({
    container: {
        position: 'fixed',
        top: '84px',
        right: '84px',
        paddingRight: '10px',
        display: 'flex',
        backgroundColor: '#fdf2e1'
    },
    searchButton: {
        padding: '0 14px',
        color: '#0a102e',
        '&:hover': {
            backgroundColor: 'transparent',
        }
    }
});

const Search = () => {

    const classes = useStyles();

    const [open, setOpen] = useState(false);
    const [options, setOptions]= useState<any>([]);
    const [value, setValue] = useState<any>();
    const [highlight, setHighlight] = useState<any>(null);

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
        <div className={classes.container}>
            <Autocomplete
            freeSolo
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
                variant="filled"
                InputProps={{
                    ...params.InputProps,
                    disableUnderline : true,
                    endAdornment: (
                    <React.Fragment>
                        {params.InputProps.endAdornment}
                        {/* {loading ? 'loading' : null} */}
                    </React.Fragment>
                    ),
                }}
                />
            )}
            />
            <IconButton
                className={classes.searchButton}
                aria-label="search-button"
                disabled={!value ? true : false}
                onMouseDown={getValuePos}
            >
                <SearchIcon />
            </IconButton>
    </div>
    );
}

export default Search;