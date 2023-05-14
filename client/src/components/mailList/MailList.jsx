import React from "react"
import "./MailList.scss"

const MailList = () => {
  return (
    <div className="mail">
      <h1 className="mail-title">Save time, save money!</h1>
      <span className="mail-desc">Sign up and we&apos;ll send the best deals to you</span>
      <div className="mail-input">
        <input type="text" placeholder="Your email address" className="mail-input-text" />
        <button className="mail-input-btn">Subscribe</button>
      </div>
    </div>
  )
}

export default MailList