import React from 'react'
import { AiFillTwitterCircle } from 'react-icons/ai'
import { GoLogoGithub } from 'react-icons/go'

import '../assets/error.css'

const Error = () => (
  <div className="position">
    <div className="alert">
      <p>
        Wops! an <span>Error</span> appeared!!! Contact me:
      </p>
      <div className="contact">
        <a href="https://twitter.com/blit12_">
          <AiFillTwitterCircle className="contact-t" />
        </a>
        <a href="https://github.com/blitty-codes">
          <GoLogoGithub className="contact-g" />
        </a>
      </div>
    </div>
  </div>
)

export default Error
