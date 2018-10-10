import React, { Component } from 'react';
import axios from 'axios'
import { connect } from 'react-redux';
import './account.css';

const mapStateToProps = state => ({
  token: state.token,
  userId: state.userId
})

class Account extends Component {
  constructor (props) {
    super(props);
    if (this.props.token === null) {
      this.props.history.push('/login');
    }
    this.setState({
      view: '',
      email: '',
      password: '',
      name: '',
      error: false
    })
    console.log(this.state)
    this.updateUser = this.updateUser.bind(this);
    this.updateEmail = this.updateEmail.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
    this.updateName = this.updateName.bind(this);
  }
  updateUser (evt) {
    evt.preventDefault()
    axios.put('http://localhost:81/users/' + this.state.userId, {headers: { 'Authorization': 'JWT ' + this.state.token }}, {
      email: this.state.email,
      password: this.state.password,
      name: this.state.name
    })
      .then(response => {
        this.setState({
          email: response.data.email,
          password: '',
          name: response.data.name
        })
      })
      .catch(err => {
        console.log(err)
        this.setState({
          error: true
        });
      })
  }
  updateEmail (event) {
    this.setState({
      email: event.target.value
    });
  }
  updatePassword (event) {
    this.setState({
      password: event.target.value
    });
  }
  updateName (event) {
    this.setState({
      name: event.target.value
    });
  }
  render () {

  }
}

export default connect(mapStateToProps)(Account);
