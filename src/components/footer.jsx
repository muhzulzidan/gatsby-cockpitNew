import React from 'react'
import {Link } from 'gatsby'
const Footer = () => {
    return (
        <footer className="footer-div">
           <Link to="/Disclaimer/"> Disclaimer </Link>
           <Link to="/privacy/"> Privacy Policy </Link>
           <Link to="/tim/"> Tim </Link>
           <Link to="/hubungi-kami/"> Hubungi Kami</Link>
        </footer>
    )
}

export default Footer
