// Fetch All The Coins With Some Pagination. Lets say lets get 10 Reconds
// Process 1

import { useState, useEffect, Children } from 'react';
import { Button } from '../utilties/button';
// Import loading State / Error State

export function CoinsList({ coins, isLoading, error }) {
  function onSelectCoin() {}
  function onDeleteCoin() {}
  function Loader() {
    return (
      <tr>
        <td colSpan="5" style={{ textAlign: 'center' }}>
          🔄 Loading...
        </td>
      </tr>
    );
  }

  function ErrorMessage({ message }) {
    return (
      <tr>
        <td colSpan="5" style={{ textAlign: 'center', color: 'red' }}>
          ❌ {message}
        </td>
      </tr>
    );
  }
  return (
    <>
      {/* Loading Flow */}
      {isLoading && <Loader />}
      {/* Is Error Happening */}
      {error && <ErrorMessage message={error} />}
      {/* Loading is False Error IS False */}
      {!isLoading &&
        !error &&
        coins.map((coin) => (
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
    </>
  );
}

// Coin Component?
