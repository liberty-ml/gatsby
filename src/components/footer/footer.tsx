import * as React from 'react'
import {PropsWithChildren, ReactElement} from 'react'
import classnames from 'classnames'
import * as styles from './footer.module.scss'
import { Logo } from '../logo/logo'
import { SvrnButton } from '../svrnButton/svrnButton'
import { Link } from 'gatsby'
import { Container, Row, Col } from 'react-bootstrap';
import { TextInput } from '../textInput/textInput'

interface FooterProps extends PropsWithChildren<any> {

    classNames?: string

    id: string
}

export function Footer({
    classNames  = '',
    id
}: FooterProps): ReactElement {

    return (
      <footer className={classnames(styles.footerContainer, classNames)} role="contentinfo">
        <Row>
          <Col lg="3">
            <Row>
              <Col lg="12">
                <small>Fair use! Go crazy.</small>
              </Col>
            </Row>
            <Row>
              <Col lg="12">
                <small>Adam Hasler. No rights reserved.</small>
              </Col>
            </Row>
          </Col>
          <Col lg="6">
            <Row>
              <Col lg="8">
                <TextInput inputType="text" placeholder="email@address.com" label="Newsletter Signup" onChange={(value) => console.log(value)} />
              </Col>
              <Col lg="4">
                <SvrnButton>Sign Up</SvrnButton>
              </Col>
            </Row>
          </Col>
          <Col lg="3">
            <Logo inverse="inverse" classNames={styles.footerLogo} />
          </Col>
        </Row>
      </footer>
    )

}

Footer.displayName = 'Footer'
