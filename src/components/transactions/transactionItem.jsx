import PropTypes from 'prop-types';
import css from './transactionsItem.module.css';

export const TransactionItem = ({ type, amount, currency }) => {
  return (
    <tr>
      <td className={css.type}>{type}</td>
      <td>{amount}</td>
      <td className={css.currency}>{currency}</td>
    </tr>
  );
};

TransactionItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
