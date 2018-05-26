import React, { Component } from 'react';
import logo from '../logo.svg';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  state = {
    persons: [
      {id: 'abcd', name: 'Teste', age: 20},
      {id: 'xpto', name: 'Teste 2', age: 50}
    ],
    otherState: 'some other value',
    showPersons: false
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    })

    const person = {
      ...this.state.persons[personIndex]
    };

    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( {persons: persons} )
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState( {showPersons: !doesShow} );
  }


  render() {
    let persons = null;
    let btnClass = '';

    if(this.state.showPersons) {
      persons = <Persons persons={this.state.persons} 
                   clicked={this.deletePersonHandler} 
                   changed={this.nameChangedHandler} />
    }

    return (
        <div className={classes.App}>
          <Cockpit showPersons={this.state.showPersons}
                   persons={this.state.persons}
                   clicked={this.togglePersonsHandler}
                   titleApp={this.props.title} />
          {persons}
        </div>
    );
  }
}

export default App;
