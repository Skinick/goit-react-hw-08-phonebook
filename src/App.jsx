import Navigation from 'components/Navigation/Navigation';
import UserRoutes from 'UserRoutes';

import styles from './App.module.css';

function App() {
  return (
    <div className={styles.container}>
      <Navigation />
      <UserRoutes />
    </div>
  );
}

export default App;