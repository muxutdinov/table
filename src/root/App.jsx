import React, { useState, Fragment } from "react";
import "./App.css";
import { Container } from "./style";
import { data } from "../mock";
import { ReadOnlyRow } from "../components/ReadOnlyRow";
import { EditableRow } from "../components/EditableRow";

export const App = () => {
  const [editContactId, setEditContactId] = useState(null);
  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    name: "",
    address: "",
    phone: "",
    email: "",
  });
  const [editFormData, setEditFormData] = useState({
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
  const handleEditFormChange = (e) => {
    e.preventDefault();
    const fieldName = e.target.getAttribute("name");
    const fieldValue = e.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;
    setEditFormData(newFormData);
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
  const handleEditClick = (e, contact) => {
    e.preventDefault();
    setEditContactId(contact.id);

    const formValues = {
      name: contact.name,
      address: contact.address,
      phone: contact.phone,
      email: contact.email,
    };
    setEditFormData(formValues);
  };
  const handleEditFormSubmit = (e) => {
    e.preventDefault();

    const editedContact = {
      id: editContactId,
      name: editFormData.name,
      address: editFormData.address,
      phone: editFormData.phone,
      email: editFormData.email,
    };
    const newContacts = [...contacts];

    const index = contacts.findIndex((value) => value.id === editContactId);

    newContacts[index] = editedContact;

    setContacts(newContacts);
    setEditContactId(null);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };
  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts];
    const index = contacts.findIndex((value) => value.id === contactId);
    newContacts.splice(index, 1);
    setContacts(newContacts);
  };
  return (
    <Container>
      <form onSubmit={handleEditFormSubmit}>
        <table border="1">
          <thead>
            <tr>
              <th>Name</th>
              <th>Address</th>
              <th>Phone number</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((value) => {
              return (
                <Fragment>
                  {editContactId === value.id ? (
                    <EditableRow
                      editFormData={editFormData}
                      handleEditFormChange={handleEditFormChange}
                      handleCancelClick={handleCancelClick}
                    />
                  ) : (
                    <ReadOnlyRow
                      value={value}
                      handleEditClick={handleEditClick}
                      handleDeleteClick={handleDeleteClick}
                    />
                  )}
                </Fragment>
              );
            })}
          </tbody>
        </table>
      </form>
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
