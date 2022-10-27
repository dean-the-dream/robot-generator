import './App.css';
import {HeaderSection, RobotContainer} from './components'
import { useState } from 'react';

function App() {
  const [robotList, setRobotList] = useState(["apple","tree", "elephant"])
  const handleAdd = (text) => {

    setRobotList([...robotList,text]);

  }
  const handleRemove = (text) => {
    setRobotList(robotList.filter((item, index)=> text!==item ))
    
  }

  return (
    <div className="App">
    <HeaderSection handleAdd={handleAdd}/>
    <RobotContainer handleRemove={handleRemove} robotList={robotList}/>
    </div>
  );
}

export default App;
