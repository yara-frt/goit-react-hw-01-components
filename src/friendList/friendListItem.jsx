import PropTypes from 'prop-types';
import { ListItem, NameFriend, Marker } from './friendList.styled';

export default function FriendListItem({avatar, name, isOnline}) {
    return (
    <ListItem>
        <Marker type={isOnline.toString()}></Marker>
        <img src={avatar} alt="User avatar" width="100" />
        <NameFriend>{name}</NameFriend>
    </ListItem>
    )
}

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}