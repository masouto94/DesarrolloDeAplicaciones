import React from 'react'

const StartMenu = (props) => {
  return (
    props.condition ? <>
    {props.children}
    </>:
    <></>
  )
}

export default StartMenu