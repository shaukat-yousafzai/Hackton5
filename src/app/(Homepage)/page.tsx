import AboutHome from '@/components/AboutHome'
import Container from '@/components/Container'
import Herohome from '@/components/Herohome'
import HomethirdHero from '@/components/homethirdHero'

import WHyHome from '@/components/whyHome'
import React from 'react'

const HomePage = () => {
  return (
    <div className='overflow-hidden'>
 <Container>
      <Herohome/>
      
      <AboutHome/>
      <HomethirdHero/>
      <WHyHome/>
    </Container>
    </div>
   
  )
}

export default HomePage