import './App.css';
import 'antd/dist/antd.css'; 
import { 
  Button, Input, Select, Form, Table, message, Alert, DatePicker, Spin, Progress
} from 'antd';
import React, {useState} from 'react';
import { PoweroffOutlined, UserOutlined } from '@ant-design/icons';

function App() {

  const [ loading, setLoading ] = useState(false);

  const onButtonClick = (e) => {
    console.log('Button Clicked')
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }

  const fruits = ['Banana', 'Mango', 'Orange', 'Cheery']  
  
  const [ showAlert, setShowAlert ] =  useState(false);

  const onFinish = (e) => {
    console.log(e)
    setTimeout(()=>{
      setShowAlert(true)
      //message.warning('Login Error');
    }, 1000);
  }

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
      sorter: (a,b) => a.age - b.age
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
        return <p>{playload.age>20? 'True' : 'False'}</p>
      }
    }
  ]

  const [ spinning, setSpinning ] = useState(false)

  return (
    <div className="App"> 
      <div className="App-header"> 
        <Progress percent={88} /><br />
        <Progress percent={88} type='circle' /><br />
        <Progress percent={88} type='circle' status='success' /><br />
        <Progress percent={88} type='circle' status='exception' /><br />
        <Progress percent={88} type='line' strokeColor='green' status='active' /><br />
        <Progress percent={88} type='line' strokeColor='green' strokeWidth={50} status='active' /><br />
        <Progress percent={88} type='line' strokeColor='green' status='success' steps={5} /><br />
        <DatePicker /><br />
        <DatePicker.RangePicker /><br />
        <Spin spinning={spinning}></Spin>
        <Button onClick={()=>{setSpinning(preValue=>!preValue)}} > Show Spinning</Button>
        { showAlert &&
          <Alert 
          type='error' 
          message='Error' 
          description= 'There was an error on login.' />
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
            <Button  block htmlType='submit' type='primary'>Log in</Button>
          </Form.Item>
        </Form> 
        <br/>
        <Table
          dataSource={data}
          columns={columns}
        >

        </Table>
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
        <Select placeholder='Select fruit' style={{width:'100%'}}>
          {fruits.map((fruit, index)=>{
            return <Select.Option key={index} value={fruit}>{fruit}</Select.Option>
          })}
        </Select>
        <Select 
          mode="multiple" 
          placeholder='Select fruit' 
          style={{width:'100%'}}
          maxTagCount={2}
          allowClear
        >
          {fruits.map((fruit, index)=>{
            return <Select.Option key={index} value={fruit}>{fruit}</Select.Option>
          })}
        </Select>
      </div>
    </div>
  );
}

export default App;
