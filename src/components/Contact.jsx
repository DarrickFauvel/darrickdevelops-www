import { useState, useRef } from "react"
import emailjs from "@emailjs/browser"
import { ChatAlt2Icon } from "@heroicons/react/solid"
import ReCAPTCHA from "react-google-recaptcha"

const Contact = () => {
  const formRef = useRef(null)
  const captchaRef = useRef(null)

  const [isVerified, setIsVerified] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formValue, setFormValue] = useState({
    user_name: "",
    user_email: "",
    contact_number: "",
    message: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target

    setFormValue((prevState) => {
      return {
        ...prevState,
        [name]: value,
      }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const token = captchaRef.current.getValue()
    captchaRef.current.reset()

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

    emailjs.sendForm(serviceId, templateId, formRef.current, publicKey).then(
      (result) => {
        setIsSubmitted(true)
      },
      (error) => {
        console.log(error.text)
      }
    )
  }

  const onChange = (value) => {
    setIsVerified(true)
  }

  const { name, email, phone, message } = formValue

  return (
    <section id="contact">
      <div className="container contact-container">
        <div className="contact-head">
          <ChatAlt2Icon className="section-head--icon" />
          <h1 className="contact-head--title">Contact Me</h1>
          <p className="contact-head--text">
            Let's see if we're a match and work together.
          </p>
        </div>

        {isSubmitted ? (
          <div className="contact-thanks">
            <p>Thank you for contacting me!</p>
          </div>
        ) : (
          <form className="form" onSubmit={handleSubmit} ref={formRef}>
            <div className="form-group">
              <label htmlFor="user_name">Name</label>
              <input
                type="text"
                name="user_name"
                className="form-control"
                placeholder="Enter name"
                required
                value={name}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="user_email">Email address</label>
              <input
                type="email"
                name="user_email"
                className="form-control"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                required
                value={email}
                onChange={handleChange}
              />
              <small id="emailHelp" className="form-text text-muted">
                I'll never share your email with anyone else.
              </small>
            </div>
            <div className="form-group">
              <label htmlFor="contact_number">Phone</label>
              <input
                type="text"
                name="contact_number"
                className="form-control"
                placeholder="Enter phone"
                value={phone}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                className="form-control"
                name="message"
                id="message"
                rows="3"
                placeholder="Enter message"
                required
                value={message}
                onChange={handleChange}></textarea>
            </div>
            <ReCAPTCHA
              sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
              onChange={onChange}
              ref={captchaRef}
            />
            <button
              type="submit"
              className="btn btn-primary"
              disabled={!isVerified}>
              Send
            </button>
          </form>
        )}
      </div>
    </section>
  )
}

export default Contact
