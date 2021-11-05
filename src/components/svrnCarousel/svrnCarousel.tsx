import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import {PropsWithChildren, ReactElement} from 'react'
import classnames from 'classnames'
import * as styles from './svrnCarousel.module.scss'
import { Card } from '../card/card'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

interface SvrnCarouselProps extends PropsWithChildren<any> {

    classNames?: string

    id: string

    rel: string

    src: string
}

export function SvrnCarousel({
  classNames,
  id,
  targetId,
  rel,
  src,
  link = '/#',
  children
}: SvrnCarouselProps): ReactElement {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  let cardArray = []


   children.forEach(function(element, index) {
     cardArray.push(
       <div className="carousel-item active" key={index}>
         <Card className="d-block w-100" header={element.header} link={element.link}>
           {element.body}
         </Card>
       </div>
     )
   })

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

     console.log(active)
     return (
       <button
         key={index}
         className={classnames(active?styles.active:styles.inactive, styles.navButtons, classNames)}
         onClick={() => onClick()}
       ></button>
     );
   };


  return (
    <Carousel className={classnames(styles.reactMultiCarouselList, classNames)}
      responsive={responsive}
      swipeable={true}
      draggable={true}
      showDots={true}
      customDot={<CustomDot />}
      removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
    >
      {cardArray}
    </Carousel>
  )
}

SvrnCarousel.displayName = 'SvrnCarousel'
