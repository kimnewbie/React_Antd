import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import AntProgress from './componts/AntProgress';
import AntTable from './componts/AntTable';
import AntDatePicker from './componts/AntDatePicker';
import AntSpin from './componts/AntSpin';
import AntLogin from './componts/AntLogin';
import AntBtnInputSelect from './componts/AntBtnInputSelect';
import AntSkeleton from './componts/AntSkeleton';

function App() {



  return (
    <div className="App">
      <div className="App-header">
        <AntSkeleton />
        {/*
        <AntProgress />
        <AntDatePicker />
        <AntSpin /><br />
        <AntLogin />
        <AntTable />
        <AntBtnInputSelect />
        */}
      </div>
    </div>
  );
}

export default App;
