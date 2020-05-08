import React, {useState, setState} from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles((theme) => ({
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));
  

export default function AddQuery(props){
    const classes = useStyles();
    const initialQueryState = {}
    const [query,setQuery]=useState(initialQueryState);

    const handleSubmitChange = (event) => {
        event.preventDefault();
        if(query===""){
          alert("????");
        }else{
          console.log(initialQueryState);
          props.addQuery(query);
          document.getElementById("form").reset();
          setQuery(initialQueryState);
        }
        
        //setQuery(initialQueryState);
    };

    return(
        <React.Fragment>
          <form className={classes.form} id="form" onSubmit={handleSubmitChange}>
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              type="text"
              onChange={event=>setQuery(event.target.value)}
              autoComplete="Type anything"
              autoFocus
              id="textfield"
              required
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              
            >
              Check
            </Button>
        </form>
        </React.Fragment>       
    )
}