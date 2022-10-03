import { FC, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { IUser } from '../../types';
import { UserInfo } from '../UserInfo';

type BasicUserInfoProps = {
  data: IUser,
};

export const BasicUserInfo: FC<BasicUserInfoProps> = ({
  data,
}) => {
  const birthday = useMemo(() => new Date(data.dob.date).toLocaleDateString(), [data.dob.date]);
  const { t } = useTranslation();

  return (
    <>
      <UserInfo title={t('user_info_name')} info={data.name.first} />
      <UserInfo title={t('user_info_surname')} info={data.name.last} />
      <UserInfo title={t('user_info_birthday')} info={birthday} />
      <UserInfo title={t('user_info_gender')} info={data.gender} />
    </>
  );
};
