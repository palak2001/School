import React from 'react'
import Navbar from './navbar.js'
import Main from './main.js'
import Footer from './footer.js'

class Home extends React.Component
{
    render()
    {
        return(
            <div>
                <Navbar />
                <Main />
                <Footer />
            </div>
        )
    }
}

export default Home