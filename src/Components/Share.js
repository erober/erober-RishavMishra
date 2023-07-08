import React from 'react'
import {
    FacebookShareButton,
    InstapaperShareButton,
    TwitterShareButton,
    WhatsappShareButton,
  } from "react-share";
  

function Share() {
  return (
    <div>
        <FacebookShareButton>Share on Facebook</FacebookShareButton>
        <InstapaperShareButton />
        <TwitterShareButton />
        <WhatsappShareButton />
    </div>
  )
}

export default Share