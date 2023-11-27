import React from 'react'
import Footer from './Footer'
import { Header } from './Header'

export const MainLayout = ({children}) => {  //everything inside the mainlayout componenet comes as a props automatically and saves into cihldren
  return (
    <div>
        {/* header */}
        <Header/>

        {/* main area */}

        <main className='main'>{children}</main>
        {/* footer */}
        <Footer/>
    </div>
  )
}

export default MainLayout