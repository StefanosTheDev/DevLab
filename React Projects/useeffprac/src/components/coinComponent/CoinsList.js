// Fetch All The Coins With Some Pagination. Lets say lets get 10 Reconds
// Process 1

import { useState, useEffect, Children } from 'react';
import { Button } from '../utilties/button';
// Import loading State / Error State

export function CoinsList({ coins, isLoading, error }) {
  function onSelectCoin() {}
  function onDeleteCoin() {}
  return (
    // Review why this worked had to use fragment vs Div
    <>
      {/* Loading Flow */}
      {isLoading && <p> We are currently Loading </p>}
      {/* Is Error Happening */}
      {error && <p> {error.message} </p>}
      {/* Render Data */} {/* Leave a note to review this conditional */}
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
