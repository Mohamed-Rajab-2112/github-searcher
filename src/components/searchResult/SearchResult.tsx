import React from 'react';
import { connect } from 'react-redux';
import { RootReducerType } from '../../redux/reducers/root_reducer';
import { searchTermsType } from '../../redux/actions/update_search_terms';
import { ENTITY_TYPES } from '../../constants';
import UserCard from '../UserCard/UserCard';
import RepoCard from '../RepoCard/RepoCard';
import './searchResult.scss';

interface SearchResultProps {
  searchResult: any;
  searchTerms: searchTermsType;
}

const SearchResult = (props: SearchResultProps) => {
  const { searchResult, searchTerms } = props;

  const renderResultCards = () => {
    const Card =
      searchTerms.entityType === ENTITY_TYPES.users ? UserCard : RepoCard;
    return searchResult.map((result: any) => (
      <Card key={result.id} cardData={result} />
    ));
  };

  return <div className="results-container">{renderResultCards()}</div>;
};

const mapStateToProps = (state: RootReducerType) => ({
  ...state.searchReducer,
});

export default connect(mapStateToProps)(SearchResult);
