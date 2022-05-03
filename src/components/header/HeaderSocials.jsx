import React from 'react'
import {FaFacebookSquare} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className="header_socials">
        <a href="https://www.facebook.com/jomneko" target="_blank"><FaFacebookSquare /></a>
        <a href="https://www.instagram.com/jom_shiba/" target="_blank"><BsInstagram /></a>
    </div>
  )
}

export default HeaderSocials