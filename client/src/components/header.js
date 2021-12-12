import React from 'react'

export default function Header() {
    return (
        <img style={{width:'20%'}} src={process.env.PUBLIC_URL+'/spacex-logo.png'} alt="spacex" />
    )
}
