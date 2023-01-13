import React from 'react'
import './SectionLeft.css'
import { Categories } from '../../../utils/contance'
import Button from '../../Button/Button'

 
function SectionLeft() {


  return (
    <div className='leftSection-buttons'>
    {Categories.map((item,i)=><Button item={item} key={i}/>)}
    </div>
  )
}

export default SectionLeft