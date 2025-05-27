import { useLocation, useNavigate } from 'react-router-dom';
import useLocalUserData from '../hooks/useFetchUserData';

function AccountDetailPage() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const user = useLocalUserData();

  return <p>div</p>;
}
export default AccountDetailPage;
