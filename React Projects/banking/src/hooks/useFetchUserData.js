/**
 * useLocalUserData - Retrieves user data from localStorage
 * @param {string|null} field - Optional field to return (e.g., 'accounts', 'transactions')
 * @returns {any} User data or specific field, or null if not found
 */
function useLocalUserData() {
  try {
    const stored = localStorage.getItem('User');
    if (!stored) return null;
    const parsed = JSON.parse(stored);
    return parsed;
  } catch (err) {
    console.error('Invalid User data in localStorage', err);
    return null;
  }
}

export default useLocalUserData;
