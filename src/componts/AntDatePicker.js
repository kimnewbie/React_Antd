import React from 'react'
import { DatePicker } from 'antd'

export default function AntDatePicker() {
    return (
        <div>
            <DatePicker /><br />
            <DatePicker.RangePicker /><br />
        </div>
    )
}
