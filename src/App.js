import React, { Component } from 'react';
import Login from './components/Login/Login';

import './App.css'; // css는 항상 최하단에 임포트하는 것이 컴붼쑝

class App extends Component {
	constructor() {
		super();
		this.state = {
			titleColor: 'black',
			fontSize: '100px',
			LoginColor: 'orangered',
			data: []
		};
	}

	handleColor = (e) => {
		if (this.state.titleColor === 'black') {
			this.setState({ titleColor: 'orangered' });
		} else {
			this.setState({ titleColor: 'black' });
		}
	};

	handleLogin = (e) => {
		if (this.state.LoginColor === 'orangered') {
			this.setState({ LoginColor: '#eee' });
		} else {
			this.setState({ LoginColor: 'orangered' });
		}
	};

	componentDidMount() {
		fetch('http://localhost:3000/data/data.json')
			.then((response) => response.json())
			.then((response) => {
				console.log(response.data);
				this.setState({ data: response.data });
				console.log(this.state.data);
			});
	}

	render() {
		return (
			// 시작 태그의 className은 컴포넌트 명과 동일하게 작성하도록..우리끼리규칙!
			<div className='App'>
				<h1
					style={{
						color: this.state.titleColor,
						fontSize: this.state.fontSize
					}}>
					REACT ALL DAY!
				</h1>
				<button onClick={this.handleColor}>CHANNNNNGE</button>
				<h1 className='login-title'>Loggggin!</h1>
				<Login // Props에 전달할 state! 췤킹!
					LoginColor={this.state.LoginColor}
					handleLogin={this.handleLogin}
				/>
				<div>
					<h1 className='login-title'>USER INFO!</h1>
					{this.state.data.map((el) => {
						return (
							<div className='user-box'>
								<span>+ {el.name} +</span>
								<span> {el.age}</span>
							</div>
						);
					})}
				</div>
			</div>
		);
	}
}

export default App;
