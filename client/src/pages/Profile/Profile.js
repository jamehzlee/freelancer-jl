import "./index.css";
import React from "react";
import { QUERY_ALL_JOBS } from "../../utils/queries";
import { useQuery } from "@apollo/client";
import { audioWave, art, cooking, socialMedia, tech } from "../../assets";
import Auth from "../../utils/auth";
import ProfileItem from "../../components/ProfileItem";
import { Footer, Header } from "../../components";
import { Container, Row } from "react-bootstrap";
import Grid from "@mui/material/Grid";

export default function Profile() {
  const auth = Auth.getProfile();
  const { loading, data } = useQuery(QUERY_ALL_JOBS);
  const jobs = data?.allJobs;

  return (
    <Container id="page">
      <Row className="row-content justify-content-center">
        <Header />

        <Grid container justifyContent="center" spacing={4}>
          {loading
            ? ""
            : jobs.map((job, i) => {
                if (job.user._id === auth.data._id) {
                  const id = job._id;
                  let selectedImg = "";

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
                        break;
                    }
                  }

                  return (
                    <Grid item key={i}>
                      <ProfileItem job={job} selectedImg={selectedImg} />
                    </Grid>
                  );
                }
              })}
        </Grid>

        <Footer/>
      </Row>
    </Container>
  );
}
