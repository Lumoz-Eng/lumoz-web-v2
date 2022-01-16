import React from 'react'
import './header.css'
import MailchimpSubscribe from 'react-mailchimp-subscribe'

import Lumoz from '../../assets/demo2.gif'

const url =
  'https://gmail.us7.list-manage.com/subscribe/post?u=76557349c4a099fac3ab9307a&amp;id=990c32810b'
const SimpleForm = () => <MailchimpSubscribe url={url} />

const Header = () => {
  return (
    <div className='lumoz__header section__padding' id='home'>
      <div className='lumoz__header-content'>
        <h1 className='gradient__text'>
          Lumoz Studio Change your Digital Life
        </h1>
        <p>
          Hey there, 👋 Future generations of the Metaverse! This is our
          augmented reality based solution for a smooth real-time live media
          production.
        </p>

        <p>Subscribe To Our Newsletter 👇</p>
        <div className='lumoz__header-content__input'>
          {/* <input type='email' placeholder='get email updates' />
          <button type='button'>Get Started</button> */}
          <MailchimpSubscribe
            url={url}
            render={({ subscribe, status, message }) => (
              <div>
                <SimpleForm onSubmitted={(formData) => subscribe(formData)} />
                {status === 'sending' && (
                  <div style={{ color: 'white' }}>sending...</div>
                )}
                {status === 'error' && (
                  <div
                    style={{ color: 'yellow' }}
                    dangerouslySetInnerHTML={{ __html: message }}
                  />
                )}
                {status === 'success' && (
                  <div style={{ color: 'white' }}>Subscribed !</div>
                )}
              </div>
            )}
          />
        </div>
      </div>
      <div className='lumoz__header-image'>
        <img src={Lumoz} alt='lumoz' />
      </div>
    </div>
  )
}

export default Header
