import React from "react";
import styled from "styled-components";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Snackbar } from "@mui/material";
import { Descriptions, EmailJs } from "../../data/constants";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  @media (max-width: 960px) {
    padding: 0px;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 0px 0px 80px 0px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};

  @media (max-width: 960px) {
    margin-top: 12px;
    font-size: 15px;
    width: 700px;
    margin: 0 auto;
  }

  @media (max-width: 640px) {
    width: 90%;
    margin: 0 auto;
    font-size: 13px;
  }
`;

const ContactForm = styled.form`
  width: 95%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.card + 40};
  padding: 32px;
  border-radius: 16px;
  border: 0.1px solid #524a61;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  margin-top: 28px;
  gap: 20px;

  @media (max-width: 500px) {
    padding: 15px;
    width: 90%;
  }
`;

const ContactTitle = styled.div`
  font-size: 24px;
  margin-bottom: 6px;
  font-weight: 600;
  text-align: center;
  color: ${({ theme }) => theme.text_primary};

  @media (max-width: 500px) {
    font-size: 20px;
  }
`;

const ContactInput = styled.input`
  flex: 1;
  background-color: transparent;
  border: 1px solid #524a61;
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 10px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }

  @media (max-width: 500px) {
    font-size: 15px;
  }
`;

const ContactInputMessage = styled.textarea`
  flex: 1;
  background-color: transparent;
  border: 1px solid #524a61;
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 10px 16px;
  resize: none;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
  @media (max-width: 500px) {
    font-size: 15px;
  }
`;

const ContactButton = styled.input`
  width: 100%;
  text-decoration: none;
  text-align: center;
  background: hsla(271, 100%, 50%, 1);
  background: linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  background: -moz-linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  background: -webkit-linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  padding: 13px 16px;
  cursor: pointer;
  margin-top: 2px;
  border-radius: 12px;
  border: none;
  color: ${({ theme }) => theme.white};
  font-size: 18px;
  font-weight: 600;

  @media (max-width: 500px) {
    font-size: 15px;
  }

  ${({ loading, theme }) =>
    loading &&
    `
        background: #404b7f;
        color: ${theme.text_secondary};
        cursor: not-allowed;
        pointer-events: all !important;
    `}
`;

const Contact = () => {
  //hooks
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const form = useRef();

  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    emailjs
      .sendForm(
        EmailJs.service_id,
        EmailJs.template_id,
        form.current,
        EmailJs.public_key
      )
      .then(
        (result) => {
          setOpen(true);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      )
      .finally(() => setLoading(false));
  };

  return (
    <Container id="contact">
      <Wrapper>
        <Title>Contact</Title>
        <Desc>{Descriptions.contact}</Desc>

        <ContactForm ref={form} onSubmit={handleSubmit}>
          <ContactTitle>Email Me </ContactTitle>
          <ContactInput
            type="text"
            required
            placeholder="Mohsin King"
            name="name"
          />
          <ContactInput
            type="email"
            required
            placeholder="mohsin@gmail.com"
            name="email"
          />
          <ContactInput
            type="text"
            required
            placeholder="Subject"
            name="subject"
          />
          <ContactInputMessage
            required
            placeholder="Message"
            rows="4"
            name="message"
          />
          <ContactButton
            disabled={loading}
            loading={loading}
            type="submit"
            value={loading ? "Sending..." : "Send Message"}
          />
        </ContactForm>

        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={() => setOpen(false)}
          message="Email sent successfully!"
          severity="success"
        />
      </Wrapper>
    </Container>
  );
};

export default Contact;
