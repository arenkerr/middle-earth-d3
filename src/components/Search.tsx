import React, {useEffect, useState} from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks'
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles, IconButton, TextField } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import scrollIntoView from 'scroll-into-view';

const GET_PROFILES = gql`
    query getPeople {
        getPeople {
            name
            tree_id
        }
    }`;

const GET_PROFILES_RACE = gql`
query getPeopleByRace($race: String!) {
    getPeopleByRace(race: $race) {
        name
        tree_id
        race
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

const Search = ({ race }) => {
    const classes = useStyles();

    const [open, setOpen] = useState(false);
    const [options, setOptions]= useState<any>([]);
    const [value, setValue] = useState<any>();
    const [highlight, setHighlight] = useState<any>(null);

    const { loading, error, data } = useQuery(race === 'all' ? GET_PROFILES : GET_PROFILES_RACE, { variables: { race }});
    if (error) console.log(error);

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
        if (data && open) setOptions(data.getPeople ? data.getPeople : data.getPeopleByRace);
       
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