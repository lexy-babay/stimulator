import React from 'react'

function Bar({health}) {
  return (
    <div className='h-6 bg-red-400 rounded-[20px]' style={{width:health+'%',transition:'1s'}}></div>
  )
}

export default Bar