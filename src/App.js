import React, { Component } from 'react';
import './App.css';
import Header from './components/header'
import Footer from './components/footer'
import AddReviewForm from './components/addReviewForm'
import SnackList from './components/snackList'
import Signup from './components/signup'
import SnackInfo from './components/snackInfo'

class App extends Component {
	constructor() {
		super()
		this.state = {
			snacks: [],
			selectedSnack: null
		}
	}

	async componentDidMount() {
		const proxy = 'https://cors-anywhere.herokuapp.com/'
		let response = await
		fetch(proxy + 'https://snacks-backend.herokuapp.com/')
		let json = await response.json()

		console.log(json)

		this.setState({
			snacks: json,
		})
	}

	titleInput = (event) => {
		this.setState({
			title: event.target.value
		})
	}
	textInput = (event) => {
		this.setState({
			text: event.target.value
		})
	}
	ratingInput = (event) => {
		this.setState({
			rating: event.target.value
		})
	}
	addToList = (event) => {
		var newReview = {
			id: this.state.snackList.length +1,
			title: this.state.title,
			text: this.state.text,
			rating: this.state.rating
		}
		this.setState({
			snackList: [...this.state.snackList, newReview]
		})
	}
	grabThis = e => {
    const array = this.state.snackInfo.filter(snack => snack.name === e);
     this.setState({
       selectedSnack: array[0],
   	});
   };

  render() {
    return (
      <div className="App">
        <Header />
		<SnackList snacks={this.state.snacks} grabThis={this.state.selectedSnack} />
		<AddReviewForm {...this.state} titleInput={this.titleInput} textInput={this.textInput} rating={this.ratingInput}/>
		<Signup />
		<Footer />
      </div>
    );
  }
}

export default App;
