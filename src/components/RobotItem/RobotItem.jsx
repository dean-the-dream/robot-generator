// import './RobotItem.scss'



const RobotItem = ({handleRemove, text}) => {
    
    let r = Math.floor(Math.random()*255)
    let g = Math.floor(Math.random()*255)
    let b = Math.floor(Math.random()*255) 
  
    let pic = `https://robohash.org/${text[0]}.png`
  return (
    <div className="outline" onClick={() => handleRemove(text[1])}
    style={{backgroundColor: `rgb(${r},${g},${b}`}}>
        <img src={pic} alt="" />
    </div>
    // <RobotItemDiv className="outline" 
    // onClick={() => handleRemove(text[1])}>
    //     <img src={pic} alt="" />
    // </RobotItemDiv>
    
  )
}

export default RobotItem