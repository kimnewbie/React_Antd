import React, { useEffect, useState } from 'react';
import { DatePicker } from 'antd';

const { RangePicker } = DatePicker;

export default function AntDatePicker() {
    const [inputValue, setInputValue] = useState([]);

    const onChangeRangePicker = (e) => {
        console.log(e)
        setInputValue(e);
    }

    return (
        <div>
            <DatePicker /><br />
            <RangePicker
                format="YYYY-MM-DD"
                onChange={onChangeRangePicker}
                value={inputValue}
            />
            <br />
        </div>
    )
}
