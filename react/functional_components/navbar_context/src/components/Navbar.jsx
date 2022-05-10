import React, { useContext } from "react";
import { WrapperContext } from "../context/Wrapper";

const styles = {
  navbar: {
    width: "100%",
    height: "50px",
    padding: "0 10%",
    display: "flex",
    alignItems: "center",
    justifyContent: "end",
    backgroundColor: "#8c30c5",
    marginBottom: "32px",
  },
  header: {
    color: "white",
    marginRight: "20%",
  },
};

const Navbar = () => {
  const context = useContext(WrapperContext);

  return (
    <div className="navbar" style={styles.navbar}>
      <h2 style={styles.header}>Hi {context.name}!</h2>
    </div>
  );
};

export default Navbar;
