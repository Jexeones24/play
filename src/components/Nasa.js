import React from 'react'

export const Nasa = (props) => {
  console.log(props)
  let url = props.url
  return (
    <div>
      <h1>NASA</h1>
      <div className='box-nasa'>
        <div className='content-nasa'>
          <img src={url} alt='img' />
        </div>
      </div>
    </div>
  )
}
