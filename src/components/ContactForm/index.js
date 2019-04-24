import React, { Component } from 'react';
import styled from "styled-components";
import { Flex, Box, Link, Text, Button } from "rebass";

const Container = styled(Flex)`
  justify-content: center;

  form {
    p {
      label,
      input {
        display: block;
      }
      
      /* desktop */   
      @media (min-width: 1200px) {
        input {
          min-width: 400px;
        }
      }

      /* tablet */   
      @media (min-width: 800px) and (max-width: 1200px) {
        input {
          min-width: 350px;
        }
      }

      /* mobile */   
      @media (max-width: 450px) {
        input {
          min-width: 220px;
        }
      }
    }
  }
`;

const Label = styled.label`
  margin: 1rem 0 1rem 0;
  color: black;
`; 

const Input = styled.input`
  height: 2rem;
  border: none;
  padding: 0.25rem 1rem;
  box-shadow: 0 1px 0 black;
  border-radius: 1px;
  -webkit-box-shadow: 0 1px 0 black;
  overflow: auto;
  font: inherit;
  -webkit-appearance: none;

  &:-internal-autofill-previewed {
    background-color: #FFFCF7 !important;
    background-image: none !important;
    color: rgb(0, 0, 0) !important;
  }

  &:-internal-autofill-selected {
    background-color: #FFFCF7 !important;
    background-image: none !important;
    color: rgb(0, 0, 0) !important;
  }

  &:focus {
    outline: 0;
    outline-offset: 0px;
  }
`;

const TextArea = styled.textarea`
  height: 2rem;
  box-shadow: 0 0px 0;

  /* background-color: #dedede; */
  padding: 0.25rem 1rem;
  overflow: auto;
  font: inherit;
  padding: 1rem;
  resize: vertical;
  min-height: 150px;
  width: 100%;

  &:focus {
    outline: 0;
    outline-offset: 0px;
  }
`;

const FormButton = styled(Button)`
  background-color: white;
  border-style: solid;
  border-color: black;
  border-radius: 0px;
  border-width: 1px;
  color: black;
`

// const IndexPage = () => (
  // <div>
  //   <h1>Hi people</h1>
  //   <p>Welcome to your new Gatsby site.</p>
  //   <form
  //     name="contact-form"
  //     method="post"
  //     netlify>
  //     <input type="hidden" name="form-name" value="contact-form" />
  //     <input type="text" placeholder="name" name="name" />
  //     <button>Send</button>
  //   </form>
  // </div>
// )

// export default IndexPage;

// export default class Index extends React.Component {
//     render() {
//         return (
//             <Container {...this.props}>
//                 <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field">
//                     <input type="hidden" name="form-name" value="contact" />
//                     <input hidden className="hidden" name="bot-field" />
//                     <p>
//                         <Label htmlFor="name">Name</Label>
//                         <Input name="name" type="text" required />
//                     </p>
//                     <p>
//                         <Label htmlFor="email">E-Mail</Label>
//                         <Input name="email" type="email" required />
//                     </p>
//                     <p>
//                         <Label htmlFor="message">Your Message</Label>
//                         <TextArea name="message" required />
//                     </p>
//                     <p style={{ marginTop: '1rem' }}>
//                         <FormButton type="submit" value="Send" id="Form-submit">
//                             Send
//                         </FormButton>
//                     </p>
//                 </form>
//             </Container>
//         );
//     }
// }

import { navigate } from 'gatsby-link'

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isValidated: false }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch(error => alert(error))
  }

  render() {
    return (
        <section className="section">
          <div className="container">
            <div className="content">
              <h1>Contact</h1>
              <form name="contact-form-3"
                method="post"
                action="/success/"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={this.handleSubmit}
              >
                {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                <input type="hidden" name="form-name" value="contact-form-3" />
                <div hidden>
                  <label>
                    Don’t fill this out:{' '}
                    <input name="bot-field" onChange={this.handleChange} />
                  </label>
                </div>
                <div className="field">
                  <label className="label" htmlFor={'name'}>
                    Your name
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      type={'text'}
                      name={'name'}
                      onChange={this.handleChange}
                      id={'name'}
                      required={true}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label" htmlFor={'email'}>
                    Email
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      type={'email'}
                      name={'email'}
                      onChange={this.handleChange}
                      id={'email'}
                      required={true}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label" htmlFor={'message'}>
                    Message
                  </label>
                  <div className="control">
                    <textarea
                      className="textarea"
                      name={'message'}
                      onChange={this.handleChange}
                      id={'message'}
                      required={true}
                    />
                  </div>
                </div>
                <div className="field">
                  <button className="button is-link" type="submit">
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
    )
  }
}


