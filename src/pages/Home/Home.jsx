import React from "react";
import "./Home.css"
import Hero from "../../Components/Hero/Hero";
import Services from "../../Components/Services/Services";
import Benefits from "../../Components/Benefits/Benefits.jsx";
import Featured from "../../Components/Featured/Featured.jsx";


const slides = [
  {
    id: 1,
    title: "Flexible Chair",
    desc: "A flexible, soft chair offers ergonomic support, adjustable comfort, cozy cushioning, and versatile design, ensuring a relaxing and pliable seating experience.",
    src: "/assets/imgs/chair.png",
  },
  {
    id: 2,
    title: "ACP Panel",
    desc: "An ACP panel is a lightweight, durable aluminum composite material used for modern cladding and architecture.",
    src: "/assets/imgs/acp.jpg",
  },
  {
    id: 3,
    title: "Aluminium Fabrications",
    desc: "A flexible, soft chair offers ergonomic support, adjustable comfort, cozy cushioning, and versatile design, ensuring a relaxing and pliable seating experience.",
    src: "/assets/imgs/window.jpg",
  },
];
function Home() {
    return (
      <div className="home">
        <Hero slides={slides} slideIntervel={5000} />
        <Services/>
        <Benefits/>
        <Featured/>
      </div>
    );
}
export default Home