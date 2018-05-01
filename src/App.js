import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';



class App extends Component {
  state = {
    persons: [
      {name: "Teste", age: 20},
      {name: "Teste 2", age: 50}
    ]
  }

  switchNameHandler = (newName) => {
    //console.log('Was clicked!')

    this.setState({
      persons: [
        {name: newName, age: 20},
        {name: "Teste 2", age: 50}
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState( {
      persons: [
        { name: 'Max', age: 28 },
        { name: event.target.value, age: 29 }
      ]
    } )
  }


  render() {


    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px'
    }

    return (
      <div className="App">
        <h1>Teste</h1>
        <button 
          style={style}
          onClick={this.switchNameHandler.bind(this, 'Teste buttom')}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person 
            name={this.state.persons[1].name} 
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, 'Teste Person')}
            changed={this.nameChangedHandler} >Text between Person tags</Person>
      </div>
    );
  }
}

export default App;
