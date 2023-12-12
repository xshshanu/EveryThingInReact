import React, {useState} from 'react'

const Counter = () => {

    const buttonStyle = {
        padding: '10px 20px',
        fontSize: '16px',
        backgroundColor: '#3498db',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease-in-out',
        // Hover effect
        ':hover': {
          backgroundColor: '#2980b9',
        }
      };
    
    
      const [counter, setCounter] = useState(0);
      
      const handleIncrease = () => {
    
        if(counter === 10) {
          return
        } else {
          setCounter(counter + 1);
        }
    
      };
    
      const handleDecrease = () => {
    
        if(counter === 0) {
          return
        } else {
    
          setCounter(counter - 1)
        }
      };

  return (
    <div style={{width :"300px", height : "250px", position :"absolute", left : "50%", top : "50%", transform: "translate(-50%, -50%)", border :"3px solid gray", textAlign :"center" }}>
      <h1>Counter Form</h1> <hr />
      <h3>Counter Value : {counter} </h3>

      <button style={buttonStyle} onClick={() => handleIncrease()} >Increase Value</button> <br /><br />
      <button style={buttonStyle} onClick={() => handleDecrease()}>Decrease Value</button>
    </div>
  )
}

export default Counter