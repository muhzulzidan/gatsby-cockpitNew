// import React from 'react';
import "./src/styles/index.scss"
// import "./src/css/styles.css"
import "typeface-roboto"
import "typeface-lora"


import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebookSquare,  faInstagram, faLinkedin, faTwitterSquare , faWhatsappSquare, faPinterestSquare, faTelegram, faYoutubeSquare, } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee, faBars, faChevronCircleLeft,faChevronCircleRight,  faChevronDown,faChevronLeft, faSun, faMoon, faCircle} from '@fortawesome/free-solid-svg-icons'
import {faEnvelope } from "@fortawesome/free-regular-svg-icons"
require("prismjs/themes/prism-tomorrow.css")

library.add( faCheckSquare, faCoffee, faBars, faChevronCircleLeft, faChevronLeft, faChevronCircleRight, faChevronDown, faEnvelope, faSun, faMoon, faCircle, faTwitterSquare, faFacebookSquare, faInstagram, faLinkedin,faWhatsappSquare,  faPinterestSquare, faTelegram, faYoutubeSquare)
export const registerServiceWorker = () => true
export const onServiceWorkerUpdateReady = () => {
    const answer = window.confirm(
      `This application has been updated. ` +
        `Reload to display the latest version?`
    )
    if (answer === true) {
      window.location.reload()
    }
  }


  // if (process.env.NODE_ENV === 'development') {
  //   const whyDidYouRender = require('@welldone-software/why-did-you-render');
  //   whyDidYouRender(React, {
  //     trackAllPureComponents: true,
  //   });
  // }
