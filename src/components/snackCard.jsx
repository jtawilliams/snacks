import React, { Component } from 'react';
import SnackInfo from './snackInfo';

class SnackCard extends Component {
	constructor() {
		super();

		this.state = {
			SnackInfo: []
		}
	}
	async componentDidMount() {
		const proxy = 'https://cors-anywhere.herokuapp.com/'
		let response = await
		fetch(proxy + 'https://snacks-backend.herokuapp.com/')
		let json = await response.json()

		console.log(json)

		this.setState({
			snackInfo: json,
		})
	}

render() {
    return (
    <div>
		{this.state.snackInfo}
    </div>
    )
}
}
export default SnackCard;
