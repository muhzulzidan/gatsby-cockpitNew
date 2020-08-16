import React, { Suspense } from 'react'
import { Link } from "gatsby"

import { lazy } from '@loadable/component'


import Logo from "../assets/svg/zn.inline.svg"


import "@reach/menu-button/styles.css"
import "@reach/dialog/styles.css";

const Footer = lazy(() => import('./footer'))


let path;


class Homelayout extends React.Component {



  render() {

    const { children,location } = this.props


    let header;
    let footer;
    let pathnames = [
      '/',
      '/kurikulum/',
      '/kurikulum/2',
      `/pengembangan-diri`,
      `/pengembangan-diri/`,
      '/pengembangan-diri/2',
      '/pengembangan-diri/2',
      '/pengembangan-diri/3',
      '/pengembangan-diri/3/',
      '/pengembangan-diri/4',
      '/pengembangan-diri/4/',
      '/pengembangan-diri/5',
      '/pengembangan-diri/5/',
      '/statistik/',
      '/teknologi/',
      '/ekonomi/',
      '/desain/',
      '/desain',
      '/desain/2',
      '/desain/2/',
      '/corona/',
      '/corona',
      '/corona/2',
      '/corona/2/',
      '/2',
      '/3',
      '/4',
      '/5',
    ]
    if (pathnames.includes(location.pathname)) {
      header = (
        <header className="layout-header layout-header-shadow "> 
        <h3 className="layout-header1" >
          <Link className="layout-header-logo-a" to={`/`}>
              <div className="layout-header-logo-div" >
                  <Logo/>
              </div>
          </Link>
          <div className="layout-header-homenavdiv">


              <Link className="link" to={`/`}>Blog</Link>
              <Link className="link" to={`/tim/`}>Tim</Link>
              <Link className="link" to={`/hubungi-kami/`}>Hubungi Kami</Link>

          </div>
          <div className="layout-header-menudiv">
            {typeof window !== 'undefined' && (
              <Suspense fallback={<div>Loading...</div>}>
                  {/* <Modals/> */}
              </Suspense>
            )}
          </div>
          
        </h3>
        </header>
      )
    } else {
      header = (
        <header className={`layout-header layout-header-markdown`}> 
        <h3 className="layout-header1" > 
          <div className="layout-header-logo-kembali-inpages">
            <Link className="layout-header-logo-a" to={`/`}>
                <div className="layout-header-logo-div" >
                    <Logo/>
                </div>
            </Link>
            <Link to={`/`} className="layout-header-link-kembali">
                <h3 > Halaman Utama</h3>
            </Link>
          </div>
          
        </h3>
        </header>
      )
    }
    if (pathnames.includes(location.pathname)) {
      footer = (
        <>
          {typeof window !== 'undefined' && (
            <Suspense fallback={<div>Loading...</div>}>
                <Footer/>
            </Suspense>
          )} 
        </>
      )
    } else {
      footer = (
        null
        )
    }
    return (
      <div className="layout-basediv">
            {header} 
        <div className="layout-homecontent">
          <main className="layout-mainhome">{children}</main>
        </div>
          {footer}
      </div>
    )
  }
}


export default Homelayout
