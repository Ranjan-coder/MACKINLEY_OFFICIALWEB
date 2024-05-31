import { useState } from 'react';
import discover from './Discover.module.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";
import axios from 'axios';


export default function Modals() {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSending, setIsSending] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
        setShow(false);
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
    <>
    <div><Toaster/></div>
      <button className={discover.__demoBtn} onClick={handleShow}>
        Ask for a demo
      </button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Discuss business needs or ask for a demo. We would love to hear.</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Enter message</Form.Label>
              <Form.Control as="textarea" rows={3} 
              onChange={(e) => setMessage(e.target.value)}
              value={message}
              />
            </Form.Group>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" type="submit" disabled={isSending}>
                {isSending ? 'Requesting...' : 'Request'}
          </Button>
        </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  )
}
