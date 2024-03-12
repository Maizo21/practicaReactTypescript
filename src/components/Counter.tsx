import React from 'react'

const Counter = () => {

    const [counter, setCounter] = React.useState(0);


  return (
    <>
        <h3>Counter</h3>
        <span>Counter value: {counter}</span>
        <div>
            <button 
                className="btn btn-primary"
                onClick={() => setCounter(counter + 1)}
            >
                +1
            </button>
            <button 
                className="btn btn-primary"
                onClick={() => setCounter(counter - 1)}
            >
                -1
            </button>
        </div>
    </>
  )
}

export default Counter