import * as React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/app.scss'
import { Container, Row, Col } from 'react-bootstrap';
import * as styles from './styleguide.module.scss'
import { Swatch } from '../components/swatch'

export default function Styleguide() {
  const rowStyle = {
    marginBottom: '40px'
  }

  return (
    <Container>
      <Row>
        <Col>
          <h2>Atoms</h2>
        </Col>
      </Row>
      <Row>
        <Col><h4>Colors</h4></Col>
      </Row>
      <Row><Col><hr  /></Col></Row>
      <Row style={rowStyle}>
        <Col><h4 className={styles.sectionTitle}C>Primary colors</h4></Col>
        <Col><Swatch classNames={'bg-bright-purple white'}><span>$bright-purple</span><br /><span>#BB80F7</span></Swatch></Col>
        <Col><Swatch classNames={'bg-light-purple white'}><span>$light-purple</span><br /><span>#A454F6</span></Swatch></Col>
        <Col><Swatch classNames={'bg-purple white'}><span>$purple</span><br /><span>#8F2BF5</span></Swatch></Col>
        <Col><Swatch classNames={'bg-dark-purple white'}><span>$dark-purple</span><br /><span>#7E0DF1</span></Swatch></Col>
        <Col><Swatch classNames={'bg-deep-purple white'}><span>$deep-purple</span><br /><span>#6404C7</span></Swatch></Col>
      </Row>
      <Row style={rowStyle}>
        <Col><h4 className={styles.sectionTitle}C>Secondary colors</h4></Col>
        <Col><Swatch classNames={'bg-svn-orange gray-600'}><span>$svn-orange</span><br /><span>#FFCC1C</span></Swatch></Col>
        <Col><Swatch classNames={'bg-svn-green gray-600'}><span>$svn-green</span><br /><span>#CBFE18</span></Swatch></Col>
        <Col />
        <Col />
        <Col />
      </Row>
      <Row style={rowStyle}>
        <Col><h4 className={styles.sectionTitle}C>Grays</h4></Col>
        <Col><Swatch classNames={'bg-gray-700 white'}><span>$gray-700</span><br /><span>#343741</span></Swatch></Col>
        <Col><Swatch classNames={'bg-gray-600 white'}><span>$gray-600</span><br /><span>#5D5F67</span></Swatch></Col>
        <Col><Swatch classNames={'bg-gray-500 white'}><span>$gray-500</span><br /><span>#7D7F86</span></Swatch></Col>
        <Col><Swatch classNames={'bg-gray-400 gray-600'}><span>$gray-400</span><br /><span>#BEBFC2</span></Swatch></Col>
        <Col><Swatch classNames={'bg-gray-300 gray-600'}><span>$gray-300</span><br /><span>#DEDFE0</span></Swatch></Col>
      </Row>
      <Row style={rowStyle}>
        <Col />
        <Col><Swatch classNames={'bg-gray-200 gray-600'}><span>$gray-200</span><br /><span>#EFEFF0</span></Swatch></Col>
        <Col><Swatch classNames={'bg-gray-100 gray-600'}><span>$gray-100</span><br /><span>#F7F7F8</span></Swatch></Col>
        <Col />
        <Col />
        <Col />
      </Row>
      <Row style={rowStyle}>
        <Col><h4 className={styles.sectionTitle}C>System</h4></Col>
        <Col><Swatch classNames={'bg-red white'}><span>$red</span><br /><span>#D32F2F</span></Swatch></Col>
        <Col><Swatch classNames={'bg-light-red gray-600'}><span>$light-red</span><br /><span>#FFF4F5</span></Swatch></Col>
        <Col><Swatch classNames={'bg-green white'}><span>$green</span><br /><span>#008040</span></Swatch></Col>
        <Col><Swatch classNames={'bg-light-green gray-600'}><span>$light-green</span><br /><span>#E1F2E6</span></Swatch></Col>
        <Col><Swatch classNames={'bg-yellow white'}><span>$yellow</span><br /><span>#FFD000</span></Swatch></Col>
      </Row>
      <Row>
        <Col />
        <Col><Swatch classNames={'bg-light-yellow gray-600'}><span>$light-yellow</span><br /><span>#FFF6CC</span></Swatch></Col>
        <Col />
        <Col />
        <Col />
        <Col />
      </Row>
      <Row>
        <Col><h4>Typography</h4></Col>
      </Row>
      <Row><Col><hr  /></Col></Row>
    </Container>
  )
}
