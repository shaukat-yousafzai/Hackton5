import React from 'react'
import Container from './Container'
import AboutHomeImage from './AboutHomeImage'
import SecondLeft from './SecondLeft'

const AboutHome = () => {
  return (
    <div className='flex items-center justify-center mt-20'>
        <Container className='flex items-center justify-between gap-14'>
            <SecondLeft/>
            <AboutHomeImage/>
        </Container>
    </div>
  )
}

export default AboutHome