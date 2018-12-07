import React, { Component } from 'react';
import './App.css';
import Header from './components/header'
import Footer from './components/footer'
import addSnackForm from './components/addSnackForm'
import snackList from './components/snackList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
		<snackList />
		<addSnackForm />
		<Footer />
      </div>
    );
  }
}

export default App;
