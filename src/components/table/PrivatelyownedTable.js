import React from 'react';
import { Table } from  'antd'

import './PrivatelyownedTable.less'


	function PrivatelyownedTable (props) {
  
	const dataSource = [{
		key: '1',
		name: 'ssss',
		pice: 32,
	}, {
		key: '2',
		name: 'aaaaa',
		pice: 42,
	}];
	
	const columns = [{
		title: 'name',
		dataIndex: 'name',
		key: 'name',
	}, {
		title: 'pice',
		dataIndex: 'pice',
		key: 'pice',
	}
];
	
	return (
		<div className='PrivatelyownedTable'>
				<h1>sss</h1>
				<div className='table'>
					<Table dataSource={dataSource} columns={columns} bordered={true} pagination={false}/>
					<Table dataSource={dataSource} columns={columns} bordered={true} pagination={false}/>
				</div>
		</div>
	)

}

export default PrivatelyownedTable
