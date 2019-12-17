import React, { useState, useEffect, Fragment } from 'react';
import axios from '../../axios';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import useStyles from './MainStyles';

const Main = () => {
    const classes = useStyles();
    const [potlucks, setpotlucks] = useState([]);
    useEffect(() => {
        axios.get('/potluck')
            .then(result => {
                setpotlucks(result.data.documents);
            })
            .catch(error => console.log(error))
    }, [])

    return (
        <Fragment>
            <h1>Choose a Potluck Event To Join:</h1>
            <List className={classes.list}>
                {potlucks.map(potluck => (
                    <ListItem button>
                        <ListItemText primary={potluck.fields.name.stringValue} />
                    </ListItem>
                ))}

            </List>
        </Fragment>

    )
}

export default Main;