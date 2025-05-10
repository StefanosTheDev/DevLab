export function SearchCoin({ query, setQuery }) {
  return (
    <input
      type="text"
      placeholder="Search..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      style={{ padding: '8px', fontSize: '16px', marginBottom: '1rem' }}
    />
  );
}
export default SearchCoin;
