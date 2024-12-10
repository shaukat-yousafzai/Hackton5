import AboutHome from '@/components/AboutHome'
import Container from '@/components/Container'
import Herohome from '@/components/Herohome'
import HomethirdHero from '@/components/homethirdHero'

import WHyHome from '@/components/whyHome'
import React from 'react'

const HomePage = () => {
  return (
    <Container>
      <Herohome/>
      
      <AboutHome/>
      <HomethirdHero/>
      <WHyHome/>
    </Container>
  )
}

export default HomePage