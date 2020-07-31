import React from 'react'
import { AiFillTwitterCircle } from 'react-icons/ai'
import { GoLogoGithub } from 'react-icons/go'

import '../assets/footer.css'

const Footer = () => (
  <footer className="footer">
    <h3 className="name">Done by <strong>@blitty</strong></h3>
    <div>
      <a href="https://twitter.com/blit12_">
        <AiFillTwitterCircle className="contact-t" />
      </a>
      <a href="https://github.com/blitty-codes">
        <GoLogoGithub className="contact-g" />
      </a>
    </div>

  </footer>
)

export default Footer
