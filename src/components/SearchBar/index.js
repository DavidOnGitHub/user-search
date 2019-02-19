import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import debounce from 'lodash.debounce';
import Input from '../Input';
import SearchIcon from 'react-icons/lib/fa/search';
import { searchUser } from '../../utils/dataService';
import { setUsers } from '../../actions/search';

export class SearchBar extends React.Component {
  state = { keyword: '' };

  doSearch = keyword => {
    const resultUsers = searchUser(keyword);
    this.props.dispatch(setUsers(resultUsers));
  };

  debouncedSearch = debounce(this.doSearch, 300);

  onKeywordChange = ({ target: { value: keyword } }) => {
    this.setState({ keyword });

    if (keyword.length > 2) {
      this.debouncedSearch(keyword);
    }

    if (keyword.length === 0) {
      this.props.dispatch(setUsers([]));
    }
  };

  render() {
    return (
      <div className="search-bar-container">
        <div className="search-icon">
          <SearchIcon />
        </div>
        <Input
          placeholder="type keyword to search"
          className="keyword-input"
          onChange={this.onKeywordChange}
          value={this.state.keyword}
        />
      </div>
    );
  }
}

SearchBar.propTypes = {
  dispatch: PropTypes.func
};

export default connect()(SearchBar);
