import React from "react";

export const ReadOnlyRow = ({ value, handleEditClick, handleDeleteClick }) => {
  return (
    <tr key={value.id}>
      <td>{value.name}</td>
      <td>{value.address}</td>
      <td>{value.phone}</td>
      <td>{value.email}</td>
      <td>
        <button type="button" onClick={(e) => handleEditClick(e, value)}>
          Edit
        </button>
        <button type="button" onClick={() => handleDeleteClick(value.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};
