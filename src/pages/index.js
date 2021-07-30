import * as React from "react"
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from "gatsby"
//import Header from './header.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Row, Col } from 'react-bootstrap';
import Layout from '../components/layout'
import * as styles from './index.module.scss'
import CountUp from 'react-countup';
import { Scroll } from 'react-fns';

// markup
const IndexPage = () => {

  return (
    <Layout pageTitle="Home Page" page="home">
      <div className={styles.hero}>
        <h1>SOVEREIGN</h1>
        <h2>Share your risk. Own your future.</h2>
        <fieldset>
          <input type="text" placeholder="Enter Zip Code"/>
          <>
            <div className="mb-2">
              <Button variant="primary" size="xxl">
                Shop
              </Button>{' '}
            </div>
          </>
        </fieldset>
      </div>
      <div className={styles.coop}>
        <Container>
          <Row>
            <h1>Working Together for Peace of Mind</h1>
            <h2>Sovereign's cooperative approach to insurance and investing</h2>
          </Row>
          <Row className={styles.howItWorks}>
            <Col>
              <StaticImage
                className="columnIcon"
                alt="Basquiat Crown"
                src="../images/premium.png"
              />
              <span>Pay your premium like with any other insurance product. Sovereign keeps a flat fee and adds the rest to a pool that we use to cover everyone's claims.</span>
            </Col>
            <Col>
              <StaticImage
                className="columnIcon"
                alt="Basquiat Crown"
                src="../images/moment.png"
              />
              <span>We process most claims within moments of notification. Unlike other companies, we have no incentive to withhold anything.</span>
            </Col>
            <Col>
              <StaticImage
                className="columnIcon"
                alt="Basquiat Crown"
                src="../images/choice.png"
              />
              <span>For every dollar you spend with us you earn patronage. People like you vote annually to either convert patronage to a cash rebate or equity in Sovereign.</span>
            </Col>
          </Row>
          <Row className={styles.ctaBlock}>
            <Col>
              <h2>Think that spreading out risk is just the beginning? Then you think right. <Link to="/community">Learn more</Link> about the benefits our cooperative community members enjoy.</h2>
            </Col>
          </Row>
        </Container>
      </div>
      <div className={styles.assessment}>
        <Container>
          <Row>
            <Col>
            <Scroll
              render={({ x, y }) => (
                <div>
                  {y>400&&
                    <CountUp
                      start={0}
                      end={77568.012}
                      duration={10}
                      decimal="."
                      separator=","
                      prefix="$"
                    />
                  }
                </div>
              )}
            />
            </Col>
            <Col>
              <h1>What's your exposure?</h1>
              <h4>Before you shop for a solution, understand the problem. Let's measure your exposure, then find the package of insurance solutions that addresses it.</h4>
              <>
                <div className="mb-2">
                  <Button variant="primary" size="xxl">
                    Assess My Risk
                  </Button>{' '}
                </div>
              </>
            </Col>
          </Row>
        </Container>
      </div>
      <div className={styles.agents}>
        <Row>
         <Col><span className={styles.pang}>WAY....</span></Col>
         <Col><span className={styles.ping}>WAY....</span></Col>
         <Col><span className={styles.pong}>WAY....</span></Col>
        </Row>
        <Row>
          <Col><h2>....beyond your traditional insurance agents (could we be any more clear?)</h2></Col>
        </Row>
        <Row>
          <Col>
            <p>We're changing the game and providing all our members with their own advocate backed by a team of professionals, not just from the insurance world but accounting, legal, and financial. What are you waiting for?</p>
          </Col>
        </Row>
        <Row>
        <Col>
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

              .btn {
                margin: 0px auto;
                display:block;
              }
              `}
            </style>
            <div className="mb-2">
              <Link to='/agents'><Button variant="primary" size="xxl">
                Connect with an Advocate
              </Button>{' '}
              </Link>
            </div>
          </>
        </Col>
        </Row>
      </div>
    </Layout>
  )
}

export default IndexPage

/*
<Button variant="primary">Click Me!</Button>
<StaticImage
  alt="A cool brain made out of tracers"
  src="../images/brain.png"
/>
*/
