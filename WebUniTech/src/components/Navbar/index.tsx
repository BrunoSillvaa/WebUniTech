import { Container } from './styles'

import { IoIosSearch } from 'react-icons/io'
import { BsFillGearFill } from 'react-icons/bs'
import { FaBell, FaUser } from 'react-icons/fa'

import { useContext } from 'react'
import { CurrentPageContext } from '../../contexts/CurrentPageContext'

export function Navbar() {
  const {currentPage} = useContext(CurrentPageContext)

  return (
    <Container>
      <h2>Pages / <span>{currentPage}</span></h2>

      <div className="right-side">
        <div className="search-wrapper">
          <IoIosSearch className='icon'/>
          <input type="text" placeholder='Type here...'/>
        </div>

        <a href="#"><FaUser className='icon'/></a>
        <a href="#"><BsFillGearFill  className='icon'/></a>
        <a href="#"><FaBell  className='icon'/></a>
      </div>
    </Container>
  )
}