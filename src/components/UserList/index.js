import React from 'react';
import PropTypes from 'prop-types';
import UserCard from './UserCard';
import { connect } from 'react-redux';

const UserList = ({ users }) => (
  <div className="user-list-container">
    { users && users.length === 0 && <div className="no-result-text">No results found.</div>}
    { users && users.length > 0 && <ul className="user-list">
      {users.map(user => (
        <li key={user.id}>
          <UserCard user={user} />
        </li>
      ))}
    </ul> }
  </div>
);

const mapStateToProps = state => ({
  users: state.user.users
});

UserList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object)
};

export default connect(mapStateToProps)(UserList);
