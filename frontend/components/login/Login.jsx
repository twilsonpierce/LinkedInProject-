import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import user_actions from '../../actions/User-Actions';


const Login = React.createClass({
	getInitialState(){
		return{username: 'joshuaf91', password: 'test1'}
	},
	change(key, e){
		this.setState({[key]: e.target.value})
	},
	submit(e){
		e.preventDefault();
		this.props.login(this.state)
		.then(()=>{
			this.props.router.push('/profile');
		})
	},
	redirect(e){
		this.props.router.push('/register');

	},
	render(){
		return(
			<div className="login loginFlex">
				<div className="loginImage">
					<img src="Linkedin.png" />
				</div>
				<form onSubmit={this.submit} className="loginPadding">
					<input type="text" placeholder="username" onChange={this.change.bind(this,"username")} value={this.state.username} /> 
					<input type="text" placeholder="password" onChange={this.change.bind(this,"password")} value={this.state.password} />
					<input type="submit" value="Login"/>
					{/* no longer needed because these two componenets are on the same page 
					<input type="reset" value="Register" onClick={this.redirect} />*/}
				</form>
			</div>
		)
	}
})


export default connect()(Login);