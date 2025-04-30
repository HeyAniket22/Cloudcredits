const IncomeExpenses = ({ transactions }) => {
    const amounts = transactions.map(tx => tx.amount);
    const income = amounts.filter(i => i > 0).reduce((a, b) => a + b, 0).toFixed(2);
    const expense = (amounts.filter(i => i < 0).reduce((a, b) => a + b, 0) * -1).toFixed(2);
  
    return (
      <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p className="money plus">₹{income}</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p className="money minus">₹{expense}</p>
        </div>
      </div>
    );
  };
  export default IncomeExpenses;
  