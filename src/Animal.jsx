import React from 'react'
import Bar from './Bar'

function Animal({type,health,status}) {
  return (
    <div className=' flex flex-col items-center p-4 border rounded shadow-md m-2 w-48'>
        <h1 className=' font-bold text-3xl'>{type}</h1>
        <div className=' w-full bg-gray-500 h-6 rounded-[20px]'>
            <Bar health={health}/>
        </div>
        <p className=' mt-2 text-[10px] text-[green]'>{health}%</p>
        <p className=' text-sm $ {status === "alive" ? "text-green-500"}'>{status}</p>
        </div>
  )
}

export default Animal