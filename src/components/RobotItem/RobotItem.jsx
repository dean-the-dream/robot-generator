import React from 'react'


const RobotItem = ({handleRemove, text}) => {
    let pic = `https://robohash.org/${text}`
  return (
    <div className="outline" onClick={() => handleRemove(text)}>
        <img src={pic} alt="" />
    </div>
    
  )
}

export default RobotItem