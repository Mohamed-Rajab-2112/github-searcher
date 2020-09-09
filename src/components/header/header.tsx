import React, { useState, useEffect, useCallback } from 'react';
import './header.scss';
import { connect } from 'react-redux';
import { search } from './../../redux/actions/search';
import { RootReducerType } from '../../redux/reducers/root_reducer';
import logo from './../../assets/images/github-logo.png';

interface HeaderProps {
  search: (searchText: string, entityType: string) => Promise<void>;
  searchTerms: { searchText: string; entityType: string };
}

const Header = (props: HeaderProps) => {
  const { search, searchTerms } = props;
  const [searchText, setSearchText] = useState(searchTerms.searchText);
  const [entityType, setEntityType] = useState(searchTerms.entityType);

  useEffect(() => {
    search(searchText, entityType);
  }, [entityType, search, searchText]);

  const handleSearchTextChange = useCallback(
    (event) => {
      setSearchText(event.target.value);
    },
    [setSearchText]
  );

  const handleEntityTypeChange = useCallback(
    (event) => {
      setEntityType(event.target.value);
    },
    [setEntityType]
  );

  return (
    <div className="search-section">
      <div className="header">
        <img className="logo" src={logo} alt="github logo" />
        <div>
          <h1>Github Searcher</h1>
          <p>Search Users or repositories below</p>
        </div>
      </div>
      <div className="search-terms">
        <input
          type="text"
          placeholder="Start typing to search"
          value={searchText}
          onChange={handleSearchTextChange}
        />
        <select value={entityType} onChange={handleEntityTypeChange}>
          <option value="users">Users</option>
          <option value="repos">Repositories</option>
        </select>
      </div>
    </div>
  );
};

const mapStateToProps = (state: RootReducerType) => ({
  ...state.searchReducer,
});

export default connect(mapStateToProps, { search })(Header);
