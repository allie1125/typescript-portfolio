import { Outlet } from 'react-router';

import Gnb from '../_shared/GNB/Gnb';
import styles from './layout.module.scss';

const Layout = () => {
  return (
    <div className={styles.layoutWrapper}>
      <Gnb />
      <main>
        <Outlet />
      </main>
      <footer>footer</footer>
    </div>
  );
};

export default Layout;
