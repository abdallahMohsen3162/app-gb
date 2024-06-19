import React from 'react'
import "../../style/loading.css";

export default function Loading(param) {
  return (
    <div className='back-loading'>
      <div>
        <div className={param.ltype}>

        </div>
      </div>
    </div>
  )
}
