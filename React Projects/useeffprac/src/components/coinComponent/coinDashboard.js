import { useState, useEffect } from 'react';
import { CoinsList } from './CoinsList';
import { SearchCoin } from './searchCoin';

export function CoinDashboard() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [coins, setCoins] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const loadCoins = async () => {
      try {
        setIsLoading(true);
        setError('');
        const res = await fetch('http://localhost:5000/cryptos');
        if (!res.ok) throw new Error('Whoa Error Found');
        const data = await res.json();
        setCoins(data.slice(0, 10));
      } catch (err) {
        console.error('Failed To Fetch coins', err);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    loadCoins();
  }, []);

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="dashboard">
      <h2>Coin Dashboard</h2>
      <SearchCoin query={query} setQuery={setQuery} />
      <table className="table table-striped table-bordered table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>Symbol</th>
            <th>Name</th>
            <th>Actions</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          <CoinsList
            coins={filteredCoins}
            isLoading={isLoading}
            error={error}
          />
        </tbody>
      </table>
    </div>
  );
}
