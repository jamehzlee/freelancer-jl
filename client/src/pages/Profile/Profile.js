import "./index.css";
import React from "react";
import { QUERY_ALL_JOBS } from "../../utils/queries";
import { useQuery } from "@apollo/client";
import { audioWave, art, cooking, socialMedia, tech } from "../../assets";
import Auth from "../../utils/auth";
import ProfileItem from "../../components/ProfileItem";

export default function Profile() {
  const auth = Auth.getProfile();
  const { loading, data } = useQuery(QUERY_ALL_JOBS);
  const jobs = data?.allJobs;

  return (
    <div className="row justify-content-center" id="profile" >
      {loading
        ? ""
        : jobs.map((job) => {
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
                }
              }

              return (
                <div className="col" id="profile-col">
                  <div className="row justify-content-center">
                    <ProfileItem job={job} selectedImg={selectedImg} />
                  </div>
                </div>
              );
            }
          })}
    </div>
  );
}