import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card,Accordion } from 'react-bootstrap';
import CareerStyle from './Career.module.css';

const Career = () => {
    const [jobs, setJobs] = useState([]);
    // const [selectedJob, setSelectedJob] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:5995/api/get-jobs')
            .then(response => {
                setJobs(response.data);
                console.log(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the job data!", error);
            });
    }, []);

    // const handleJobClick = (job) => {
    //     setSelectedJob(job);
    // };

    return (
        <div className={CareerStyle.career_container}>
            <div className="container">
                <div className="row">
                    {jobs.map(job => (
                        <div key={job._id} className="col-md-4 mb-3">
                    <Accordion>
                            <Card>
                                <Card.Body>
                                <Accordion.Header>
                                        <img 
                                            src={job.imageUrl} 
                                            alt="network-error" 
                                            className={CareerStyle.headerImage}
                                            style={{ width: '50px', marginRight: '10px' }}
                                        />
                                        {job.jobTitle}
                                    </Accordion.Header>
                                     <Accordion.Body>
                                    <Card.Text>
                                        Location: {job.location}
                                        <br />
                                        Job Type: {job.jobType}
                                    </Card.Text>
                                  
                                        <Card>
                                            <Card.Body>
                                                <Card.Text>{job.companyOverview}</Card.Text>
                                                <Card.Text>{job.positionOverview}</Card.Text>
                                                <Card.Text>
                                                    <strong>Key Responsibilities:</strong>
                                                    <ul>
                                                        {job.keyResponsibilities.map((responsibility, index) => (
                                                            <li key={index}>{responsibility}</li>
                                                        ))}
                                                    </ul>
                                                </Card.Text>
                                                <Card.Text>
                                                    <strong>Qualifications:</strong>
                                                    <ul>
                                                        {job.qualifications.map((qualification, index) => (
                                                            <li key={index}>{qualification}</li>
                                                        ))}
                                                    </ul>
                                                </Card.Text>
                                                <Card.Text>
                                                    <strong>What We Offer:</strong>
                                                    <ul>
                                                        {job.whatWeOffer.map((offer, index) => (
                                                            <li key={index}>{offer}</li>
                                                        ))}
                                                    </ul>
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                        </Accordion.Body>
                                </Card.Body>
                            </Card>
                    </Accordion>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Career;
