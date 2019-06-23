import React from 'react'
import './bgerror.jpg'

class Error extends React.Component
{
    render()
    {
        return(
            <div>
                <img  className="err" src="bgerror.jpg" alt="ERROR" />
                <br />
                <h2 className="err">INVALID URL</h2>
            </div>
        )
    }
}

export default Error