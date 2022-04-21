import "./Footer.css";

const year=new Date().getFullYear()

function Footer() {
  return (
    <div className="footer">
      <p className="footer_body">&copy; Copyright {year} All rights reserved</p>
    </div>
  )
}

export default Footer;
