import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { DELETE_JOB } from "../../utils/mutations";
import { useMutation } from "@apollo/client";

export function ProfileDelete(props) {
  const [deleteJob, { error, data }] = useMutation(DELETE_JOB);

  const handleDelete = async (id) => {
    console.log(id);
    try {
      const data = await deleteJob({
        variables: {
          jobDeleteId: id,
        },
      });
      window.location.reload();
    } catch (error) {}
  };

  return (
    <Button
      className="col-4 bg-danger"
      type="button"
      data-category={props.job._id}
      onClick={() => handleDelete(props.job._id)}
    >
      Delete
    </Button>
  );
}
