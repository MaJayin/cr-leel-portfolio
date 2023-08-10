import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Col, Container, Row } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import contactImg from '../assets/img/contact image.jpg';

export const Contacts = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [requestCount, setRequestCount] = useState(0);
  const MAX_REQUESTS = 3; // Maximum number of requests allowed
  const TIME_WINDOW = 60000; // Time window in milliseconds (1 minute in this example)

  const sendEmail = (e) => {
    e.preventDefault();

    // Check if the maximum request limit has been reached
    if (requestCount >= MAX_REQUESTS) {
      toast.error('You have reached the maximum request limit. Please try again later.', {
        position: toast.POSITION.TOP_RIGHT,
      });
      return;
    }

    // Check if there is an ongoing submission
    if (isSubmitting) {
      toast.info('Please wait until the previous request completes.', {
        position: toast.POSITION.TOP_RIGHT,
      });
      return;
    }

    setIsSubmitting(true);

    emailjs
      .sendForm('service_w6cds0j', 'template_r2t2zyo', form.current, 'ZJ2g0VuPpAyxbercF')
      .then((result) => {
        console.log(result.text);
        toast.success('Email sent successfully!', {
          position: toast.POSITION.TOP_RIGHT,
        });
        form.current.reset(); // Reset form fields
      })
      .catch((error) => {
        console.log(error.text);
        toast.error('Failed to send email.', {
          position: toast.POSITION.TOP_RIGHT,
        });
      })
      .finally(() => {
        setIsSubmitting(false);
        setRequestCount(requestCount + 1);
        setTimeout(() => {
          setRequestCount((prevCount) => Math.max(prevCount - 1, 0));
        }, TIME_WINDOW);
      });
  };

  return (
    <section className="contact" id="contact">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <img src={contactImg} alt="Contact Us" />
          </Col>
          <Col md={6}>
            <h2>Get In Touch</h2>
            <form ref={form} onSubmit={sendEmail}>
            <Row>
              <Col sm={6} className="px-1">
                <input type="text" name="user_name" placeholder="Full Name" />
              </Col>
              <Col sm={6} className="px-1">
                <input type="email" name="user_email" placeholder="Email Address" />
              </Col>
              <Col sm={6} className="px-1">
                <input type="tel" name="phone" placeholder="Phone Number" />
              </Col>
              <Col sm={6} className="px-1">
                
                
              </Col>
              <textarea row="6" name="message" placeholder="Message" />
              <input type="submit" value="Send" disabled={isSubmitting} />
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
      <ToastContainer />
    </section>
  );
};
