import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export function ProfileEdit(props) {
  return (
    <Button
      className="col-4"
      type="button"
      as={Link}
      to={`edit/${props.job._id}`}
    >
      Edit
    </Button>
  );
}
