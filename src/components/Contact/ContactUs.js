import "./contact.css"
import Form from "./Form"

const ContactUs = () => {
  return (
    <>
      <div className="contactwrap">
        <div className="contactUs">
          <div className="contact-form">
            <Form />
          </div>
          <div className="contact-img">
            <img src={require('./Online world-pana.png')} alt="" />
          </div>
        </div>

      </div>

    </>
  )
}

export default ContactUs
