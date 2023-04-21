import PropTypes from 'prop-types';
import css from '../transactions/transactions.module.css';
import { TransactionItem } from '../transactions/transactionItem';

export const TransactionHistory = ({ transactions }) => {
  return (
    <table className={css.table}>
      <thead>
        <tr className={css.tr}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody className="css.tbody">
        {transactions.map(item => {
          return (
            <TransactionItem
              key={item.id}
              type={item.type}
              amount={item.amount}
              currency={item.currency}
            />
          );
        })}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
