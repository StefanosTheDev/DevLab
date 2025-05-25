import { useState } from 'react';
import styles from './Dropdown.module.css';
import type { PropsWithChildren } from 'react';

type DropdownProps = PropsWithChildren<{
  label: string;
}>;

export function Dropdown({ label, children }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen((prev) => !prev);

  return (
    <div className={styles.dropdown}>
      <button onClick={toggle} className={styles.trigger}>
        {label} ▾
      </button>
      {isOpen && <div className={styles.menu}>{children}</div>}
    </div>
  );
}
