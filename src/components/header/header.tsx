import React, { useState, useEffect, useCallback } from 'react';
import './header.scss';
import { connect } from 'react-redux';
import { search } from '../../redux/actions/search';
import { RootReducerType } from '../../redux/reducers/root_reducer';
import logo from './../../assets/images/github-logo.png';
import { ENTITY_TYPES, MINIMUIM_SEARCH_CHARS_COUNT } from '../../constants';
import Loader from 'react-loader-spinner';

interface HeaderProps {
  search: (searchText: string, entityType: string) => Promise<void>;
  searchTerms: { searchText: string; entityType: string };
  searchResult: any;
}

const Header = (props: HeaderProps) => {
  const { search, searchTerms, searchResult } = props;
  const [searchText, setSearchText] = useState(searchTerms.searchText);
  const [entityType, setEntityType] = useState(searchTerms.entityType);
  const [isLoading, setIsLoading] = useState(false);
  const [searchResultUI, setSearchResultUI] = useState(searchResult);

  useEffect(() => {
    setSearchResultUI(searchResult);
  }, [searchResult]);

  useEffect(() => {
    if (
      searchTerms.searchText !== searchText ||
      searchTerms.entityType !== entityType
    ) {
      setIsLoading(true);
      search(searchText, entityType)
        .then(() => setIsLoading(false))
        .catch(() => setIsLoading(false));
    }
  }, [entityType, search, searchTerms.entityType, searchTerms.searchText, searchText]);

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
    <div
      className={
        searchResultUI.length &&
        searchText.length >= MINIMUIM_SEARCH_CHARS_COUNT
          ? 'search-section moveUp'
          : 'search-section'
      }
    >
      <div className="header">
        <img className="logo" src={logo} alt="github logo" />
        <div>
          <h1>Github Searcher</h1>
          <p>Search Users or repositories below</p>
        </div>
        {isLoading && (
          <div className="loader-container">
            <Loader type="Puff" color="#000" height={50} width={50} />
          </div>
        )}
      </div>
      <div className="search-terms">
        <input
          type="text"
          placeholder="Start typing to search"
          value={searchText}
          onChange={handleSearchTextChange}
        />
        <select value={entityType} onChange={handleEntityTypeChange}>
          <option value={ENTITY_TYPES.users}>Users</option>
          <option value={ENTITY_TYPES.repos}>Repositories</option>
        </select>
      </div>
    </div>
  );
};

const mapStateToProps = (state: RootReducerType) => ({
  ...state.searchReducer,
});

export default connect(mapStateToProps, { search })(Header);
