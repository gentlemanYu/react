import React, { Component } from 'react';
import EditeManu from './edite/editeManu'
import EditeContent from './edite/editeContent'
import './edite/edite.less'
class Edite extends Component {
  constructor(props) {
		super(props)
		this.state={
			dataSource :[{
				key: '1',
				name: 'ssss',
				pice: 32,
			}, {
				key: '2',
				name: 'aaaaa',
				pice: 42,
			}]
		} 
	}
	addNewCallback =(v)=> {
		let { dataSource } = this.state
		let objlist = {
			name:v.name,
			pice:v.pice,
			key:v.key
		}
		dataSource.push(objlist)
		this.setState({
			dataSource:dataSource
		})
	}
	changeEditeValueCallback=(v)=> {
		let { dataSource } = this.state 
		dataSource.map(item=> {
			if(item.key === v.key) {
				item.name = v.name
				item.pice = v.pice
			}
		})
		this.setState({dataSource:dataSource})
	}
	editeRemoveCallback=(v)=> {
		let { dataSource } = this.state 
		dataSource.map((item,index)=> {
			if(item.key === v.key) {
				dataSource.splice(index,1)
			}
		})
		this.setState({dataSource:dataSource})
	}
  render() {
		let { dataSource } = this.state
    return (
			<div className='edite'>
				<EditeManu />
				<EditeContent 
				addNewCallback={this.addNewCallback} 
				dataSource={dataSource} 
				changeEditeValueCallback={this.changeEditeValueCallback}
				editeRemoveCallback={this.editeRemoveCallback}
				/>
			</div>
		)
  }
}

export default Edite
