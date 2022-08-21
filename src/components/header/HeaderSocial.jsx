import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {GrInstagram} from 'react-icons/gr'

export default function HeaderSocial() {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/sgkraour/" target="_blank"><BsLinkedin/></a>
      <a href="https://github.com/Stanislav-Gkraour" target="_blank"><FaGithub/></a>
      <a href="https://www.instagram.com/stg_customs/" target="_blank"><GrInstagram/></a>
    </div>
  );
}
