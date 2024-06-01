import React, { useEffect, useState } from "react";
import CareerStyle from "./Career.module.css";
import axios from "axios";
import { Card, Modal, Button, Form } from "react-bootstrap";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import toast from "react-hot-toast";
// import { Toaster } from "react-hot-toast";
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
    <div className={CareerStyle.__careerPage}>
      {/* <div>
        <Toaster />
      </div> */}

      <h2 className={CareerStyle.__headerText}>Our Company Culture</h2>
      <p className={CareerStyle.__headerDesc}> <strong>Welcome to Mackinlay:</strong> Fostering Excellence, Sustainability, and Inclusion</p>
      <p className={CareerStyle.__headerDesc}>At Mackinlay, we prioritize a positive and inclusive culture as the cornerstone of our success. Grounded in kindness, respect, and flexibility, our values define who we are and how we operate.</p>
      <p className={CareerStyle.__headerDesc}>Vision Statement: To be the most trusted and innovative company in our industry, known for our commitment to excellence, sustainability, and positive societal impact.</p>

      <p className={CareerStyle.__careerDesc}>
        <h5>Core Values: </h5>
        <ol>
          <li>
            <span>Kindness and Respect:  </span> 
            Every member of our team is valued for their unique contributions, fostering an environment where everyone feels supported and appreciated.</li>
          <li>
            <span>Innovation:  </span> 
            We encourage creative thinking and innovative solutions, pushing boundaries to redefine industry standards.</li>
          <li>
            <span>Customer-Centricity:  </span> 
            Our commitment to exceeding customer expectations drives everything we do, delivering exceptional value with every interaction.</li>
          <li>
            <span>Collaboration:  </span> 
            Teamwork is key to our success, with diverse perspectives welcomed and encouraged to drive innovation and excellence.</li>
          <li>
            <span>Sustainability:  </span> 
            Our operations are driven by eco-friendly practices and a commitment to reducing our environmental footprint.</li>
          <li>
            <span>Diversity and Inclusion:  </span> 
            Embracing cultural diversity, we promote equal opportunities and a culture of inclusivity.</li>
        </ol>
      </p>

      <p className={CareerStyle.__careerDesc}>
        <h5>Living Our Values: </h5>
        <ul>
          <li>
            <span>Kindness and Respect: </span>
            We uphold fair treatment policies, maintain a zero-tolerance approach to discrimination, and implement regular feedback and recognition programs.</li>
          <li>
            <span>Innovation: </span>
            We provide platforms for idea-sharing, innovation labs, and regular hackathons to stimulate creative solutions.</li>
          <li>
            <span>Customer-Centricity: </span>
            Our team receives regular training on customer service excellence, supported by robust feedback loops for continuous improvement.</li>
          <li>
            <span>Collaboration: </span>
            Our workspaces and digital tools foster teamwork, with cross-departmental meetings and team-building activities enhancing cooperation.</li>
          <li>
            <span>Sustainability: </span>
            We practice green office protocols, run recycling programs, implement energy-efficient systems, and support our tree-planting initiative.</li>
          <li>
            <span>Diversity and Inclusion: </span>
            Our inclusive hiring practices, employee resource groups, and cultural awareness training ensure a welcoming environment for all.</li>
        </ul>
      </p>

      <p className={CareerStyle.__careerDesc}>
        <h5>Recruitment and Retention: </h5>
        <ul>
          <li>
            <span>Stringent Recruiting Policies: </span>
            Our multi-stage interview process involves diverse panels to ensure a comprehensive evaluation.</li>
          <li>
            <span>Cultural Fit: </span>
            Assessing cultural fit is a core component of our hiring process.</li>
          <li>
            <span>Retention Strategies: </span>
            We offer competitive benefits, continuous professional development, and clear career progression opportunities.</li>
        </ul>
      </p>

      <p className={CareerStyle.__careerDesc}>
        <h5>Our Workspaces: </h5>
        <ul>
          <li>
            <span>Innovative Workspace: </span>
            Our open, collaborative spaces with modern amenities inspire creativity and interaction.</li>
          <li>
            <span>Remote Opportunities: </span>
            We embrace flexible work arrangements to enhance work-life balance.</li>
          <li>
            <span>Global Presence: </span>
            We expand our inclusive culture globally, with branches in the UK, Netherlands, and Singapore.</li>
        </ul>
      </p>

      <p className={CareerStyle.__careerDesc}>
        <span>Corporate Social Responsibility: </span>
        We are committed to giving back through community engagement, volunteering programs, charity events, and partnerships with local organizations. Our sustainability practices are enhanced by initiatives like our tree-planting program.
      </p>

      <p className={CareerStyle.__careerDesc}>
        <span>Professional Development: </span>
        We support continuous learning and career growth through mentorship programs, workshops, and access to online courses. We provide clear career paths and conduct regular performance reviews.</p>

      <p className={CareerStyle.__careerDesc}>
        <span>Join Our Global Team: </span>
        If you're seeking a workplace where kindness, respect, flexibility, and cultural diversity are more than just words, Mackinlay welcomes you. Join us and be part of a culture that values your individuality and supports your growth on a global scale.
      </p>

      <p className={CareerStyle.__careerDesc}>
        <span>Career Opportunities: </span>
        Explore our current job openings and join our innovative and dynamic team, shaping the future of our industry. Visit our Career Page or contact us at <em>careers@mackinlay.in.</em>
      </p>

      <p className={CareerStyle.__careerDesc}>
        <span>Commitment to Sustainability: </span>
        We are proud to announce our tree-planting initiative, reflecting our dedication to sustainability and environmental stewardship. Join us in creating a positive impact on the planet while striving for excellence in all aspects of our business.
      </p>





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
                className={CareerStyle.modalImage}
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
    </div>
  );
};

export default Career;
