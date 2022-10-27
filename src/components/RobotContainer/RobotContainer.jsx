import RobotItem from "../RobotItem/RobotItem.jsx"
import "./RobotContainer.scss"

const RobotContainer = ({robotList, handleRemove}) => {

    
  return (
    <div>
        <h3>Robot List</h3>
        <div className="container">
            {robotList.map(text =><RobotItem handleRemove={handleRemove} text={text} key={text[1]}/>)
            }
        </div>
    </div>
  )
}

export default RobotContainer