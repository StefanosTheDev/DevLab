import styles from './Dashboard.module.css';
import AccountsList from '../components/AccountsList';
import TransactionList from '../components/TransactionList';
import { useNavigate } from 'react-router-dom';
import useLocalUserData from '../hooks/useFetchUserData';

function DashboardPage() {
  const navigate = useNavigate();

  const user = useLocalUserData();

  if (!user) {
    navigate('/');
    return null;
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Welcome, {user.name}</h1>
      </header>

      <section className={styles.sections}>
        <div className={styles.accounts}>
          <AccountsList />
        </div>
      </section>
    </div>
  );
}

export default DashboardPage;
