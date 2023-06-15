import { Container } from '../../AppStyles'
import { Navbar } from '../../components/Navbar'
import { Sidebar } from '../../components/Sidebar'
import { CurrentPageProvider } from '../../contexts/CurrentPageContext'

import { Content } from './styles'

export function Home() {
  return (
    <CurrentPageProvider>
      <Container>
        <Sidebar />
        <Content>
          <Navbar />
        </Content>
      </Container>
    </CurrentPageProvider>
  )
}
