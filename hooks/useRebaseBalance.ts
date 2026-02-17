import { useEffect, useState } from "react";

/**
 * Rebase-aware balance hook
 * - original balance never changes
 * - current balance rebases over time
 */
export function useRebaseBalance() {
  const ORIGINAL_BALANCE = 1000;

  const [currentBalance, setCurrentBalance] = useState(ORIGINAL_BALANCE);

  useEffect(() => {
    // mock
    const interval = setInterval(() => {
      setCurrentBalance((prev) => prev * 1.0015);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return {
    originalBalance: ORIGINAL_BALANCE,
    currentBalance,
  };
}
