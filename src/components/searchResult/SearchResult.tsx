import React from 'react';
import { connect } from 'react-redux';
import { RootReducerType } from '../../redux/reducers/root_reducer';
import { searchTermsType } from '../../redux/actions/update_search_terms';
import { ENTITY_TYPES } from '../../constants';
import UserCard from '../UserCard/UserCard';
import RepoCard from '../RepoCard/RepoCard';
import './searchResult.scss';
import {
  SearchResultType,
  RepoDataType,
  UserDataType,
} from '../../redux/actions/set_search_result';

interface SearchResultProps {
  searchResult: SearchResultType;
  searchTerms: searchTermsType;
}

const SearchResult = (props: SearchResultProps) => {
  const { searchResult, searchTerms } = props;

  const renderResultCards = () => {
    if (searchTerms.entityType === ENTITY_TYPES.users) {
      return (searchResult as UserDataType[]).map((result: UserDataType) => (
        <UserCard key={result.id} cardData={result} />
      ));
    } else {
      return (searchResult as RepoDataType[]).map((result: RepoDataType) => (
        <RepoCard key={result.id} cardData={result} />
      ));
    }
  };

  return <div className="results-container">{renderResultCards()}</div>;
};

const mapStateToProps = (state: RootReducerType) => ({
  ...state.searchReducer,
});

export default connect(mapStateToProps)(SearchResult);
