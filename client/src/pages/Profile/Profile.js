import "./index.css";
import React from "react";
import { Card, Button } from "react-bootstrap";
import { QUERY_ALL_JOBS } from "../../utils/queries";
import { UPDATE_JOB, DELETE_JOB } from "../../utils/mutations";
import { useMutation, useQuery } from "@apollo/client";
import Auth from '../../utils/auth';
import { audioWave, art, cooking, socialMedia, tech } from "../../assets";


export default function Profile() {
    const auth = Auth.getProfile();
    const { loading, data } = useQuery(QUERY_ALL_JOBS);
    const jobs = data?.allJobs
    const [deleteJob] = useMutation(DELETE_JOB);
    const [editJob] = useMutation(UPDATE_JOB);
    
    let selectedImg = "";

    if (!loading) {
        jobs.map((job) => {
            if (job.user._id === auth.data._id) {
                selectedImg = job.category.name;
                console.log(selectedImg);
                switch (selectedImg) {
                    case "Tech":
                        selectedImg = tech;
                        break;
                    case "Audio":
                        selectedImg = audioWave;
                        break;
                    case "Art":
                        selectedImg = art;
                        break;
                    case "Cooking":
                        selectedImg = cooking;
                        break;
                    case "Social Media":
                        selectedImg = socialMedia;
                        break;
                    default:
                        console.log("no category!");
                }
            }
        })
    };

    const handleDelete = (e) => {
        const del = e.currentTarget
        const jobCard = del.closest("#profile")
        console.log(del);
        jobCard.remove();
    }

    return (
        <div className="row justify-content-center p-5">
            {loading
                ? 
                ''
                : 
                jobs.map((job) => {
                    if (job.user._id === auth.data._id) {
                        const id = job._id

                        if (job.user._id === auth.data._id) {
                            selectedImg = job.category.name;
                            switch (selectedImg) {
                                case "Tech":
                                    selectedImg = tech;
                                    break;
                                case "Audio":
                                    selectedImg = audioWave;
                                    break;
                                case "Art":
                                    selectedImg = art;
                                    break;
                                case "Cooking":
                                    selectedImg = cooking;
                                    break;
                                case "Social Media":
                                    selectedImg = socialMedia;
                                    break;
                                default:
                                    console.log("no category!");
                            }
                        }

                        return (
                                <Card className="col" id="profile" key={job._id} >
                                    <Card.Img src={selectedImg} />
                                    <Card.Body>
                                        <Card.Title>{job.name}</Card.Title>
                                        <Card.Text>{job.description}</Card.Text>
                                    </Card.Body>
                                    <Card.Body>
                                        <div className="row justify-content-between">
                                            <Button
                                                className="col-4"
                                                type="button"
                                                onClick={() => deleteJob(job._id)}>
                                                Edit
                                            </Button>
                                            <Button
                                                className="col-4 bg-danger"
                                                type="button"
                                                onClick={handleDelete}
                                                >
                                                Delete
                                            </Button>
                                        </div>
                                    </Card.Body>
                                </Card>
                        );
                    }
                })
            }
        </div>
    );
}
