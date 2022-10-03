import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { IUser } from '../../types';
import { BasicUserInfo } from '../BasicUserInfo';
import { UserInfo } from '../UserInfo';

type FullUserInfoProps = {
  data: IUser;
};

export const FullUserInfo: FC<FullUserInfoProps> = ({ data }) => {
  const { t } = useTranslation();
  return (
    <>
      <BasicUserInfo data={data} />
      <UserInfo title={t('user_info_phone')} info={data.phone} />
      <UserInfo title={t('user_info_location')} info={`${data.location.country} ${data.location.city} ${data.location.street.name}`} />
    </>
  );
};
