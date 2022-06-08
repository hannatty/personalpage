import React, { useContext } from "react";
import { StackContext } from "../contexts/StackContext";
import StackListItem from "./StackListItem";

const StackList = () => {
  const context = useContext(StackContext);

  const data = context.stacks.map((stack) => (
    <StackListItem key={stack.id} stack={stack}></StackListItem>
  ));
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h1>About Company</h1>
      <p><strong>RoadMapps</strong> is a creative company specialized in mixed applications (mobile and web). <br/> With expertise in usability, design & technology helps their customers build stronger <br/>interpersonal relationships with the public through technology.</p>
       <p><hr /></p>
       
      <h1>About My Job</h1>
      <p>I work on the web development using Ruby on Rails, HTML, CSS, JavaScript and PostgreSQL;<br/>
        I perform source code control using GIT and 
        I use Docker to manage virtual machines <br/> and virtualized environments.</p>
      <p><hr /></p>

      <h1>My Soft Skills</h1>
      <p>
      1 - Creativity <br/>
      2 - Good Communication <br/>
      3 - Proactivity <br/>
      </p>
      <p><hr /></p>

      <h1>Hard Skills</h1>
      {data}
    </div>
  );
};

export default StackList;
