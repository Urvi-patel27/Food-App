import React from 'react'

function Buttons(props) {
  return (
    <div>
        <button className='px-6 py-1 border-2 border-orange-300 text-white hover:text-black hover:bg-orange-300  transition-all rounded'>
            {props.title}
            </button>
    </div>
  )
}

export default Buttons