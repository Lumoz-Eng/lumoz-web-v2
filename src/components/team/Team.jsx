import React from 'react'
import './team.css'

const Team = () => {
  return (
    <div className='our-team section__padding' id='our-team'>
      <div className='our-team-heading'>
        <h1 className='gradient__text'>Meet The Team</h1>
      </div>

      {/* <div className='team-container'>
        <img src='https://avatars.githubusercontent.com/u/38850236?v=4' />
        <img src='https://avatars.githubusercontent.com/u/41939687?v=4' />
        <img src='https://avatars.githubusercontent.com/u/46712772?v=4' />
        <img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample1.jpg' />
      </div> */}

      <section className='team-section'>
        <div className='container'>
          <div className='row'>
            <div className='team-items'>
              <div className='item'>
                <img
                  src='https://avatars.githubusercontent.com/u/38850236?v=4'
                  alt='team'
                />
                <div className='inner'>
                  <div className='info'>
                    <h5>Bawantha Thilan</h5>
                    <p>Developer</p>
                    <div className='social-links'>
                      <a href=''>
                        <span className='fa fa-facebook'></span>
                      </a>
                      <a href=''>
                        <span className='fa fa-twitter'></span>
                      </a>
                      <a href=''>
                        <span className='fa fa-linkedin'></span>
                      </a>
                      <a href=''>
                        <span className='fa fa-youtube'></span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className='item'>
                <img
                  src='https://avatars.githubusercontent.com/u/41939687?v=4'
                  alt='team'
                />
                <div className='inner'>
                  <div className='info'>
                    <h5>Pubudu Arosha</h5>
                    <p>Developer</p>
                    <div className='social-links'>
                      <a href=''>
                        <span className='fa fa-facebook'></span>
                      </a>
                      <a href=''>
                        <span className='fa fa-twitter'></span>
                      </a>
                      <a href=''>
                        <span className='fa fa-linkedin'></span>
                      </a>
                      <a href=''>
                        <span className='fa fa-youtube'></span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className='item'>
                <img
                  src='https://avatars.githubusercontent.com/u/46712772?v=4'
                  alt='team'
                />
                <div className='inner'>
                  <div className='info'>
                    <h5>Vihanga Nivarthana</h5>
                    <p>Developer</p>
                    <div className='social-links'>
                      <a href=''>
                        <span className='fa fa-facebook'></span>
                      </a>
                      <a href=''>
                        <span className='fa fa-twitter'></span>
                      </a>
                      <a href=''>
                        <span className='fa fa-linkedin'></span>
                      </a>
                      <a href=''>
                        <span className='fa fa-youtube'></span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className='item'>
                <img
                  src='https://avatars.githubusercontent.com/u/46712772?v=4'
                  alt='team'
                />
                <div className='inner'>
                  <div className='info'>
                    <h5>Jayani Gankanda</h5>
                    <p>Designer</p>
                    <div className='social-links'>
                      <a href=''>
                        <span className='fa fa-facebook'></span>
                      </a>
                      <a href=''>
                        <span className='fa fa-twitter'></span>
                      </a>
                      <a href=''>
                        <span className='fa fa-linkedin'></span>
                      </a>
                      <a href=''>
                        <span className='fa fa-youtube'></span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Team
