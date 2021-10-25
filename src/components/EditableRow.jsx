import React from "react";

export const EditableRow = ({ editFormData, handleEditFormChange,handleCancelClick }) => {
  return (
    <tr>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter a name..."
          name="name"
          onChange={handleEditFormChange}
          value={editFormData.name}
        />
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter an address..."
          name="address"
          onChange={handleEditFormChange}
          value={editFormData.address}
        />
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter a phone..."
          name="phone"
          onChange={handleEditFormChange}
          value={editFormData.phone}
        />
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter a email..."
          name="email"
          onChange={handleEditFormChange}
          value={editFormData.email}
        />
      </td>
      <td>
        <button type="submit">Save</button>
        <button type="button" onClick={handleCancelClick}>Cancel</button>
      </td>
    </tr>
  );
};