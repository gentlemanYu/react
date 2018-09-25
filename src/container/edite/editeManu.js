import React, { Component } from 'react';
import { Menu, Icon } from 'antd';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;



class EditeManu extends Component {
  
	handleClick = (e) => {
		console.log('click ', e);
	}

	render() {
		return (
			<Menu
			onClick={this.handleClick}
			style={{ width: 200 }}
			defaultSelectedKeys={['9']}
			mode="inline"
		>
		<Menu.Item key="9">Option 9</Menu.Item>
		<Menu.Item key="10">Option 10</Menu.Item>
		<Menu.Item key="11">Option 11</Menu.Item>
		<Menu.Item key="12">Option 12</Menu.Item>
		</Menu>
		) 
	}
}

export default EditeManu
