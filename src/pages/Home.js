import React from 'react'
import Banner from '../components/home/Banner'
import Products from '../components/home/Products'

const Home = () => {
  return (
    <>
        <Banner />
        <div className="w-full bg-gray-100 -mt-10 xl:-mt-36 py-10">
        <Products />
        </div>
    </>
  )
}

export default Home
