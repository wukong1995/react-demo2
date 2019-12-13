import React from 'react'

import { Table } from 'antd';

const columns = [
  {
    title: 'Full Name',
    width: 100,
    dataIndex: 'name',
    key: 'name',
    fixed: 'left',
  },
  {
    title: 'Age',
    width: 100,
    dataIndex: 'age',
    key: 'age',
    fixed: 'left',
  },
  {
    title: 'Column 1',
    dataIndex: 'address',
    key: '1',
    width: '25%',
  },
  {
    title: 'Column 2',
    dataIndex: 'address',
    key: '2',
    width: '25%',
  },
  {
    title: 'Column 3',
    dataIndex: 'address',
    key: '3',
    width: '25%',
  },
  {
    title: 'Column 4',
    dataIndex: 'address',
    key: '4',
    width: '25%',
  },
  {
    title: 'Action',
    key: 'operation',
    fixed: 'right',
    width: 100,
    render: () => <a>action</a>,
  },
];

const data = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    name: `Edrward ${i}`,
    age: 32,
    address: `London Park no. ${i}`,
  });
}

const x = 300 + 4 * 150
console.log('----', x)

const TableDemo = () => {
  return (
    <Table tableLayout="fixed" columns={columns} dataSource={data} scroll={{ x, y: 300 }} />
  )
}

export default TableDemo