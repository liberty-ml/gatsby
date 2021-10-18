import * as React from 'react'
import {PropsWithChildren, ReactElement} from 'react'
import classnames from 'classnames'
import * as styles from './header.module.scss'
import { Logo } from '../components/logo'
import { Search } from '../components/search'
import { SvrnButton } from '../components/svrnButton'
import { Link } from 'gatsby'
import { Container, Row, Col } from 'react-bootstrap';
interface HeaderProps extends PropsWithChildren<any> {

    classNames?: string

    id: string

    inverse: "primary" | "inverse"
}

export function Header({
    classNames  = '',
    id,
    inverse
}: HeaderProps): ReactElement {

    return (
      <header className={classnames(styles.headerContainer, styles[inverse], classNames)}>
        <Row className={classnames(styles.primaryHeader, styles[inverse])}>
          <Col lg="3" className={styles.logoContainer}>
            <Logo classNames={styles.headerLogo} inverse={inverse} />
            <h4 className={classnames(styles.primaryBrand, styles[inverse])}>SOVEREIGN</h4>
          </Col>
          <Col lg="6">
            <Search inverse={inverse} classNames={styles.headerSearch}/>
          </Col>
          <Col lg="3"  className={styles.loginContainer}>
            <SvrnButton size="regular" inverse={inverse} disabled>Login</SvrnButton>
          </Col>
        </Row>
        <Row className={classnames(styles.secondaryHeader, "nav", styles[inverse])}>
            <Col lg="2" className="nav-item"><Link className={styles.navLink} activeClassName={styles.active} to="/styleguide">Home</Link></Col>
            <Col lg="2" className="nav-item"><Link className={styles.navLink} activeClassName={styles.active} to="/assess">Assess</Link></Col>
            <Col lg="2" className="nav-item"><Link className={styles.navLink} activeClassName={styles.active} to="/discover">Discover</Link></Col>
            <Col lg="2" className="nav-item"><Link className={styles.navLink} activeClassName={styles.active} to="/purchase">Purchase</Link></Col>
            <Col lg="2" className="nav-item"><Link className={styles.navLink} activeClassName={styles.active} to="/assess">Learn</Link></Col>
            <Col lg="2" className="nav-item"><Link className={styles.navLink} activeClassName={styles.active} to="/assess">Contact</Link></Col>
        </Row>
      </header>
    )

}

Header.displayName = 'Header'
