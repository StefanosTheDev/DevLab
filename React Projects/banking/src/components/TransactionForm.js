function TransactionForm({ inputType }) {
  return (
    <form className="transaction-form" onSubmit={() => {}}>
      <h1>{inputType}</h1>
      <input type="number" placeholder="0" required></input>
      <button type="submit">OK</button>
    </form>
  );
}
export default TransactionForm;
