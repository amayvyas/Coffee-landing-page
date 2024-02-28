import "./footer.css";

export default function Footer() {
  return (
    <div className="footerContainer">
      <div className="footerBrand">COFFEE</div>

      <div className="footerPrivacy">
        <span className="heading">Privacy</span>
        <div className="content">Terms Of use <br/>Privacy Policy <br/> Cookies</div>
      </div>

      <div className="footerService">
      <span className="heading">Service</span>
      <div className="content">Shop <br/>Order <br/> Menu</div>
      </div>

      <div className="footerAbout">
      <span className="heading">About-us</span>
      <div className="content">Find location <br/>About us <br/> Our Story</div>
      </div>

      <div className="footerInformation">
      <span className="heading">Information</span>
      <div className="content">Franchise <br/>Sell your product <br/> Careers</div>
      </div>
      
      <div className="footerSocial">
      <span className="heading">Social</span>
      <div className="content">Facebook <br/>Instagram <br/> Snapchat</div>
      </div>
    </div>
  )
}
