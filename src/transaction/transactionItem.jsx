import PropTypes from 'prop-types';
import { BoxTransaction, BoxLine } from './transaction.styled';
 
export default function TransactionItem({ type, amount, currency }) {
    return (
        <BoxLine>
            <BoxTransaction>{type}</BoxTransaction>
            <BoxTransaction>{amount}</BoxTransaction>
            <BoxTransaction>{currency}</BoxTransaction>
        </BoxLine>
    )
}

TransactionItem.propTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
}
