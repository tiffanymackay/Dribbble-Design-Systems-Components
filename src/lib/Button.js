import React from "react";

const Button = (props) => {  
    return (
      <button
        className="dribble-button"
        style={{
          backgroundColor: '#3E5197',
          color: 'white',
          fontFamily: 'Inter',
          fontSize: '24px',
          fontWeight: 'bold',
          border: 'none',
          padding: '16px 32px',
          borderRadius: '8px'
        }}
      >	
        {props.label}
      </button>
    )
  
  }
  
  
  export default Button;