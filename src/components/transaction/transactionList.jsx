import PropTypes from 'prop-types';
import TransactionItem from './transactionItem';
import { BoxTable, BoxTitle } from './transaction.styled';

export default function TransactionList({ items }) {
    return (
        <BoxTable>
            <thead>
                <tr>
                    <BoxTitle>Type</BoxTitle>
                    <BoxTitle>Amount</BoxTitle>
                    <BoxTitle>Currency</BoxTitle>
                </tr>
            </thead>
            <tbody>
            {items.map(item => (
                <TransactionItem
                    key={item.id}
                    type={item.type}
                    amount={item.amount}
                    currency={item.currency}
                />
            ))}
            </tbody>
        </BoxTable>
    );
};

TransactionList.propTypes = {
    items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
    }).isRequired
  ),
}
