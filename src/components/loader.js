import React from 'react'

export const Loading = () => {
  return <Loader/>
}


const Loader = () => {
  return (
    <div>
        <div className='loaderBody'>
           
        <div className="loaderWrapper">
           <span className='loaderSpan'></span>
        </div>

        </div>
        

    </div>
  )
}

export default Loader