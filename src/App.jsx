import MyContactsPage from 'pages/MyContactsPage/MyContactsPage';
import Navigation from 'components/Navigation/Navigation';
import UserRoutes from 'UserRoutes';

import styles from './App.module.css';

function App() {
  return (
    <div className={styles.container}>
      <Navigation />
      <UserRoutes />
      <MyContactsPage />
    </div>
  );
}

export default App;