import { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { routes } from '../../constants';
import { useAppSelector } from '../../hooks/useAppSelector';
import { useLazyLoading } from '../../hooks/useLazyLoading';
import { loadingUsers } from '../../redux/usersReducer/actions';
import { usersSelector } from '../../redux/usersReducer/selectors';
import { UserCard } from '../UserCard';
import styles from './UsersList.module.scss';

export const UsersList: FC = () => {
  const ref = useLazyLoading();
  const users = useAppSelector(usersSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadingUsers({ page: 1, results: 20 }));
  }, [dispatch]);

  const usersList = users?.map((user) => (
    <Link to={`${routes.userProfilePage.path}/${user.login.uuid}`} key={user.login.uuid}>
      <UserCard data={user} variant="small" />
    </Link>
  ));

  return (
    <div className={styles.wrapper} ref={ref}>
      {usersList}
    </div>
  );
};
