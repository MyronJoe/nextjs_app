import React from 'react'

const loading = () => {
    return (
        <div className='h-screen w-full bg-white flex justify-center items-center'>
            <div className='w-16 bg-blue-200 h-16 rounded-full relative flex justify-center items-center animate-ping'>
                <div className='w-11 bg-blue-500 h-11 rounded-full absolute'>
                </div>
            </div>
        </div>
    )
}

export default loading