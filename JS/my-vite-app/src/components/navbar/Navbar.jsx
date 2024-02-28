import "./navbar.css"
import Header from "../header/Header"

export default function Navbar() {
  return (
    <>
    <section className="mainContainer">
    <Header/>
    <div className="textArea">
      <div className="welcome">Welcome!</div>
      <div className="text">We serve the richest coffee</div>
      <div className="text">in the city!</div>
      <div className="button">
        <button className="order">Order Now</button>
      </div>
    </div>
   </section>
    </>
  )
}
