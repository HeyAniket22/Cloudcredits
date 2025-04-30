const Balance = ({ transactions }) => {
    const amounts = transactions.map(tx => tx.amount);
    const total = amounts.reduce((acc, item) => acc + item, 0).toFixed(2);
    return <h3>Your Balance: ₹{total}</h3>;
  };
  export default Balance;
  