import styles from './TransactionList.module.css';
function TransactionList({ transactions, accountType }) {
  return (
    <div className={styles.container}>
      <h2>Account Type: {accountType}</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Date</th>
            <th>Type</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((item) => (
            <tr key={item.type}>
              <td>{item.id}</td>
              <td>{item.date}</td>
              <td>{item.type}</td>
              <td>{item.amount}</td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default TransactionList;
