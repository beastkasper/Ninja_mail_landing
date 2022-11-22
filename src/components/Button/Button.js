import classNames from 'classnames'
import React from 'react'
import './Button.css'
const Button = ({
  text = 'Button',
  onClick = () => {},
  className = '',
  outLine = false,
  primary = false,
  disabled = false,
}) => {
  return (
    <button 
      className=
        {
          classNames(className, primary && 'primaryBtn', outLine && 'outLineBtn', disabled && 'disabledBtn')
        } 
      onClick={() => {
        if (!disabled) {
          onClick()
        }
      }}>
      {text}
    </button>
  )
}

export default Button