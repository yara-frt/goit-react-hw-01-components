import PropTypes from 'prop-types';
import { Container, Photo, BoxPhoto, BoxStats, LabelStats, QuantityStats, NameUser, Tag, Location } from './user.styled';

export default function Profile({ username, tag, location, avatar, stats }) {
    return (
        <Container >
            <BoxPhoto >
                <Photo
                    src={avatar}
                    alt="User avatar"
                />
                <NameUser>{username}</NameUser>
                <Tag>{tag}</Tag>
                <Location>{location}</Location>
            </BoxPhoto>

            <BoxStats>
                <li>
                    <LabelStats>Followers</LabelStats>
                    <QuantityStats>{stats.followers}</QuantityStats>
                </li>
                <li>
                    <LabelStats>Views</LabelStats>
                    <QuantityStats>{stats.views}</QuantityStats>
                </li>
                <li>
                    <LabelStats>Likes</LabelStats>
                    <QuantityStats>{stats.likes}</QuantityStats>
                </li>
            </BoxStats>
        </Container>
    );
};

    Profile.propTypes = {
        username: PropTypes.string.isRequired,
        tag: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
        stats: PropTypes.objectOf(PropTypes.number).isRequired,
    }