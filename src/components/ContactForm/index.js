import React, { Component } from 'react';
import styled from "styled-components";
import { Flex, Box, Link, Text, Button } from "rebass";

const Container = styled.div`
  display: flex;
  justify-content: center;

  form {
    p {
      label,
      input {
        display: block;
      }
      input {
        min-width: 350px;
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
  border-radius: 0.25rem;
  border: none;
  background: lightgrey;
  padding: 0.25rem 1rem;
  overflow: auto;
  font: inherit;
`;

const TextArea = styled.textarea`
  height: 2rem;
  border-radius: 0.25rem;
  border: none;
  background: lightgrey;
  padding: 0.25rem 1rem;
  overflow: auto;
  font: inherit;
  padding: 1rem;
  resize: vertical;
  min-height: 150px;
  width: 100%;
`;

export default class ContactForm extends React.Component {
    render() {
        return (
            <Container>
                <form
                name="contact-form"
                action="/success"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                netlify="true"
                >
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
                        <Button 
                            bg="lightgrey">
                            Send
                        </Button>
                    </p>
                    <Input type="hidden" name="form-name" value="contact-form" />
                </form>
            </Container>
        );
    }
}

