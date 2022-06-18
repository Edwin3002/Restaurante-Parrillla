import React from 'react'
import fire from '../icons/fire.png'
export const Fire = ({n}) => {
  return (
    <div >
        <img className={n <= 0?'fire': 'n'}  src={fire} alt='clock' />
        <img className={n <= 1?'fire': 'n'}  src={fire} alt='clock' />
        <img className={n <= 2?'fire': 'n'}  src={fire} alt='clock' />
        <img className={n <= 3?'fire': 'n'}  src={fire} alt='clock' />
        <img className={n <= 4?'fire': 'n'}  src={fire} alt='clock' />
        </div>
  )
}
