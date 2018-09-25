import React, { Component } from 'react';
import { withRouter, NavLink  } from "react-router-dom";

import './login.less'
import { Button, Select } from 'antd';
const Option = Select.Option;


class Login extends Component {
	constructor(props) {
		super(props)
		this.state={
			language:'zhCN'
		}
	}
	componentDidMount() {
	}
	handleChange = (v)=> {
		this.setState({
			language:v
		})
	}
	login =()=> {
		localStorage.setItem("language", this.state.language)
		this.props.history.push('/Base/list')
	}
	render() {
		let { language } = this.state
		return (
			<div className='login'>
					<Select defaultValue={language} style={{ width: 120 }} onChange={this.handleChange}>
						<Option value="zhCN">中文</Option>
						<Option value="enUS">英文</Option>
					</Select>
					<Button type='primary' onClick={this.login}>登录</Button>					
			</div>
		)
	}
}

export default withRouter(Login)
