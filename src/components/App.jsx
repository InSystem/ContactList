import React from "react";
import Card from "./Card";
import contacts from "../contacts";

function createCard(contact) {
  return (
    <Card
      //id={contact.id}
      name={contact.name}
      img={contact.img}
      tel={contact.tel}
      email={contact.email}
    />
  );
}
//Creating reusable card components.
function App() {
  return (
    <div>
      <h1 className="heading">Мои контакты</h1>
      {contacts.map(createCard)}
    </div>
  );
}

export default App;