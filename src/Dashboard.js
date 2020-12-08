import React from 'react';
import ReactDOM from 'react-dom';
import './Dashboard.css';
import User from './components/User'



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
						<User key={person.id} person_info={person}/>
					))} 
				</div>
			)
			
		}
		
	}
}

export default Dashboard;
