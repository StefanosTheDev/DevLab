import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [coins, setCoins] = useState([]); // all coin state
  const [selectedCoin, setSelectedCoin] = useState(null); // getting individual coin

  // Util Functions
  function onSelectCoin(coin) {
    setSelectedCoin(coin);
    console.log(coin);
  }
  function onDeleteCoin(coin) {
    //
  }
  function onAddCoin({ id, symbol, name }) {
    return;
  }
  return (
    <div className="App">
      {coins.length === 0 && <h1> No Coins Exist </h1>}
      {/* <DashboardTable
        coins={coins}
        onSelectCoin={onSelectCoin}
        onDeleteCoin={onDeleteCoin}
      ></DashboardTable> */}
    </div>
  );
}

// Fetch All The Coins With Some Pagination. Lets say lets get 10 Reconds
// Process 1
function FetchCoins({ coins, setCoins }) {
  useEffect(() => {
    // Setup
    const loadCoins = async () => {
      try {
        const res = await fetch('http://localhost:5000/cryptos');
        if (!res.ok) throw new Error('Whoa Error Found');
        const data = await res.json();
        // Get the first 10 items.
        setCoins(data.slice(0, 10));
      } catch (err) {
        console.log('Failed To Fetch coins', err);
      }
    };
    loadCoins();

    // Clean Up Part

    // Dependencies
  }, []); // only run once on mount because

  return (
    <ul>
      {coins.map((c) => (
        <li key={c.id}>{c.name}</li>
      ))}
    </ul>
  );
}

// Fetch Selected Coins Price
function FetchSelectedCoinPrice() {}

// Poll Live Price
function FetchLivePrice() {}

function DashboardTable({ coins, onSelectCoin, onDeleteCoin, onAddCoin }) {
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
        {coins.map((coin) => (
          <tr key={coin.id}>
            <td>{coin.id}</td>
            <td>{coin.symbol}</td>
            <td>{coin.name}</td>
            <td>
              <Button onClick={() => onSelectCoin(coin)} label="View Coin" />
              <Button onClick={() => onDeleteCoin(coin)} label="Delete Coin" />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function Button({ onClick, label }) {
  return <button onClick={onClick}>{label}</button>;
}

function SearchCoin() {}
export default App;
