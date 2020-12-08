import React from 'react';
import ReactDOM from 'react-dom';
import './Dashboard.css';
import {Button, Card, CardActions, CardContent, Typography} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {Link} from 'react-router-dom';




class Dashboard extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			persons: Array(10).fill(null),
			isLoaded: false,
			error: null
		};
	}

	componentDidMount(){
		fetch("https://jsonplaceholder.typicode.com/users")
			.then(res => res.json())
			.then(res => {
				console.log(res);
				this.setState({
					persons: res,
					isLoaded: true
				})
			},
			(error) => {
				this.setState({
					isLoaded:true,
					error
				})
				console.error(error)
			})
	}

	handleClickPost(user_number){
		console.log(user_number);
		
	}

	render(){
		const {persons,error,isLoaded} = this.state;

		if(!this.state.isLoaded){
			return <div>Loading...</div>
		} else if(error){
			return <div>{error.message}</div>
		} else if(persons){
			return (
					<div className="root">
						{this.state.persons.map((person, idx) => (
							<Card key={person.id} className="card">
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
										color="primary"
										to={'/posts/'+ parseInt(idx)}
									>Vedi post</Button>
								</CardActions>
							</Card>
						))} 
					</div>
			)
			
		}
		
	}
}

export default Dashboard;
