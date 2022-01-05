
import React, {useState} from 'react'
import { Link } from 'gatsby'
import {PropsWithChildren, ReactElement} from 'react'
import classnames from 'classnames'
import * as styles from './cardList.module.scss'
import { Card } from '../card/card'
import { SvrnButton } from '../svrnButton/svrnButton'
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
    counter: 2
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
     let show
     if (index>state.counter) {
       show = 'hide'
     } else {
       show = "show"
     }

     cardArray.push(
       <Card header={element.header} key={index} link={element.link} classNames={show}>
          {element.body}
       </Card>
     )
   })

/*
    for (let  i = 0; i < cardArray.length; i++) {
      children.forEach(function(element, index) {
        let show
        if (index%3===0) {
          show = 'hide'
          if (index-state.counter<3) {
            show = 'show'
          }
        }
        cardArray.push(
          <Card header={element.header} link={element.link}>
             {element.body}
          </Card>
        )
      })
     //if (i%3===0) {
    //   let show = 'hide'
    //   if (i-state.counter<3) {
      //   show = 'show'
      // }
      // colArray.push(<Row key={i} className={classnames(styles.row, styles[show])}>{cardArray[i]}{cardArray[i+1]}{cardArray[i+2]}</Row>)
    // }
    }
  */

    return (
      <div className={styles.cards}>
        <ul>
          {cardArray}
        </ul>
        <SvrnButton size="large" disabled={state.counter+3>=cardArray.length} onClick={increaseCounter}>
          Show More
        </SvrnButton>
      </div>
    )

}

CardList.displayName = 'CardList'
