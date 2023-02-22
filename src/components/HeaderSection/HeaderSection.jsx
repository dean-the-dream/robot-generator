import "./HeaderSection.scss"

const HeaderSection = ({handleAdd}) => {
    const handleClick = (e) => {
        e.preventDefault();
        const input = document.querySelector("input")
        let r = Math.floor(Math.random()*255)
        let g = Math.floor(Math.random()*255)
        let b = Math.floor(Math.random()*255) 
        handleAdd([input.value, new Date(),[r,b,g]])
        input.value = ""
    }

  return (
    <div>
        <h1>Robot Generator</h1>
        <h4>Type anything to generate a robot!</h4>
        <form action="">
            <input type="text" placeholder="Type anything..." />
            <button onClick={(e) => handleClick(e)}>Generate Robot</button>
        </form>
    </div>
  )
}

export default HeaderSection