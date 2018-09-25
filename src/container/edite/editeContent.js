import React, { Component } from 'react';
import { Table, Input, Button, Modal } from 'antd'

class EditeContent extends Component {
  constructor(props) {
		super(props)
		this.state= {
			name:'',
			pice:'',
			key:'',
			editeVisible: false,
			editeModalValue:{},
		}
	}
	addNewCallback=()=> {
		if(this.state.name === '' || this.state.pice === '' ) {
			return false;
		}
		const { dataSource=[] } = this.props
		let objCallbackValue= {
			name:this.state.name,
			pice:this.state.pice,
			key:dataSource.length+1 
		}
		this.props.addNewCallback(objCallbackValue)
		this.setState({
			name:'',
			pice:'',
		})
	} 
	// edite modal
	showEditeModal = (r,t,index) => {
		let curuntValue = {...r}
    this.setState({
			editeVisible: true,
			editeModalValue:curuntValue
		});
  }

  editeHandleOk = (e) => {
		let { editeModalValue } = this.state
		if(editeModalValue.pice === '' || editeModalValue.name === '') {
			return false
		}
    this.setState({
      editeVisible: false,
		});
		this.props.changeEditeValueCallback(editeModalValue)
  }

  editeHandleCancel = (e) => {
    this.setState({
      editeVisible: false,
    });
	}
	changeEditeValue=(v,type)=>{
		let { editeModalValue } = this.state
		editeModalValue[type] = v
		
		this.setState({
			editeModalValue:editeModalValue
		})
	}
	editeRemove=()=> {
		let { editeModalValue } = this.state
		this.props.editeRemoveCallback(editeModalValue)
		this.setState({
      editeVisible: false,
    });
	}
  render() {
		const { dataSource } = this.props
		const columns = [{
			title: 'name',
			dataIndex: 'name',
			key: 'name',
		}, {
			title: 'pice',
			dataIndex: 'pice',
			key: 'pice',
		},
		{
			title: 'action',
			render:(r,t,index)=> {
				return <a onClick={()=>this.showEditeModal(r,t,index)}>edite</a>
			}
		}
	];
    return (
			<div className='editeContent'>
				<h1>price</h1>
				<Table dataSource={dataSource} columns={columns} bordered={true} pagination={false}/>
				<div className='addNewAdite'>
					<Input style={{width:'250px'}} placeholder='name' value={this.state.name} onChange={(e)=>this.setState({name:e.target.value})}></Input>
					<Input style={{width:'150px'}} placeholder='pice' value={this.state.pice} onChange={(e)=>this.setState({pice:e.target.value})}></Input>
				</div>
				<Button type='primary' onClick={this.addNewCallback}>add</Button>

				<Modal
          title="edite Modal"
          visible={this.state.editeVisible}
          onOk={this.editeHandleOk}
					onCancel={this.editeHandleCancel}
					width={300}
					footer={[
						<Button key="submit" onClick={this.editeHandleOk}>add</Button>,
						<Button key="back" type="primary" onClick={this.editeRemove}>remove</Button>,
					]}
        >
				 <div>
				 	<h3>pice</h3>
					<Input style={{width:'220px'}} placeholder='pice' value={this.state.editeModalValue.pice} onChange={(e)=>this.changeEditeValue(e.target.value,'pice')}></Input>
				 </div>
				<div>
					<h3>name</h3>
					<Input style={{width:'220px'}} placeholder='name' value={this.state.editeModalValue.name} onChange={(e)=>this.changeEditeValue(e.target.value,'name')}></Input>
				</div>   
        </Modal>
			</div>
		)
  }
}

export default EditeContent
