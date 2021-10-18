
import React, {useState} from 'react'
import { Link } from 'gatsby'
import {PropsWithChildren, ReactElement} from 'react'
import classnames from 'classnames'
import * as styles from './cardList.module.scss'
import { Card } from '../components/card'
import { SvrnButton } from '../components/svrnButton'
import { Container, Row, Col } from 'react-bootstrap';

interface CardListProps extends PropsWithChildren<any> {

    classNames?: string

    id: string
}

export function CardList({
    classNames  = '',
    id,
    children
}: CardListProps): ReactElement {
  const [state, setState] = useState({
    counter: 0
  })

  const increaseCounter = (
        event: React.ChangeEvent<HTMLSelectElement>
    ): void => {
      setState({
        counter: state.counter + 3,
        disabled: false
      })
  }

  let cardArray = []
  let colArray = []

   children.forEach(function(element, index) {
     cardArray.push(
       <Col lg="4" key={index}>
         <Card header={element.header} link={element.link}>
           {element.body}
         </Card>
        </Col>
     )
   })

   for (let  i = 0; i < cardArray.length; i++) {
     if (i%3===0) {
       let show = 'hide'
       if (i-state.counter<3) {
         show = 'show'
       }
       colArray.push(<Row key={i} className={classnames(styles.row, styles[show])}>{cardArray[i]}{cardArray[i+1]}{cardArray[i+2]}</Row>)
     }
   }

    return (
     <div>
       {colArray}
       <SvrnButton size="large" disabled={state.counter+3>=cardArray.length} onClick={increaseCounter}>
         Show More
       </SvrnButton>
      </div>
    )

}

CardList.displayName = 'CardList'
