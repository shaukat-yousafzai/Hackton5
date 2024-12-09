import AboutHome from '@/components/AboutHome'
import Herohome from '@/components/Herohome'
import HomethirdHero from '@/components/homethirdHero'

import WHyHome from '@/components/whyHome'
import React from 'react'

const HomePage = () => {
  return (
    <div>
      <Herohome/>
      
      <AboutHome/>
      <HomethirdHero/>
      <WHyHome/>
    </div>
  )
}

export default HomePage