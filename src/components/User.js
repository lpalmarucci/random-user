import React from 'react'
import {Button, Card, CardActions, CardContent, Typography} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {Link} from 'react-router-dom';

class User extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            "person_info" : this.props.person_info,
            "id" : this.props.person_info.id
        }
    }

    render(){
        const person = this.state.person_info;
        return(
            <Card className="card">
                <CardContent>
                    <div>
                        <b>Name: </b>{person.name} <br/>
                        <b>Username: </b>{person.username}<br/>
                        <b>Address: </b>{person.address.suite} {person.address.street} {person.address.city} {person.address.zipcode}<br/>
                        <b>Company: </b>{person.company.bs} {person.company.name} {person.company.catchPhrase}<br/>
                    </div>
                    
                </CardContent>
                <CardActions>
                    <Button 
                        component={Link}
                        size="medium" 
                        variant="contained"
                        search={"?name=" +person.name }
                        color="primary"
                        to={'/posts/'+ parseInt(person.id)}
                    >Vedi post</Button>
                </CardActions>
            </Card>
        )
    }
}
export default User;