export type TGender = 'female' | 'male';

type TDate = {
  date: string,
  age: number,
};

interface ILocation {
  city: string,
  coordinates: {
    latitude: string,
    longitude: string,
  },
  country: string,
  postcode: number,
  state: string,
  street: {
    number: number,
    name: string,
  }
  timezone: {
    offset: string,
    description: string,
  },
}

export interface IBasicUserInfo {
  dob: TDate,
  gender: TGender,
  name: {
    title: string,
    first: string,
    last: string,
  },
  picture: {
    large: string,
    medium: string,
    thumbnail: string,
  },
  login: {
    uuid: string,
    username: string,
    password: string,
    salt: string,
    md5: string,
    sha1: string,
    sha256: string,
  },
}

export interface IUser extends IBasicUserInfo {
  location: ILocation,
  phone: string,
  registered: TDate,
}
