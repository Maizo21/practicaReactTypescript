import React from 'react'

const BasicFunctions = () => {

    const addTwoNumbers = (a: number, b: number): number => {
        return a + b;
    }

  return (
    <>
        <h3>Basic Functions</h3>
        <span>El resultado de sumar: {addTwoNumbers(2,8)}</span>
    </>
  )
}

export default BasicFunctions