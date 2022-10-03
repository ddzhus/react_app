import { ErrorMessage } from '../../components/ErrorMessage';
import { Loader } from '../../components/Loader';
import { UsersList } from '../../components/UsersList';
import { useAppSelector } from '../../hooks/useAppSelector';
import { errorSelector, loadingSelector } from '../../redux/usersReducer/selectors';
import styles from './UsersPage.module.scss';

export const UsersPage = () => {
  const error = useAppSelector(errorSelector);
  const loading = useAppSelector(loadingSelector);

  return (
    <main>
      <div className={styles.container}>
        <UsersList />
        {loading && <Loader />}
        {error && <ErrorMessage />}
      </div>
    </main>
  );
};
