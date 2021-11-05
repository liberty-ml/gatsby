import * as React from 'react'
import { Link } from 'gatsby'
import * as styles from '../styles/layout.module.scss'
import Button from 'react-bootstrap/Button';
import { StaticImage } from 'gatsby-plugin-image'

const Layout = ({ pageTitle, children, page }) => {
  return (
    <>
      <style type="text/css">
        {`
        .btn-primary {
          background-color: #902bf5;
          border-color: #902bf5;
          color: white;
          font-size: 24px;
          outline: none;
        }

        .btn-primary:hover {
          background-color: #ff01ff;
          border-color: #ff01ff;
          outline: none;
        }

        .btn-xxl {
          padding: 1rem 1.5rem;
          font-size: 1.5rem;
          outline: none;
        }
        `}
      </style>
      <main className={page==='home'?styles.inverse:styles.primary}>
        <header className={styles.header}>
          <title>{pageTitle}</title>
          <div className={styles.logoContainer}>
            <span className={styles.logoImage}> </span>

            <span className={styles.logoName}>SOVEREIGN</span>
          </div>
          <nav>
            <ul>
              <li><Link to="/menu">Shop</Link></li>
              <li><Link to="/community">Community</Link></li>
              <li><Link to="/assessment">Assessment</Link></li>
              <li><Link to="/agents">Connect</Link></li>
              <li><Link to="/"><Button variant="primary">My Account</Button></Link></li>
            </ul>
          </nav>
        </header>
        <div className={styles.wrapper}>
          {children}
          <div className="push"></div>
        </div>
        <footer>
          <StaticImage
            className={styles.logoImage}
            alt="Basquiat Crown"
            src="../images/crown_white.png"
          />
        </footer>
      </main>
    </>
  )
}
export default Layout
