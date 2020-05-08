import React from 'react';
//import ReactTable from 'react-table';
import {Table, TableBody, TableCell,TableContainer, TableHead, TableRow, IconButton} from "@material-ui/core";
import grey from "@material-ui/core/colors/grey";
import DeleteIcon from '@material-ui/icons/Delete';

const textColor = grey[50];


export default function ShowQuery(props){
    //let classes = useStyles();
  
    return(
        <React.Fragment>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>ID</TableCell>
                                <TableCell>Value</TableCell>
                                <TableCell>Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                        {props.queries.length > 0 ? (
                            props.queries.map(query=>
                                <TableRow key={query.id}>
                                    <TableCell>{query.id}</TableCell>
                                        <TableCell id="value">{query.value}</TableCell>
                                        <TableCell>
                                            <IconButton aria-label="delete" id="deleteButton" onClick={()=>props.removeQuery(query.id)}>
                                                    <DeleteIcon />
                                            </IconButton>
                                        </TableCell>
                                </TableRow>
                            )
                        ):(
                            <TableRow>
                                
                            </TableRow>
                        )}
                        </TableBody>
                    </Table>
                </TableContainer>
        </React.Fragment>
    )
}
