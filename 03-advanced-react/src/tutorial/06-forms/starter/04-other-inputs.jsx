import { useState } from 'react'
const frameworks = ['react', 'angular', 'vue', 'svelte']
const OtherInputs = () => {
  const [shipping, setShipping] = useState(false)
  const [framework, setFramework] = useState('react')

  const handleChecked = (e) => {
    console.log('here we are', e.target.checked)
    setShipping(e.target.checked)
  }
  const handleSelect = (e) => {
    setFramework(e.target.value)
  }
  console.log('Handle Select', framework)
  return (
    <div>
      <form className='form'>
        <h4>Other Inputs</h4>
        {/* name */}
        <div className='form-row' style={{ textAlign: 'left' }}>
          <label htmlFor='shipping'> Free Shipping </label>
          <input
            type='checkbox'
            name='shipping'
            id='shipping'
            checked={shipping}
            onChange={handleChecked}
          />
        </div>
        <div className='form-row' style={{ textAlign: 'left' }}>
          <label htmlFor='framework' className='form-label'>
            Framework
          </label>
          <select
            name='framework'
            id='framework'
            value={framework}
            onChange={handleSelect}
          >
            {frameworks.map((framework) => {
              return <option key={framework}>{framework}</option>
            })}
          </select>
        </div>
        <button type='submit' className='btn btn-block'>
          submit
        </button>
      </form>
    </div>
  )
}
export default OtherInputs
