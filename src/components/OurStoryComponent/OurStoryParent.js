import React from 'react'
import ErrorBoundary from '../ErrorBoundary'
import OurStory from './OurStory'

export default function OurStoryParent() {
  return (
    <ErrorBoundary>
        <OurStory/>
    </ErrorBoundary>
  )
}
