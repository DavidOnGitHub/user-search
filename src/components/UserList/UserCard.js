import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import UserIcon from 'react-icons/lib/fa/user';
import MenuIcon from 'react-icons/lib/fa/ellipsis-v';

const UserCard = ({ user }) => (
  <div className="user-card-container">
    <div className="avatar-container">
      <UserIcon className="avatar" />
    </div>
    <div className="details-and-menu">
      <div className="details">
        <div className="basic-info">
          <div className="name">{`${user.firstName} ${user.lastName}`}</div>
          <div className={classnames('email', 'not-high-lighted')}>
            {user.email}
          </div>
        </div>
        <div className="register-date not-high-lighted">
          {moment(user.registerDate, 'DD/MM/YYYY').format('MMM D, YYYY')}
        </div>
        <div className="last-login-date not-high-lighted">
          <span className="login-date-label">Last login: </span>
          <span className="login-date-value">
            {moment(user.lastLoginDate, 'DD/MM/YYYY').fromNow()}
          </span>
        </div>
      </div>
      <MenuIcon className="menu" />
    </div>
  </div>
);

UserCard.propTypes = {
  user: PropTypes.object.isRequired
};

export default UserCard;
