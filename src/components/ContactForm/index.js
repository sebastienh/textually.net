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

export default class ContactForm extends React.Component {
    render() {
        return (
            <Container {...this.props}>
                <form
                name="contact"
                action="/contact-form-success"
                method="post"
                data-netlify="true"
                netlify-honeypot="bot-field">
                    <p hidden>
                        <Label>Don’t fill this out if you're human: <input name="bot-field" /></Label>
                    </p>
                    <p>
                        <Label htmlFor="name">Name</Label>
                        <Input data-cy="contact-name" name="name" type="text" required />
                    </p>
                    <p>
                        <Label htmlFor="email">E-Mail</Label>
                        <Input data-cy="contact-email" name="email" type="email" required />
                    </p>
                    <p>
                        <Label htmlFor="message">Your Message</Label>
                        <TextArea data-cy="contact-message" name="message" required />
                    </p>
                    <div data-netlify-recaptcha="true"></div>
                    <p style={{ marginTop: '1rem' }}>
                        <FormButton>
                            Send
                        </FormButton>
                    </p>
                    <Input type="hidden" name="form-name" value="contact-form" />
                </form>
            </Container>
        );
    }
}

