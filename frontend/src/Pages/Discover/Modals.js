import { useState } from 'react';
import discover from './Discover.module.css';
import { Button, Form } from 'react-bootstrap';
import toast from "react-hot-toast";
import axios from 'axios';
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export default function Modals() {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [message, setMessage] = useState('');
  const [isSending, setIsSending] = useState(false);

  const handlePhoneChange = (value) => {
    setPhoneNumber(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    try {
      const response = await axios.post('http://localhost:5995/api/demo-email', {
        fullName,
        phoneNumber,
        email,
        companyName,
        message
      });

      if (response.status === 200) {
        toast.success('Your request has been sent!');
        setFullName('');
        setPhoneNumber('');
        setEmail('');
        setCompanyName('');
        setMessage('');
      } else {
        toast.error('Failed to send request.');
      }
    } catch (error) {
      console.error('There was an error sending the email!', error);
      toast.error('There was an error sending the request!');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className={discover.__modalPage}>
      <h3 className={discover.__modalTitle}>Discuss Business Needs or Ask For a Demo. We Would Love to Talk.</h3>
      <Form className={discover.__modalForm} onSubmit={handleSubmit}>
        <div className={discover.__modalContainer}>
          <Form.Group className="mb-3" controlId="formFullName">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="John Doe"
              onChange={(e) => setFullName(e.target.value)}
              value={fullName}
              required
              autoFocus
              className={discover.inputElement}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formPhoneNumber">
            <Form.Label>Mobile Number</Form.Label>
            <PhoneInput
              country={'in'}
              type="tel"
              id="phoneNumber"
              placeholder="phone Number"
              onChange={handlePhoneChange}
              value={phoneNumber}
              required
              inputProps={{
                name: 'phoneNumber',
                required: true,
              }}
            />
          </Form.Group>
        </div>

        <div className={discover.__modalContainer}>
          <Form.Group className="mb-3" controlId="formBusinessEmail">
            <Form.Label>Business Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="name@example.com"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
              className={discover.inputElement}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formCompanyName">
            <Form.Label>Company Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="ABC Enterprise"
              onChange={(e) => setCompanyName(e.target.value)}
              value={companyName}
              required
              className={discover.inputElement}
            />
          </Form.Group>
        </div>
        <Form.Group className="mb-3" controlId="formMessage">
          <Form.Label>Enter Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder='Type your message...'
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            required
            className={discover.inputElement}
          />
        </Form.Group>

        <Button className={discover.__modalBtn} variant="primary" type="submit" disabled={isSending}>
          {isSending ? 'Requesting Demo...' : 'Request Demo'}
        </Button>
      </Form>
    </div>
  );
}
