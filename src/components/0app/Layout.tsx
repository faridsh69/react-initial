import { Footer } from 'components/2templates/Footer/Footer'
import { HeaderNavbar } from 'components/2templates/HeaderNavbar/HeaderNavbar'
import { Portals } from 'components/2templates/Portals/Portals'
import { Outlet } from 'react-router-dom'

import styles from './Layout.module.scss'

export const Layout = () => {
  return (
    <>
      <HeaderNavbar />
      <div className={styles.layout}>
        <Outlet />
        <Footer />
      </div>
      <Portals />
    </>
  )
}
