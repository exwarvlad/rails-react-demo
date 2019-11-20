import React, { Component } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import TableComponent from './TableComponent';

const initialState = {
  records: [],
};

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = initialState;
    this.handleChange = this.handleChange.bind(this);
    this.fetchTestData = this.fetchTestData.bind(this)
  }

  fetchTestData() {
    const params = { ...this.state };
    delete params.records;

    axios.get('/api/v1/search_by_json', { params })
      .then(({data}) => this.setState({records: data}))
      .catch((error) => {
        console.log("Error while fetching test datas", error);
      })
  }

  handleChange({target: {value, name}}) {
    this.setState({
      [name]: value,
    }, this.fetchTestData);
  }

  render() {
    const { records } = this.state;
    return <TableComponent records={records} handleChange={this.handleChange}/>;
  }
};
