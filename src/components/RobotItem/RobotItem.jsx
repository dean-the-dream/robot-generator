const RobotItem = ({handleRemove, text}) => {
    let pic = `https://robohash.org/${text[0]}.png`
  return (
    <div className="outline" onClick={() => handleRemove(text[1])}
    style={{backgroundColor: `rgb(${text[2][0]},${text[2][1]},${text[2][2]}`}}>
        <img src={pic} alt="" />
    </div>   
  )
}

export default RobotItem