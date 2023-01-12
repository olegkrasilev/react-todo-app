import React from 'react';

import styles from './layout.module.scss';

import { Header } from 'shared/ui/Header';

interface LayoutProperties {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProperties> = ({ children }: LayoutProperties) => (
  <main className={styles.container}>
    <Header />
    {children}
  </main>
);

export default Layout;
