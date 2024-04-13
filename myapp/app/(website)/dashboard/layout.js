import Header from '@/components/Header'
import React from 'react'

const layout = ({children}) => {
  return (
    <div>
        <Header />
       <main
       className='flex flex-col min-h-screen max-w-screen-lg mx-auto'
       >
       {children}
       </main>
    </div>
  )
}

export default layout