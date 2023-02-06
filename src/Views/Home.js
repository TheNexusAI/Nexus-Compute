import React from 'react'
import Image from 'next/image'

const Home = () => (
  <div className='flex flex-col items-center justify-center mt-auto mt-auto mb-auto'>
    <Image src='/logo.svg' width={92} height={92} />
    <Image className='my-16' src='/nexus.svg' width={402} height={58} />
  </div>
)

export default Home