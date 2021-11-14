import React from 'react'
import './blog.css'
import { TwitterTimelineEmbed, TwitterTweetEmbed } from 'react-twitter-embed'

const Blog = () => {
  return (
    <div className='lumoz__blog section__padding' id='blog'>
      <div className='lumoz__blog-heading'>
        <h1 className='gradient__text'>
          A lot is happening, <br /> We are Tweeting about it.
        </h1>
      </div>
      <div className='lumoz__blog-container'>
        <div className='lumoz__blog-container_groupA'>
          {' '}
          <TwitterTweetEmbed
            // Here goes your copied ID.
            tweetId={'1446018874629971971'}
            // Style options goes here:
            optins={{ width: '900px' }}
          />
        </div>
        <div className='lumoz__blog-container_groupB'>
          <TwitterTweetEmbed
            // Here goes your copied ID.
            tweetId={'1430546218317279233'}
            // Style options goes here:
            optins={{ width: '900px' }}
          />
          <TwitterTweetEmbed
            // Here goes your copied ID.
            tweetId={'1430546539261284360'}
            // Style options goes here:
            optins={{ width: '900px' }}
          />
          <TwitterTimelineEmbed
            sourceType='profile'
            // The preferred screen name goes next:
            screenName='lumozstudio'
            // Style options goes here:
            options={{ height: 500 }}
          />
        </div>
      </div>
    </div>
  )
}

export default Blog
