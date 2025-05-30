import useLocalUserData from '../hooks/useFetchUserData';
import styles from './AccountsList.module.css';
import { useNavigate } from 'react-router';
import { useAuth } from '../context/AuthContext';
function AccountsList() {
  const { user } = useAuth();
  console.log('USER', user);

  const navigate = useNavigate();

  if (!user || user.length === 0) return <p>No accounts found.</p>;

  function handleAccessAccount(account) {
    navigate(`/account/${account.type}`);
  }
  return (
    <div className={styles.container}>
      <h2>Your Accounts</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Type</th>
            <th>Account #</th>
            <th>Balance</th>
            <th>Currency</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {user.accounts.map((item) => (
            <tr key={item.type}>
              <td>{item.type.toUpperCase()}</td>
              <td>{item.accountNumber}</td>
              <td>${item.balance.toLocaleString()}</td>
              <td>{item.currency}</td>
              <td>
                <button
                  className={styles.button}
                  onClick={() => handleAccessAccount(item)}
                >
                  Access Account
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AccountsList;
