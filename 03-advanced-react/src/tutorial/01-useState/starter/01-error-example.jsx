const ErrorExample = () => {
  let count = 0

  const handleClick = () => {
    count = count + 1
    console.log('This is the click', count)
  }

  return (
    <>
      <h2>{count}</h2>
      <button type='button' className='btn' onClick={handleClick}>
        Click Increament
      </button>
    </>
  )
}

export default ErrorExample
