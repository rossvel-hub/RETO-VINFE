
import React from 'react'
import Carousel from './Carousel'
import Container from './Container'

const Home = () => {
  return (
    <div className='container'>
        <Carousel />
        <hr />
        <h6>cards</h6>
        <Container />
    </div>
  )
}

export default Home