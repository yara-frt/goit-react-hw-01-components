import PropTypes from 'prop-types';
import FriendListItem from './friendListItem';
import { ListFriends } from './friendList.styled';

export default function FriendList({ friends }) {
    return (
        <ListFriends>
            {friends.map(item => (
                <FriendListItem
                    key={item.id}
                    avatar={item.avatar}
                    name={item.name}
                    isOnline={item.isOnline}
                />
            ))}
        </ListFriends>
    );
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
    }).isRequired
  ),
} 
