import React from "react";
import "./principal.css";
import { Avatar } from "@mui/material";
import { Button } from "@mui/material";
import FotoPerfil from "../../images/hanaty.jpeg";
import Facts from "./Facts";

const Principal = () => {
  return (
    <div className="general-container">
      <div className="subcontainer" style={{ backgroundColor: "#Fff" }}>
        <Avatar
          alt="Hanaty"
          src={FotoPerfil}
          sx={{ width: 400, height: 400 }}
        />
        <h1 className="title">
          Hi,
          <br /> I'm Hanaty
          <br />
          Web Developer
        </h1>
        <Button
          href="/"
          variant="contained"
          size="large"
          style={{ top: "150px", right: "450px", backgroundColor: "#AA4543" }}
        >
          MORE ABOUT MY JOB
        </Button>
      </div>
      <Facts />
    </div>
  );
};

export default Principal;
