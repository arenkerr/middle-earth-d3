import React, {useEffect} from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core';

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

    const { loading, error, data } = useQuery(GET_PROFILES);

    console.log(data);
    
    useEffect(() => {
        if (data && open) setOptions(data.getPeople);
    }, [data, open])

    return (
        <Autocomplete
        className={classes.root}
        id="asynchronous-demo"
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
        options={options}
        loading={loading}
        renderInput={(params) => (
            <TextField
            {...params}
            label="Asynchronous"
            variant="outlined"
            InputProps={{
                ...params.InputProps,
                endAdornment: (
                <React.Fragment>
                    {loading ? <CircularProgress color="inherit" size={20} /> : null}
                    {params.InputProps.endAdornment}
                </React.Fragment>
                ),
            }}
            />
        )}
        />
    );
}

export default Search;