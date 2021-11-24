import React from "react";
import Card from "./Card";
import contacts from "../contacts";
import Avatar from "./Avatar";

//Creating reusable card components.
function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar img="https://avatars.githubusercontent.com/u/91548582?v=4" />
      <Card
        name={contacts[0].name}
        img={contacts[0].img}
        tel={contacts[0].tel}
        email={contacts[0].email}
      />
      <Card
        name={contacts[1].name}
        img={contacts[1].img}
        tel={contacts[1].tel}
        email={contacts[1].email}
      />
      <Card
        name={contacts[2].name}
        img={contacts[2].img}
        tel={contacts[2].tel}
        email={contacts[2].email}
      />
    </div>
  );
}

export default App;
