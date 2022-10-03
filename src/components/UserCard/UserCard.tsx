import { FC } from 'react';
import { IUser } from '../../types';
import { Avatar } from '../Avatar';
import { BasicUserInfo } from '../BasicUserInfo';
import { Card } from '../Card';
import { FullUserInfo } from '../FullUserInfo';
import styles from './UserCard.module.scss';

type UserCardProps = {
  data: IUser,
  variant: 'small' | 'big',
};

export const UserCard: FC<UserCardProps> = ({ data, variant }) => {
  const classes = data.gender === 'male' ? styles.genderMale : styles.genderFemale;

  return (
    <Card className={classes}>
      <Avatar src={data.picture.large} size={128} />
      <div className={styles.divider} />
      <div className={styles.userInfo}>
        {variant === 'big' ? <FullUserInfo data={data} /> : <BasicUserInfo data={data} />}
      </div>
    </Card>
  );
};
