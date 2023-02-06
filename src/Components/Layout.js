import React from 'react'
import Header from './Header'

const Layout = (props) => (
  <div className='flex flex-col container px-3 min-h-screen'>
    <Header />
    {props?.children}
  </div>
)

export default Layout