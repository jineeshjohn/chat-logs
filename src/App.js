import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getChatLogsData } from './selectors'


import { bindActionCreators } from 'redux';

import { getMessagesDetails, getMembersDetails } from './service';

import './App.css';

class App extends Component {
  static propTypes = {
    messages: PropTypes.array,
    members: PropTypes.array
  }
  static defaultProps = {
    messages: [],
    members: []
  }
  componentDidMount() {
    this.props.dataLoader();
  }

  render() {
    return (
      <div>
        <h1>Hello!</h1>
        <ul className="list">
          {this.props.chatlog.map((msg) => (
            <li key={msg.id}>
              <img src={msg.member.avatar} />
              <span>{msg.message}</span>
              <a href="#">{msg.member.email}</a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    chatlog: getChatLogsData(state),
  };
};

const mapDispatchToProps = dispatch => ({
  dataLoader: () => {
    dispatch(getMessagesDetails()).then(() => {
      dispatch(getMembersDetails());
    });
  }
});



export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
