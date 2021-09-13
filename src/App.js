import './App.css';
import 'antd/dist/antd.css';
import {
  Button, Input, Select, Form, Table, message, Alert, DatePicker, Spin, Progress
} from 'antd';
import React, { useState } from 'react';
import { PoweroffOutlined, UserOutlined } from '@ant-design/icons';
import AntProgress from './componts/AntProgress';
import AntTable from './componts/AntTable';
import AntDatePicker from './componts/AntDatePicker';
import AntSpin from './componts/AntSpin';

function App() {

  const [loading, setLoading] = useState(false);

  const onButtonClick = (e) => {
    console.log('Button Clicked')
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }

  const fruits = ['Banana', 'Mango', 'Orange', 'Cheery']

  const [showAlert, setShowAlert] = useState(false);

  const onFinish = (e) => {
    console.log(e)
    setTimeout(() => {
      setShowAlert(true)
      //message.warning('Login Error');
    }, 1000);
  }




  return (
    <div className="App">
      <div className="App-header">
        <AntProgress />
        <AntDatePicker />
        <AntSpin />

        {showAlert &&
          <Alert
            type='error'
            message='Error'
            description='There was an error on login.' />
        }
        <br />
        <Form onFinish={onFinish}>
          <Form.Item label="User Name" name="username">
            <Input placeholder="User name" />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input.Password placeholder="Password" />
          </Form.Item>
          <Form.Item>
            <Button block htmlType='submit' type='primary'>Log in</Button>
          </Form.Item>
        </Form>
        <br />
        <AntTable />
        <br />
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
    </div>
  );
}

export default App;
