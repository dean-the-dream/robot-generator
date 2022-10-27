import './App.css';
import {HeaderSection, RobotContainer} from './components'
import { useState } from 'react';

function App() {
  const [robotList, setRobotList] = useState([])
  const handleAdd = (text) => {

    setRobotList([...robotList,text]);

  }
  const handleRemove = (text) => {
    setRobotList(robotList.filter((item, index)=> text!==item[1]))
    
  }

  return (
    <div className="App">
    <HeaderSection handleAdd={handleAdd}/>
    <RobotContainer handleRemove={handleRemove} robotList={robotList}/>
    </div>
  );
}

export default App;
