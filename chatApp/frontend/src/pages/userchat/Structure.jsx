import React from 'react'
import Chatbox from './Chatbox'
import { useState } from 'react'
// import './chatbox.css'
const Structure = () => {
    const [isChatOpen, setIschatOpen] = useState(false)
  return (
    <div>
      {isChatOpen ? <Chatbox setIschatOpen={setIschatOpen} /> : <div className='help-chatsupport' onClick={() => setIschatOpen(true)}>Help</div>}
    </div>
  )
}

export default Structure
