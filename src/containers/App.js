import React, { PureComponent } from 'react';
import logo from '../logo.svg';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

import withClass from '../hoc/withClass';
import Aux from '../hoc/Aux';

export const AuthContext = React.createContext(false);

class App extends PureComponent {

  constructor(props) {
    super(props);
    console.log('[App.js] Inside constructor', props);


    this.state = {
      persons: [
        {id: 'abcd', name: 'Teste', age: 20},
        {id: 'xpto', name: 'Teste 2', age: 50}
      ],
      otherState: 'some other value',
      showPersons: false,
      authenticated: false
    }
  }

  componentWillMount() {
    console.log('[App.js] Inside componentWillMount()');
  }

  componentDidMount () {
    console.log( '[App.js] Inside componentDidMount()' );
  }

/*   shouldComponentUpdate ( nextProps, nextState ) {
    console.log( '[UPDATE App.js] Inside shouldComponentUpdate', nextProps, nextState );
    return true;
  } */

  componentWillUpdate ( nextProps, nextState ) {
    console.log( '[UPDATE App.js] Inside componentWillUpdate', nextProps, nextState );
  }

  componentDidUpdate () {
    console.log( '[UPDATE App.js] Inside componentDidUpdate' );
  }


/*   state = {
    persons: [
      {id: 'abcd', name: 'Teste', age: 20},
      {id: 'xpto', name: 'Teste 2', age: 50}
    ],
    otherState: 'some other value',
    showPersons: false
  } */

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

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log( '[App.js] Inside getDerivedStateFromProps', nextProps,  prevState);
    return prevState;
  }

  //permite tirar uma foto do DOM
  //bom pra salvar a posição atual de rolagem
  getSnapshotBeforeUpdate() {
    console.log( '[UPDATE] Inside getSnaphotBeforeUpdate');
  }

  loginHandler = () => {
    this.setState({ authenticated: true });
  }

  render() {
    console.log( '[App.js] Inside render()' );

    let persons = null;

    if(this.state.showPersons) {
      persons = <Persons persons={this.state.persons} 
                   clicked={this.deletePersonHandler} 
                   changed={this.nameChangedHandler} />
    }

    return (
        <Aux>

          <button onClick={() => this.setState( { showPersons: true })}>Show Persons </button>

          <Cockpit showPersons={this.state.showPersons}
                   persons={this.state.persons}
                   clicked={this.togglePersonsHandler}
                   titleApp={this.props.title}
                   login={this.loginHandler} />
          <AuthContext.Provider value={this.state.authenticated}>
              {persons}
          </AuthContext.Provider>
        </Aux>
    );
  }
}

export default withClass(App, classes.App);
