import "./index.css";
import { ProfileEdit } from "./ProfileEdit";
import { ProfileDelete } from "./ProfileDelete";
import Grow from "@mui/material/Grow";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

export default function ProfileItem({ job, selectedImg }) {
  return (
      <Grow in={true} timeout={1000}>
        <Card className="col" id="profile-card" elevation={10} sx={{ width: 300, height: 375}}>
          <CardMedia component="img" src={selectedImg} />
          <CardContent>
            <Typography>{job.name}</Typography>
            <Typography>${job.price}</Typography>
            <Typography>{job.description}</Typography>
          </CardContent>
          <CardActions></CardActions>
        </Card>
      </Grow>
  );
}
