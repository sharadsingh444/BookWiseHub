import React from 'react'

const Spinner = () => {
  return (
    <div className='h-[600px] w-[1600px] flex justify-center items-center '>
    <div className=' animate-ping w-16 h-16 m-8 rounded-full bg-sky-600 flex justify-center items-center'>
      <p>loading</p>
    </div>
    </div>
  );
}

export default Spinner