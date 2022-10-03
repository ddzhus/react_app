import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { ErrorMessage } from '../../components/ErrorMessage';
import { useAppSelector } from '../../hooks/useAppSelector';
import { errorSelector, usersSelector } from '../../redux/usersReducer/selectors';
import styles from './UserProfilePage.module.scss';
import { UserCard } from '../../components/UserCard';

export const UserProfilePage: FC = () => {
  const { userID } = useParams();
  const error = useAppSelector(errorSelector);
  const users = useAppSelector(usersSelector);

  const user = users?.find((data) => data.login.uuid === userID);

  return (
    <main className={styles.container}>
      {user && <UserCard data={user} variant="big" />}
      {error && <ErrorMessage />}
    </main>
  );
};
