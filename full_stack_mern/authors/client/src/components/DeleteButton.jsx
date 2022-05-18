import axios from "axios";
import React from "react";
import Button from "./Button";

const DeleteButton = ({
  options = { id: "", route: "/api/delete/" },
  style = {},
  callback = () => {},
  children: text = "Delete",
}) => {
  const handleButtonClick = () => {
    axios
      .delete(`http://localhost:5000${options.route}/${options.id}`)
      .then(() => callback())
      .catch((err) => {
        console.log("There was an error deleting this item:", err);
      });
  };

  return (
    <Button
      onClick={handleButtonClick}
      style={{ color: "white", backgroundColor: "red", ...style }}
    >
      {text}
    </Button>
  );
};

export default DeleteButton;
