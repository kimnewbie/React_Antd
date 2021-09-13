import React, { useState } from 'react';
import { Spin, Button } from 'antd';

export default function AntSpin() {
    const [spinning, setSpinning] = useState(false)
    return (
        <div>
            <Spin spinning={spinning} /><br />
            <Button onClick={() => { setSpinning(preValue => !preValue) }} > Show Spinning</Button>
        </div>
    )
}
