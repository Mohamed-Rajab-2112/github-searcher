import * as React from 'react';
import './repoCard.scss';
import { RepoDataType } from '../../redux/actions/set_search_result';

interface RepoCardProps {
  cardData: RepoDataType;
}

const RepoCard = (props: RepoCardProps) => {
  const { cardData } = props;
  return (
    <div className="card">
      <h2 className="truncate">{cardData.name}</h2>
      {/* <h5 className="truncate">{cardData.owner.login}</h5> */}
      <p>{cardData.stargazers_count} star</p>
      <a href={cardData.html_url}>Details</a>
    </div>
  );
};

export default RepoCard;
