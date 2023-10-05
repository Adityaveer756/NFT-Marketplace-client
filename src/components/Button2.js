import React from 'react'
import './Button2.css'

const Button2 = (props) => {
  return (
    <> 
    {props.inlineStyle?
    (<button className={`button-2 ${props.cssClass}`}
             onClick={props.onClick} 
             style={{
                     backgroundColor: props.isMouseEnter?"#fff":"rgba(0,0,0,0.8)",
                     color: props.isMouseEnter?"#282C35":"#fff"
                    }}
                    >
      {props.text}
    </button>)
    :
    (<button className={`button-2 ${props.cssClass}`} onClick={props.onClick} type={props.type}> 
            {props.text}
    </button>)
    }
      
    </>
  )
}

export default Button2;
