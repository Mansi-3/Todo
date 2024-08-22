import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';

const UserDetailsForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    address: '',
    phoneNo: '',
    email: '',
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    const phonePattern = /^[0-9]{10}$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!phonePattern.test(formData.phoneNo)) {
      newErrors.phoneNo = 'Phone number must be 10 digits.';
    }

    if (!emailPattern.test(formData.email)) {
      newErrors.email = 'Invalid email format. It should be like abc@gmail.com';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setSuccessMessage('Form submitted successfully!');
      // Here you would normally handle form submission, e.g., send the data to a server.
      setFormData({
        name: '',
        dob: '',
        address: '',
        phoneNo: '',
        email: '',
      }); // Reset form data after successful submission
    }
  };

  return (
    <Container>
      <h2>User Details Form</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Date of Birth</Form.Label>
          <Form.Control
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="text"
            name="phoneNo"
            value={formData.phoneNo}
            onChange={handleChange}
            required
            pattern="[0-9]{10}"
            title="Phone number must be 10 digits."
          />
          {errors.phoneNo && <Form.Text className="text-danger">{errors.phoneNo}</Form.Text>}
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
            title="Invalid email format. It should be like abc@gmail.com"
          />
          {errors.email && <Form.Text className="text-danger">{errors.email}</Form.Text>}
        </Form.Group>
        <Button variant="primary" type="submit">Submit</Button>
      </Form>
      {successMessage && <Alert variant="success" className="mt-3">{successMessage}</Alert>}
    </Container>
  );
};

export default UserDetailsForm;
