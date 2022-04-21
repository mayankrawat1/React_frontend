import "./Contact.css";
import Phone from "../../images/phone.png";
import Address from "../../images/address.png";
import Email from "../../images/email.png";

function Contact() {
  return (
    <div className="contact">
      <div className="contact_bg"></div>
      <div className="contact_wrapper">
        <div className="contact_left">
          <h1 className="contact_left_title">Want To Connect With Me ?</h1>
          <div className="contact_left_info">
            <div className="contact_left_info_item">
              <img className="contact_left_info_item_icon" src={Phone} alt="" />
              +91 9649332500
            </div>
            <div className="contact_left_info_item">
              <img className="contact_left_info_item_icon" src={Email} alt="" />
              mayank.rawat1@tothenew.com
            </div>
            <div className="contact_left_info_item">
              <img
                className="contact_left_info_item_icon"
                src={Address}
                alt=""
              />
              C-803 Cosmos Golden Heights Crossing Republik Ghaziabad (UP)
            </div>
          </div>
        </div>
        <div className="contact_right">
          <form>
            <input type="text" name="" id="" placeholder="Enter your name" />
            <input type="text" name="" id="" placeholder="Enter your email" />
            <textarea name="" id="" cols="30" rows="10"></textarea>
            <button>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
