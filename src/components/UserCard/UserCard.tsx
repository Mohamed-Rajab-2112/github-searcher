import * as React from 'react';
import './userCard.scss';
import { UserDataType } from '../../redux/actions/set_search_result';

interface UserCardProps {
  cardData: UserDataType;
}

const UserCard = (props: UserCardProps) => {
  const { cardData } = props;
  return (
    <div className="card">
      <div className="header">
        <div
          className="avatar"
          style={{ backgroundImage: `url(${cardData.avatar_url})` }}
        ></div>
        <h4 className="truncate">{cardData.login}</h4>
      </div>
      <a target="blank" href={cardData.html_url}>
        Profile
      </a>
    </div>
  );
};

export default UserCard;
