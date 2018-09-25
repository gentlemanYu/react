import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb, Button  } from 'antd';
import { Route, Switch, NavLink } from "react-router-dom";
import { getMenuListData } from '../../routeslist'
import './base.less'
const { Header, Content, Sider } = Layout;

export default class Base extends Component {
	constructor(props) {
		super(props)
		this.state = {
			menuList:[],
		}
	}
	
	// static 
	componentDidMount() {
		let menuList = []
		let menuData = getMenuListData() || []
		menuList = menuData.filter(item=>item.path === '/Base')
		console.log(menuList[0].children)
		this.setState({
			menuList:menuList[0].children
		})
	}

	getBreadcrumb =()=> {
		let urlParam = window.location.hash
		let _Breadcrumb = ''
		switch (urlParam) {
			case '/Base/list':
			_Breadcrumb = 'Edite Propretise'
				break;
			case '/Base/edite':
			_Breadcrumb = 'Propreti list'
				break;
			default:
			_Breadcrumb = 'Edite Propretise'
				break;
		}


		return (
			<div className='breadcrumb'>
				<Breadcrumb style={{ margin: '16px 0' }}>
					<Breadcrumb.Item>{_Breadcrumb}</Breadcrumb.Item>
				</Breadcrumb>
			</div>	
		)	
	}

	render() {
    
		let { menuList } = this.state
		console.log(menuList)
		return (
			<Layout>
				<Header className="header">
					<div className="logo" />
				</Header>
				<Layout>
					<Sider width={200} style={{ background: '#fff' }}>
						<Menu
							mode="inline"
							defaultSelectedKeys={['1']}
							defaultOpenKeys={['sub1']}
							style={{ height: '100%', borderRight: 0 }}
						>
							<Menu.Item key="0">
								<NavLink to='/Base/list'>
									list
							</NavLink>
							</Menu.Item>
							<Menu.Item key="10">
								<NavLink to='/Base/edite'>
									edite
							</NavLink>
							</Menu.Item>
						</Menu>
					</Sider>
					<Layout style={{padding:'0 24px'}}>
						{this.getBreadcrumb()}	
						<Content style={{ background: '#fff', padding:10 , margin: 0, minHeight: 280,minWidth: 665 }}>
							<Switch>
								{
									menuList&&menuList.map(item => (
										<Route path={item.path} component={item.component} key={item.path} exact={item.exact}/>
										)
									)
								}
							</Switch>
						</Content>
					</Layout>
				</Layout>
			</Layout>
		)
	}
}
