import React from 'react'
import './Compose.css'
import Right from '../Right/Right.js'
const Compose = () => {
    return (
        <div>
            <container>
                <h1 className='compose'>Your Competence performance</h1>
                <hr></hr>
                <div className='name'>
                <div className='team'>
                <h4>TeamPlayer</h4>
               </div>
               <div className='team1'>
                <h4>probilam solving</h4>
               </div>
               <div className='team1'>
                <h4>Customer service</h4>
               </div>
               <div className='team1'>
                <h4>Communication</h4>
               </div>
               <div className='team1'>
                <h4>Result-orintation</h4>
               </div>
                </div>
                <div className='Right'>
              <Right/>
              </div>
               
            </container>
        </div>
    )
}

export default Compose