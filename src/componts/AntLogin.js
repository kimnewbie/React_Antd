import React, { useState } from 'react';
import { Alert, Form, Button, Input } from 'antd';

export default function AntLogin() {
    const [showAlert, setShowAlert] = useState(false);

    const onFinish = (e) => {
        console.log(e)
        setTimeout(() => {
            setShowAlert(true)
            //message.warning('Login Error');
        }, 1000);
    }
    return (
        <div>
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
            {showAlert &&
                <Alert
                    type='error'
                    message='Error'
                    description='There was an error on login.' />
            }
        </div>
    )
}
