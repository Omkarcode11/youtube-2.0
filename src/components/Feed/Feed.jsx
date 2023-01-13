import React, { useContext } from 'react'
import AppContext from '../../context'
import './Feed.css'
import SectionLeft from './SectionLeft/SectionLeft'
import SectionRight from './SectionRight/SectionRight'

function Feed() {
  const {value} = useContext(AppContext)
  return (
    <div className='Feed'>
    <div>
    </div>
    <div className='sectionLeft'>
    <SectionLeft/>
    </div>
    <div className='sectionRight'>
    <h3 className='heading-right'>{value} Videos</h3>
    <SectionRight/>
      </div>
    </div>
  )
}

export default Feed