import React, {useState} from 'react';
//import Avatar from '@material-ui/core/Avatar';
//import FormControlLabel from '@material-ui/core/FormControlLabel';
//import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
//import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
//import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

import AddQuery from './addQuery';
import ShowQuery from './showQuery';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Thằng em
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

function App() {
  const classes = useStyles();

  const searchQueries = [];
  const [queries, setQueries] = useState(searchQueries);
  console.log(queries);

  const addQuery = (event) => {
    if(queries.length===0){
      const object = {
        id:queries.length+1,
        value:event
      };
      setQueries(prevState =>[...prevState,object])
    } else{
      const object = {
        id:queries[queries.length-1].id+1,
        value:event
      };
      setQueries(prevState =>[...prevState,object])
    }
  }

  const removeQuery = id =>{
    setQueries(queries.filter(query=>query.id!==id));
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5" className="titlenek">
          Check this out
        </Typography>
        <AddQuery addQuery={addQuery}/>
        <ShowQuery queries={queries} removeQuery={removeQuery}/>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}

export default App;
