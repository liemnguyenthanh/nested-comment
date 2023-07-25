import React, { PropsWithChildren } from 'react'

export const Box: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className='rounded-lg border border-black-500 shadow-sm bg-white w-full'>
      {children}
    </div>
  )
}
