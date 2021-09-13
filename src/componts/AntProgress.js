import React from 'react'
import { Progress } from 'antd';

export default function AntProgress() {
    return (
        <div>
            <Progress percent={88} /><br />
            <Progress percent={88} type='circle' /><br />
            <Progress percent={88} type='circle' status='success' /><br />
            <Progress percent={88} type='circle' status='exception' /><br />
            <Progress percent={88} type='line' strokeColor='green' status='active' /><br />
            <Progress percent={88} type='line' strokeColor='green' strokeWidth={50} status='active' /><br />
            <Progress percent={88} type='line' strokeColor='green' status='success' steps={5} /><br />
        </div>
    )
}
