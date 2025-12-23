import React, { useState } from 'react'

const TextForm = () => {

    const [text, setText] = useState("");
    
    function handleClick(){
        setText(text.toUpperCase())
        console.log(text)
    }

  return (
    <div className='container pt-4'>
      <form className='d-flex flex-column'>
        <label className='h2 border-bottom border-4 border-primary'>Enter some text below</label>
        <textarea 
            rows={8} 
            placeholder='enter text here...' 
            value={text}
            onChange={ (e)=>setText(e.target.value) }
        ></textarea>
        <button type='button' className='btn btn-primary' onClick={handleClick}>Click to Change Text</button>
      </form>
    </div>
  )
}

export default TextForm
