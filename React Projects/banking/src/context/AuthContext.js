import { createContext, useState, useEffect, useContext } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem('User');
    if (stored) {
      const parsedUser = JSON.parse(stored);
      setUser(parsedUser);
    }
  }, []);

  function login(user) {
    localStorage.setItem('User', JSON.stringify(user));
    setUser(user);
    console.log('USER FROM LOGIN', user);
  }

  function logout() {
    localStorage.removeItem('User');
    setUser(null);
  }

  function fetchAccountInfo() {
    return user ?? null;
  }
  function updateAccountTransaction(accountType, transaction) {
    setUser((prevUser) => {
      const updatedAccounts = prevUser.accounts.map((acc) => {
        if (acc.type === accountType) {
          return {
            ...acc,
            transactions: [transaction, ...acc.transactions],
            balance:
              transaction.type === 'deposit'
                ? acc.balance + transaction.amount
                : acc.balance - transaction.amount,
          };
        }
        return acc;
      });

      const updatedUser = { ...prevUser, accounts: updatedAccounts };
      localStorage.setItem('User', JSON.stringify(updatedUser));
      return updatedUser;
    });
  }
  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        updateAccountTransaction,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within an AuthProvider');
  return context;
}
