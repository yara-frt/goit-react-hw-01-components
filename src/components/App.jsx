import Profile from 'user/user';
import user from '../user.json';
import StatisticsList from './statistics/stattisticsList';
import data from '../data.json';
import FriendList from 'friendList/friendList';
import friends from '../friends.json';
import TransactionList from 'transaction/transactionList';
import transactions from '../transactions.json';



export const App = () => {
  return (
    <div
      style={{
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <StatisticsList title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionList items={transactions} />
    </div>
  );
};
