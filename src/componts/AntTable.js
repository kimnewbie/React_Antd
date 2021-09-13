import React from 'react'
import { Table } from 'antd';

export default function AntTable() {
    const data = [
        {
            name: '김유진',
            age: 33,
            address: 'address1',
            key: '1',
            render: name => {
                return <a>{name}</a>
            }
        },
        {
            name: '팬더',
            age: 12,
            address: 'address2',
            key: '2'
        },
        {
            name: '라이언',
            age: 10,
            address: 'address3',
            key: '3'
        }
    ]

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'key'
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'key',
            sorter: (a, b) => a.age - b.age
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'key'
        },
        {
            title: 'Graduated?',
            key: 'key',
            render: playload => {
                return <p>{playload.age > 20 ? 'True' : 'False'}</p>
            }
        }
    ]
    return (
        <div>
            <Table
                dataSource={data}
                columns={columns}
            />
        </div>
    )
}
