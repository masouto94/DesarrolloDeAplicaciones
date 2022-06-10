import React from 'react'

const CartMenu = (props) => {
    return (
      props.condition ? <>
      {props.children}
      </>:
      <></>
    )
  }

export default CartMenu