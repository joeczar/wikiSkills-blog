import React from 'react'
import axios from 'axios'

class ContactForm extends React.Component {
  constructor (pageContext) {
    super()
    this.state = {
      fullname: '',
      email: '',
      message: '',
      pageContext: pageContext
    }
  }
  onChange (e) {
    this.setState({[e.target.name]: e.target.value})
  }
  onSubmit (e) {
    e.preventDefault()
    const {fullname, email, message, pageContext} = this.state

    const mutations = [{
      'createIfNotExists': {
        'name': fullname,
        'email': email,
        'message': message,
        'page-context': pageContext
      }
    }]

    axios.post('https://c1jubcn4.api.sanity.io/v1/data/mutate/production/', {
      method: 'post',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${process.env.Authorization}`
      },
      body: JSON.stringify({mutations})
    })
      .then(response => response.json())
      .then(result => console.log(result))
      .catch(error => console.error(error))
  }

  render () {
    const formStyle = {
      textAlign: 'left'
    }
    const buttonsStyle = {
      margin: '1rem',
      textAlign: 'center'
    }
    const {fullname, email, message} = this.state

    return (
      <form style={formStyle} className='form' method='post'>
        <div>
          <label>Full name</label>
          <input
            type='text'
            name='fullname'
            value={fullname}
            onChange={this.onChange}
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type='email'
            name='email'
            value={email}
            onChange={this.onChange}
          />
        </div>
        <div>
          <label>Message</label>
          <textarea
            name='message'
            rows='5'
            value={message}
            onChange={this.onChange}
          />
        </div>
        <ul className='actions' style={buttonsStyle}>
          <li>
            <button type='submit' className='button special'>Send</button>
          </li>
        </ul>
      </form>
    )
  }
}
export default ContactForm
