import { useState } from 'react';
import discover from './Discover.module.css'
import { Button, Form } from 'react-bootstrap';
import toast from "react-hot-toast";
import axios from 'axios';


export default function Modals() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    try {
      const response = await axios.post('http://localhost:5995/api/demo-email', {
        email,
        message
      });

      if (response.status === 200) {
        toast.success('You request has been sent!');
        setEmail('');
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
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Full Name</Form.Label>
            <Form.Control type="name" placeholder="John Doe" onChange={(e) => setEmail(e.target.value)} value={email} autoFocus />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Mobile Number</Form.Label>
            <Form.Control type="number" placeholder="+1 9876543210" onChange={(e) => setEmail(e.target.value)} value={email} autoFocus />
          </Form.Group>
        </div>

        <div className={discover.__modalContainer}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Business Email</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" onChange={(e) => setEmail(e.target.value)} value={email} autoFocus />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Company Name</Form.Label>
            <Form.Control type="name" placeholder='ABC Enterprise' onChange={(e) => setMessage(e.target.value)} value={message} />
          </Form.Group>
        </div>

        <Button className={discover.__modalBtn} variant="primary" type="submit" disabled={isSending}>
          {isSending ? 'Requesting...' : 'Request'}
        </Button>
      </Form>
    </div>
  )
}
