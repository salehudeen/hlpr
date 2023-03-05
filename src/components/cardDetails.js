import React from 'react'

const CardDetails = () => {
  return (
    <div>
      
      <div className='detailscontainer'>
       <div class = 'circleleft'></div>
       <div class = 'circleright' ></div>
        <img className='detailsImg' src={require('../assets/Orimg.jpg')}  alt=''/>
        <div
        className='detailsContent'>
          <p>Lorum ispausnfaf urinsn sybfirfbsnskner jnerberbsjshufbesiufseuhevurbfyfe</p>
          <p>Lorum ispausnfaf urinsn sybfirfbsnskner jnerberbsjshufbesiufseuhevurbfyfe</p>
          <p>Lorum ispausnfaf urinsn sybfirfbsnskner jnerberbsjshufbesiufseuhevurbfyfe</p>
          <p>Lorum ispausnfaf urinsn sybfirfbsnskner jnerberbsjshufbesiufseuhevurbfyfe</p>
          <button className='detailsButton' >Send</button>
        </div>
      </div>

    </div>
  )
}

export default CardDetails