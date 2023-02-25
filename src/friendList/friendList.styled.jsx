import styled from '@emotion/styled'

export const ListFriends = styled.ul`
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
`;

export const ListItem = styled.li`
    padding: 10px;
    display: flex;
    gap: 10px;
    align-items: center;
    background-color: white;
    width: 300px;
    border-radius: 5px;
    box-shadow: 5px 5px 5px rgb(107, 107, 107);
`;

export const NameFriend = styled.p`
    font-size: 28px;
`;

export const Marker = styled.span`
    display: block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => {
    if (props.type === 'true') {
        return 'green';
    } else {
        return 'red';
    }
    }};;
`;



