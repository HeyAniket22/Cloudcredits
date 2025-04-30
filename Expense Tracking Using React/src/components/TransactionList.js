const TransactionList = ({ transactions, onDelete }) => (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map(tx => (
          <li key={tx.id} className={tx.amount < 0 ? 'minus' : 'plus'}>
            {tx.text} <span>₹{tx.amount}</span>
            <button onClick={() => onDelete(tx.id)} className="delete-btn">x</button>
          </li>
        ))}
      </ul>
    </>
  );
  export default TransactionList;
  