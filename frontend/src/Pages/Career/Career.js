import React, { useEffect, useState } from "react";
import CareerStyle from "./Career.module.css";
import axios from "axios";
import { Card, Modal, Button, Form } from "react-bootstrap";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";
import LogoLoader from "../../Component/Logo_Loader/LogoLoader";
const Career = () => {
  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const [showJobModal, setShowJobModal] = useState(false);
  const [showApplyModal, setShowApplyModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [Isloading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    resume: null,
    appliedJob: "",
  });

  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    phone: "",
    resume: "",
  });

  useEffect(() => {
    setLoading(true)
    axios
      .get("http://localhost:5995/api/get-jobs")
      .then((response) => {
        setLoading(false)
        setJobs(response.data);
      })
      .catch((error) => {
        setLoading(false)
        console.error("There was an error fetching the job data!", error);
      });
  }, []);

  const handleJobClick = (job) => {
    setSelectedJob(job);
    setShowJobModal(true);
  };

  const handleJobModalClose = () => {
    setShowJobModal(false);
    setSelectedJob(null);
  };

  const handleApplyClick = (jobTitle) => {
    setFormData({ ...formData, appliedJob: jobTitle });
    setShowJobModal(false);
    setShowApplyModal(true);
  };

  const handleApplyModalClose = () => {
    setShowApplyModal(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      resume: null,
      appliedJob: "",
    });
    setFormErrors({
      name: "",
      email: "",
      phone: "",
      resume: "",
    });
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setFormErrors({ ...formErrors, [name]: '' });
  };

  const handlePhoneChange = (value) => {
    setFormData({ ...formData, phone: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, resume: e.target.files[0] });
    setFormErrors({ ...formErrors, resume: "" });
  };

  const validateForm = () => {
    const { name, email, phone, resume } = formData;
    if (!name || !email || !phone || !resume) {
      toast.error("Please fill out all fields.");
      setIsSubmitting(false);
      return false;
    }
    if (phone.length < 10) {
      toast.error("Please enter a valid phone number with country code.");
      setIsSubmitting(false);
      return false;
    }
    return true;
  };


  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    // Disable the submit button
    setIsSubmitting(true);
    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("phone", formData.phone);
    formDataToSend.append("resume", formData.resume);
    formDataToSend.append("appliedJob", formData.appliedJob);

    try {
      const response = await axios.post(
        "http://localhost:5995/api/apply-job",
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Form submitted:", response.data);
      toast.success("Job Applied Successfully");
      handleApplyModalClose();
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Error submitting application. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div>
        <Toaster />
      </div>
      {
        Isloading && <LogoLoader />
      }
      <div className={CareerStyle.career_container}>
        <div className="container">
          <div className="row">
            {jobs.map((job) => (
              <div key={job._id} className="col-md-4 mb-3">
                <Card onClick={() => handleJobClick(job)} className={CareerStyle.card}>
                  <Card.Body>
                    <Card.Header>
                      <img
                        src={job.imageUrl}
                        alt="network-error"
                        className={CareerStyle.headerImage}
                        style={{ width: "50px", marginRight: "10px" }}
                      />
                      {job.jobTitle}
                    </Card.Header>
                    <Card.Text>
                      Location: {job.location}
                      <br />
                      Job Type: {job.jobType}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {selectedJob && (
          <Modal show={showJobModal} onHide={handleJobModalClose} size="lg">
            <Modal.Header closeButton>
              <Modal.Title>{selectedJob.jobTitle}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <img
                src={selectedJob.imageUrl}
                alt="network-error"
                style={{ width: "100%", height: "60vh", marginBottom: "10px" }}
              // className={CareerStyle.modalImage}
              />
              <Card.Text>
                <strong>Company Overview:</strong> {selectedJob.companyOverview}
              </Card.Text>
              <Card.Text>
                <strong>Position Overview:</strong>{" "}
                {selectedJob.positionOverview}
              </Card.Text>
              <Card.Text>
                <strong>Key Responsibilities:</strong>
                <ul>
                  {selectedJob.keyResponsibilities.map(
                    (responsibility, index) => (
                      <li key={index}>{responsibility}</li>
                    )
                  )}
                </ul>
              </Card.Text>
              <Card.Text>
                <strong>Qualifications:</strong>
                <ul>
                  {selectedJob.qualifications.map((qualification, index) => (
                    <li key={index}>{qualification}</li>
                  ))}
                </ul>
              </Card.Text>
              <Card.Text>
                <strong>What We Offer:</strong>
                <ul>
                  {selectedJob.whatWeOffer.map((offer, index) => (
                    <li key={index}>{offer}</li>
                  ))}
                </ul>
              </Card.Text>
              <Button
                variant="primary"
                onClick={() => handleApplyClick(selectedJob.jobTitle)}
                style={{ float: "right" }}
              >
                Apply for this job
              </Button>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleJobModalClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        )}
        <Modal show={showApplyModal} onHide={handleApplyModalClose}>
          <Modal.Header closeButton>
            <Modal.Title>Apply for {formData.appliedJob}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleFormSubmit}>
              <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleFormChange}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  {formErrors.name}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="formEmail" className="mt-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleFormChange}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  {formErrors.email}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="formPhone" className="mt-3">
                <Form.Label>Phone Number</Form.Label>
                <PhoneInput
                  country={'in'}
                  value={formData.phone}
                  onChange={handlePhoneChange}
                  required
                  inputProps={{
                    name: 'phone',
                    required: true,
                    autoFocus: true
                  }}
                />
              </Form.Group>
              <Form.Group controlId="formResume" className="mt-3">
                <Form.Label>Resume</Form.Label>
                <Form.Control
                  type="file"
                  name="resume"
                  onChange={handleFileChange}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  {formErrors.resume}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="formAppliedJob" className="mt-3">
                <Form.Label>Applied Job</Form.Label>
                <Form.Control
                  type="text"
                  name="appliedJob"
                  value={formData.appliedJob}
                  readOnly
                />
              </Form.Group>
              <Button
                variant="primary"
                type="submit"
                className="mt-3"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit Application"}
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
};

export default Career;
