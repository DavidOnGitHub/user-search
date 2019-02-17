import React from 'react';
import { connect } from 'react-redux';
import SearchBar from '../../components/SearchBar';
import UserList from '../../components/UserList';

const Main = () => (
  <div className="main-container">
    <header>User Search</header>
    <div className="content">
      <div className="search-bar">
        <SearchBar />
      </div>
      <div className="user-list">
        <UserList />
      </div>
    </div>
  </div>
);

export default connect()(Main);
