import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import {PropsWithChildren, ReactElement} from 'react'
import classnames from 'classnames'
import * as styles from './carousel.module.scss'
import * as cardStyles from '../card/card.module.scss'
import * as buttonStyles from '../svrnButton/svrnButton.module.scss'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

interface CarouselProps extends PropsWithChildren<any> {

    classNames?: string

    id: string

    rel: string

    src: string
}

export function Carousel({
  classNames,
  id,
  targetId,
  rel,
  src,
  link = '/#',
  children
}: CarouselProps): ReactElement {
  let cardArray = []


   children.forEach(function(element, index) {
     cardArray.push(
       <Slide role="option" className={cardStyles.card} key={index}>
         <h3 id="carouselheading" className={styles.label} aria-hidden="true">Recent news</h3>
         <div className={cardStyles.text} role="group">
           <h4><Link to={link}>{element.header}</Link></h4>
           <p>{element.body}</p>
         </div>
       </Slide>
     )
   })

   /*
   const CustomDot = ({ onClick, ...rest }) => {
     const {
       onMove,
       index,
       active,
       carouselState: { currentSlide, deviceType }
     } = rest;
     const carouselItems = cardArray;
     // onMove means if dragging or swiping in progress.
     // active is provided by this lib for checking if the item is active or not.
     return (
       <button
         key={index}
         className={classnames(active?styles.active:styles.inactive, styles.navButtons, classNames)}
         onClick={() => onClick()}
       ></button>
     );
   };
   */


   return (
     <CarouselProvider
       naturalSlideWidth={100}
       naturalSlideHeight={125}
       totalSlides={9}
       className="carousel"
     >
       <Slider role="listbox" className={styles.slider}>
         {cardArray}
       </Slider>
       <div className={styles.buttonContainer}>
         <ButtonBack className={classnames(buttonStyles.primary, buttonStyles.small, styles.navButton, styles.previous)}>Back</ButtonBack>
         <ButtonNext className={classnames(buttonStyles.primary, buttonStyles.small, styles.navButton, styles.next)}>Next</ButtonNext>
       </div>
     </CarouselProvider>
   );
}

Carousel.displayName = 'Carousel'
