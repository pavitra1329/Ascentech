import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [bookings, setBookings] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    startDate: "",
    endDate: "",
    rent: "",
    additionalCharges: "",
    hall: "",
    applicationNumber: "",
    remark: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [hallTypes, setHallTypes] = useState([]);

  useEffect(() => {
    fetchBookings();
    fetchHallTypes();
  }, []);

  const fetchBookings = async () => {
    try {
      const response = await axios.get("http://localhost:8081/bookings");
      setBookings(response.data);
    } catch (error) {
      console.error("Error fetching bookings:", error);
    }
  };

  const fetchHallTypes = async () => {
    try {
      const response = await axios.get("http://localhost:8081/hallTypes");
      setHallTypes(response.data);
    } catch (error) {
      console.error("Error fetching hall types:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isEditing) {
        await axios.put(`http://localhost:8081/update/${editingId}`, formData);
        setIsEditing(false);
        setEditingId(null);
      } else {
        await axios.post("http://localhost:8081/book", formData);
      }
      setFormData({
        name: "",
        email: "",
        mobile: "",
        startDate: "",
        endDate: "",
        rent: "",
        additionalCharges: "",
        hall: "",
        applicationNumber: "",
        remark: "",
      });
      fetchBookings();
    } catch (error) {
      console.error("Error saving booking:", error);
    }
  };

  const handleEdit = (booking) => {
    setFormData(booking);
    setIsEditing(true);
    setEditingId(booking.id);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8081/delete/${id}`);
      fetchBookings();
    } catch (error) {
      console.error("Error deleting booking:", error);
    }
  };

  return (
    <div className="container">
      <h1>Hall Booking System</h1>

      <button
        className="add-booking-button"
        onClick={() => setIsEditing(false)}
      >
        Add New Booking
      </button>

      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <label>
            Name <span className="required">*</span>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </label>

          <label>
            Email <span className="required">*</span>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </label>

          <label>
            Mobile <span className="required">*</span>
            <input
              type="text"
              name="mobile"
              value={formData.mobile}
              onChange={handleInputChange}
              required
            />
          </label>

          <label>
            Start Date <span className="required">*</span>
            <input
              type="date"
              name="startDate"
              value={formData.startDate}
              onChange={handleInputChange}
              required
            />
          </label>

          <label>
            End Date <span className="required">*</span>
            <input
              type="date"
              name="endDate"
              value={formData.endDate}
              onChange={handleInputChange}
              required
            />
          </label>

          <label>
            Rent <span className="required">*</span>
            <input
              type="number"
              name="rent"
              value={formData.rent}
              onChange={handleInputChange}
              required
              min="1"
            />
          </label>

          <label>
            Additional Charges <span className="required">*</span>
            <input
              type="number"
              name="additionalCharges"
              value={formData.additionalCharges}
              onChange={handleInputChange}
              required
              min="0"
            />
          </label>

          <label>
            Hall Type <span className="required">*</span>
            <select
              name="hall"
              value={formData.hall}
              onChange={handleInputChange}
              required
            >
              <option value="" disabled>
                Select a Hall Type
              </option>
              {hallTypes.map((type, index) => (
                <option key={index} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </label>

          <label>
            Application Number <span className="required">*</span>
            <input
              type="text"
              name="applicationNumber"
              value={formData.applicationNumber}
              onChange={handleInputChange}
              required
            />
          </label>

          <label>
            Remark <span className="required">*</span>
            <input
              type="text"
              name="remark"
              value={formData.remark}
              onChange={handleInputChange}
              required
            />
          </label>

          <button type="submit" className="submit-button">
            {isEditing ? "Update Booking" : "Add Booking"}
          </button>
        </form>
      </div>

      <h2>All Bookings</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Rent</th>
            <th>Additional Charges</th>
            <th>Hall</th>
            <th>Application Number</th>
            <th>Remark</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <tr key={booking.id}>
              <td>{booking.name}</td>
              <td>{booking.email}</td>
              <td>{booking.mobile}</td>
              <td>{booking.startDate}</td>
              <td>{booking.endDate}</td>
              <td>{booking.rent}</td>
              <td>{booking.additionalCharges}</td>
              <td>{booking.hall}</td>
              <td>{booking.applicationNumber}</td>
              <td>{booking.remark}</td>
              <td>
                <button
                  className="edit-button"
                  onClick={() => handleEdit(booking)}
                >
                  Update
                </button>
                <button
                  className="delete-button"
                  onClick={() => handleDelete(booking.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
