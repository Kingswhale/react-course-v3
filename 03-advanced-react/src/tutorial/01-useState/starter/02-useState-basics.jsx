import { useState } from 'react'
const UseStateBasics = () => {
  const [count, setCount] = useState(10)
  const handleClick = () => {
    setCount(count + 1)
  }
  return (
    <>
      <h2>useState Test {count} basics</h2>
      <button className='btn' onClick={handleClick}>
        Click me
      </button>
    </>
  )
}

export default UseStateBasics
