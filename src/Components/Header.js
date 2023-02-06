import React from 'react'
import Image from 'next/image'

const Header = () => (
  <div className='h-16 flex align-center'>
    <Image src='/logo.svg' width={32} height={32} />
    <Image className='ml-auto' src='/avatar/david.svg' width={32} height={32} />
  </div>
)

export default Header