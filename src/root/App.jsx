import React, { useState } from "react";
import "./App.css";
import { Container } from "./style";
import { data } from "../mock";

export const App = () => {
  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    name: "",
    address: "",
    phone: "",
    email: "",
  });
  const handleAddFormChange = (e) => {
    e.preventDefault();
    const fieldName = e.target.getAttribute("name");
    const fieldValue = e.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

    const handleAddFormSubmit = (e) => {
      e.preventDefault();
      
      const newContact = {
        id: Date.now(),
        name: addFormData.name,
        address: addFormData.address,
        phone: addFormData.phone,
        email: addFormData.email,
      };
      const newContacts = [...contacts, newContact];
      setContacts(newContacts);
    };
  return (
    <Container>
      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Phone number</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((value) => {
            return (
              <tr key={value.id}>
                <td>{value.name}</td>
                <td>{value.address}</td>
                <td>{value.phone}</td>
                <td>{value.email}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <h3>Add new contact</h3>
      <form Submit={handleAddFormSubmit}>
        <input
          type="text"
          name="fullname"
          required="required"
          placeholder="Enter a name"
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="Address"
          required="required"
          placeholder="Enter an address"
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="phone"
          required="required"
          placeholder="Enter a phone "
          onChange={handleAddFormChange}
        />
        <input
          type="email"
          name="email"
          required="required"
          placeholder="Enter a email"
          onChange={handleAddFormChange}
        />
        <button type="submit">Add</button>
      </form>
    </Container>
  );
};

export default App;
