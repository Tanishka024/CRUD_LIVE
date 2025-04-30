import React from 'react'
import axios from 'axios'
const Delete = () => {
  const handleDelete = async (e) => {
    e.preventDefault()
    const id = e.target.id.value;
    await axios.delete(`https://crud-live-backend-d5fm.onrender.com/users/${id}`)
    alert('Book deleted successfully')
  }
  return (
    <div>
      <h1>Delete User</h1>
      <form onSubmit={handleDelete}>
        <input type="text" placeholder="Enter Book ID" name="id" />
        <button type="submit">Delete</button>
      </form>
    </div>
  )
}

export default Delete