import React, {Component} from 'react';
import Table from './Table';
import Form from './Form';

class App extends Component{
	state = {characters: []};
	removeCharacter = (index) => {
		const {characters} = this.state;
		this.setState({characters: characters.filter((character,i) => i != index )});
	}
	handleSubmit = (character) => {
		this.setState({characters: [...this.state.characters,character]});
	};
	render(){
		return (
				<div className="container">
					<h1>Dynamic Table Using React</h1>
					<p>Fill in the form and click submit to insert values in the table.
					Click delete to delete.</p>
					<Form handleSubmit={this.handleSubmit} />
					<Table 
						characterData={this.state.characters} 
						removeCharacter={this.removeCharacter} />
				</div>
			);
	}
}

export default App;