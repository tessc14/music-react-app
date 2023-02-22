import React from 'react'

function Form() {
  return (
    <form>
        <label htmlFor="favourite" className="top">Which is your favourite song?</label>
        <input type="text"/>
        <input type="submit" />
    </form>
  )
}

export default Form