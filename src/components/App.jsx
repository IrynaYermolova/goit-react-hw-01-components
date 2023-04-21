
import { Profile } from './user/user';
import user from '../utils/user.json';
import data from '../utils/data.json';
import friends from '../utils/friends.json';
import { Statistics } from './Statistics/statistics';
import { FriendList } from 'friends/friendsList';
import transactions from '../utils/transactions.json';
import { TransactionHistory } from './transactions/transaction';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title="Upload stats" stats={data} />
      {/* <Statistics stats = {data} /> */}

      <FriendList friends={friends} />
      {/* <TransactionHistory items={transactions} /> */}
      <TransactionHistory transactions={transactions} />
    </div>
  );
};
