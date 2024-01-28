import React, { useEffect } from 'react'

const Chatbot = () => {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://cdn.botpress.cloud/webchat/v1/inject.js'
    script.async = true
    document.body.appendChild(script)
    script.onload = () => {
      window.botpressWebChat.init({
        botId: '58d1bd69-bfea-4f0d-bec7-ecb277532bda',
        hostUrl: 'https://cdn.botpress.cloud/webchat/v1',
        messagingUrl: 'https://messaging.botpress.cloud',
        clientId: '58d1bd69-bfea-4f0d-bec7-ecb277532bda',
        userId: 'USER_ID', // try to keep an uniquer user_id every time to reset conversations.
      })
    }
  }, [])

  return <div id="webchat" />
}

export default Chatbot
