'use client'

import React from 'react'
import { BaseButtonProps } from "../types"

const BaseButton: React.FC<BaseButtonProps> = ({ title = 'Default Button', action, isDisable = false }) => {
  return (
    <>
      <button 
        disabled={isDisable} 
        onClick={action} 
        className='font-semibold text-[16px] px-4 py-1 bg-white border-2 border-[#efeeef] my-2 hover:bg-[#f6f9fb] disabled:bg-[#c0c0c0] disabled:text-white'
      >
        {title}
      </button>
    </>    
  )


}

export default BaseButton