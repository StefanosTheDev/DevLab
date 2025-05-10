import { useState, useEffect } from 'react';
import { CoinsList } from './CoinsList';
export function CoinDashboard() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    // Setup
    const loadCoins = async () => {
      try {
        // Part 1: Establish Loading / Error States
        setIsLoading(true); // Set Loading
        setError(''); // Reset Error

        // Part 2: Make the API Fetch
        const res = await fetch('http://localhost:5000/cryptos');
        if (!res.ok) throw new Error('Whoa Error Found');
        const data = await res.json();
        setCoins(data.slice(0, 10));

        // Part 3: Catch Errors
      } catch (err) {
        console.log('Failed To Fetch coins', err);
        setError(err.message);
      } finally {
        // Part 4: Always Run Whether API Call Succeeded Or failed
        setIsLoading(false); // Loading is set to false because the process has been done. And if an error exist it will be shown.
      }
    };
    loadCoins();

    // Dependency Array
  }, []); // only run once on mount because // Review later in notes.
  return (
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
          coins={coins}
          isLoading={isLoading}
          error={error}
        ></CoinsList>
      </tbody>
    </table>
  );
}
