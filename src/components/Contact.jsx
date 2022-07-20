import { ChatAlt2Icon } from '@heroicons/react/solid'
// import Form from './Form'
import Socials from './Socials'

const Contact = () => {
  return (
    <section id='contact'>
      <div className='container contact-container'>
        <div className='contact-head'>
          <ChatAlt2Icon className='section-head--icon' />
          <h1 className='contact-head--title'>Contact Me</h1>
          <p className='contact-head--text'>
            Let's see if we're a match and work together.
          </p>
        </div>

        <form className='form'>
          <div className='form-group'>
            <label htmlFor='name'>Name</label>
            <input
              type='text'
              className='form-control'
              id='name'
              placeholder='Enter name'
              required
            />
          </div>
          <div className='form-group'>
            <label htmlFor='email'>Email address</label>
            <input
              type='email'
              className='form-control'
              id='email'
              aria-describedby='emailHelp'
              placeholder='Enter email'
              required
            />
            <small id='emailHelp' className='form-text text-muted'>
              I'll never share your email with anyone else.
            </small>
          </div>
          <div className='form-group'>
            <label htmlFor='message'>Message</label>
            <textarea
              className='form-control'
              id='message'
              rows='3'
              placeholder='Enter message'
              required></textarea>
          </div>
          <button type='submit' className='btn btn-primary'>
            Submit
          </button>
        </form>

        <Socials />
      </div>
    </section>
  )
}

export default Contact
