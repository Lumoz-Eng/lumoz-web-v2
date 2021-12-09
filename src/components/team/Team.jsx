import React from 'react'
import './team.css'

const Team = () => {
  return (
    <div className='our-team section__padding' id='our-team'>
      <div className='our-team-heading'>
        <h1 className='gradient__text'>Meet The Team</h1>
      </div>

      <div className='team-container'>
        <img src='https://avatars.githubusercontent.com/u/38850236?v=4' />
        <img src='https://avatars.githubusercontent.com/u/41939687?v=4' />
        <img src='https://avatars.githubusercontent.com/u/46712772?v=4' />
        <img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample1.jpg' />
      </div>
    </div>
  )
}

export default Team
