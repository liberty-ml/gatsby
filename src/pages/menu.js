import * as React from "react"
//import Header from './header.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../components/layout'
import Button from 'react-bootstrap/Button';
import { Link } from 'gatsby'
import * as styles from './menu.module.scss'

export default function Menu() {
  return (
    <Layout pageTitle="Menu" page="menu">
      <div className={styles.hero}>
        <div className={styles.container}>
          <h1>You shouldn't need an advanced degree to make good financial decisions.</h1>
          <h2>We've made it as easy as ordering a nice dinner out.</h2>
          <p>Running a business or organization? <Link to='/'>Check out our menu for companies and groups.</Link></p>
        </div>
      </div>
      <div className={styles.packages}>
        <div className={styles.container}>
          <h1>Packages</h1>
          <p>Start with one of our carefully crafted packages that fit your life</p>
          <div className={styles.card}>
            <h2>The Tyro</h2>
            <hr />
            <ul>
              <li>Renter's Insurance</li>
              <li>Auto Insurance</li>
              <li>Financial Planning</li>
              <li>Investment Starter Package</li>
              <li>Tax Preparation and Filing</li>
            </ul>
            <p><b>Starting at $250/month</b></p>
            <Link to="/"><Button variant="primary">Learn More</Button></Link>
          </div>
          <div className={styles.card}>
            <h2>The Level Up</h2>
            <hr />
            <ul>
              <li>Home and Auto Insurance</li>
              <li>Saving and Investing Help</li>
              <li>Complete Tax Planning</li>
              <li>Liability Insurance</li>
              <li>Basic Legal Services</li>
            </ul>
            <p><b>Starting at $500/month</b></p>
            <Link to="/"><Button variant="primary">Learn More</Button></Link>
          </div>
          <div className={styles.card}>
            <h2>The Wiz</h2>
            <hr />
            <ul>
              <li>Multiple Home and Car Insurance</li>
              <li>Expert Investment Services</li>
              <li>Complete Accounting Package</li>
              <li>Life Insurance and Annuities</li>
              <li>Estate Planning</li>
            </ul>
            <p><b>Starting at $800/month</b></p>
            <Link to="/"><Button variant="primary">Learn More</Button></Link>
          </div>
        </div>
      </div>
      <div className={styles.alacarte}>
        <div className={styles.container}>
          <h1>A la Carte</h1>
        </div>
      </div>
    </Layout>
  )
}
