import React from "react"
import "./Home.scss"
import Navbar from "@/components/navbar/Navbar.jsx"
import Header from "@/components/header/Header.jsx"
import Featured from "@/components/featured/Featured.jsx"
import PropertyList from "@/components/propertyList/PropertyList.jsx"
import FeaturedProperties from "@/components/featuredProperties/FeaturedProperties.jsx"
import MailList from "@/components/mailList/MailList.jsx"

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Header />
      <div className="home-container">
        <Featured />
        <h1 className="home-title">Browse by property type</h1>
        <PropertyList />
        <h1 className="home-title">Homes Guest Loves</h1>
        <FeaturedProperties />
        <MailList />
      </div>
    </div>
  )
}

export default Home;
