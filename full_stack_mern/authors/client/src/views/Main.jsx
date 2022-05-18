import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import DeleteButton from "../components/DeleteButton";

const Main = () => {
  const [authors, setAuthors] = useState([]);
  const [refresh, triggerRefresh] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (!refresh) return;

    axios
      .get("http://localhost:5000/api/authors")
      .then((res) => {
        setAuthors(res.data.authors);
        triggerRefresh(false);
      })
      .catch((err) =>
        console.log(
          "Something went horribly wrong with the database request:",
          err
        )
      );
  }, [refresh]);

  return (
    <div className="content">
      <Link to={"/new"}>Add an author</Link>
      <h3 style={{ color: "rebeccapurple", marginTop: "8px" }}>
        We have quotes by:
      </h3>
      <table style={{ borderCollapse: "collapse", marginTop: "8px" }}>
        <thead style={{ backgroundColor: "lightgray" }}>
          <tr>
            <th>Author</th>
            <th>Actions Avaliable</th>
          </tr>
        </thead>
        <tbody>
          {authors &&
            authors.map((author, index) => (
              <tr
                key={author._id}
                style={{
                  lineHeight: "2em",
                  backgroundColor: index % 2 === 0 ? "white" : "lightgray",
                }}
              >
                <td style={{ color: "rebeccapurple", padding: "4px" }}>
                  {author.name}
                </td>
                <td style={{ padding: "4px" }}>
                  <Button
                    onClick={() => navigate(`/edit/${author._id}`)}
                    style={{
                      backgroundColor: "orange",
                      color: "white",
                      marginLeft: "24px",
                    }}
                  >
                    Edit
                  </Button>
                  <DeleteButton
                    options={{ id: author._id, route: "/api/authors/delete" }}
                    callback={() => triggerRefresh(true)}
                    style={{ marginLeft: "8px" }}
                  />
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Main;
