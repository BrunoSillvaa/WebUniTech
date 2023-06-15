import { useContext } from 'react'
import { Container } from './styles'
import { Item } from './SidebarItem'

import { IoIosHome } from 'react-icons/io'
import { BiBookAlt } from 'react-icons/bi'
import { BsCheck2Square } from 'react-icons/bs'
import { TbPigMoney } from 'react-icons/tb'

import { CurrentPageContext } from '../../contexts/CurrentPageContext'

export function Sidebar() {
  const {currentPage, setCurrentPage} = useContext(CurrentPageContext)

  return (
    <Container>
      <Item
        title='Home'
        active={currentPage === 'Home'}
        setCurrentPage={() => setCurrentPage('Home')}
        icon={<IoIosHome className='item-icon' />}
      />

      <Item
        title='Disciplinas'
        active={currentPage === 'Disciplinas'}
        setCurrentPage={() => setCurrentPage('Disciplinas')}
        icon={<BiBookAlt className='item-icon' />}
      />

      <Item
        title='Avaliações'
        active={currentPage === 'Avaliações'}
        setCurrentPage={() => setCurrentPage('Avaliações')}
        icon={<BsCheck2Square className='item-icon' />}
      />

      <Item
        title='Financeiro'
        active={currentPage === 'Financeiro'}
        setCurrentPage={() => setCurrentPage('Financeiro')}
        icon={<TbPigMoney className='item-icon' />}
      />
    </Container>
  )
}
