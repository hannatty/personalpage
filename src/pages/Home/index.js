import React from "react";
import AddStack from "../../components/AddStack";
import StackList from "../../components/StackList";
import StackProvider from "../../contexts/StackContext";

function Home() {
  return (
    <div>
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <StackProvider>
          <StackList>
          </StackList>
          <br /> <br />
          <AddStack></AddStack>
        </StackProvider>
      </div>
    </div>
  );
}

export default Home;
