import React from 'react'
import { arrayOf, shape, func } from "prop-types";
import Table from 'react-bootstrap/Table';

const TableComponent = ({ records, handleChange }) => (
  <Table striped bordered hover>
    <thead>
    <tr>
      <th>#</th>
      <th>Name</th>
      <th>Address</th>
      <th>City</th>
      <th>Region</th>
      <th>Country</th>
      <th>Birthday</th>
    </tr>
    <tr>
      <th></th>
      <th><input name="name" onChange={handleChange} /></th>
      <th><input name="address" onChange={handleChange} /></th>
      <th><input name="city" onChange={handleChange} /></th>
      <th><input name="region" onChange={handleChange} /></th>
      <th><input name="country" onChange={handleChange} /></th>
      <th><input name="birthday" onChange={handleChange} /></th>
    </tr>
    </thead>
    <tbody>
    {records && records.map(({ name, address, city, region, country, birthday }, index) => (
      <tr key={index}>
        <td>{index + 1}</td>
        <td>{name}</td>
        <td>{address}</td>
        <td>{city}</td>
        <td>{region}</td>
        <td>{country}</td>
        <td>{birthday}</td>
      </tr>
    ))}
    </tbody>
  </Table>
);

TableComponent.propTypes = {
  records: arrayOf(shape({})),
  handleChange: func.isRequired,
};

TableComponent.defaultProps = {
  records: [],
};

export default TableComponent;
