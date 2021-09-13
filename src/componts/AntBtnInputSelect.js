import React, { useState } from 'react'
import { Button, Input, Select } from 'antd';
import { PoweroffOutlined, UserOutlined } from '@ant-design/icons';

export default function AntBtnInputSelect() {
    const [loading, setLoading] = useState(false);

    const onButtonClick = (e) => {
        console.log('Button Clicked')
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }

    const fruits = ['Banana', 'Mango', 'Orange', 'Cheery']
    return (
        <div>
            <Button
                className='my-button'
                type='primary'
                //href="https://google.com"
                block
                loading={loading}
                icon={<PoweroffOutlined />}
                //style={{backgroundColor:'#00704a', color:'white'}} 
                onClick={onButtonClick}
            >My first Button</Button>
            <Input
                type="text"
                block
                placeholder="Input"
                maxLength={10}
                prefix={<UserOutlined />}
                allowClear
            >
            </Input>
            <Input.Search
                placeholder="Input Search"
            >
            </Input.Search>
            <Select placeholder='Select fruit' style={{ width: '100%' }}>
                {fruits.map((fruit, index) => {
                    return <Select.Option key={index} value={fruit}>{fruit}</Select.Option>
                })}
            </Select>
            <Select
                mode="multiple"
                placeholder='Select fruit'
                style={{ width: '100%' }}
                maxTagCount={2}
                allowClear
            >
                {fruits.map((fruit, index) => {
                    return <Select.Option key={index} value={fruit}>{fruit}</Select.Option>
                })}
            </Select>
        </div>
    )
}
