import React from 'react';
import { noop } from 'lodash';
import type { LocationDescriptor, LocationState } from 'history';
import type { UserInfoResponseType } from '@/types/user';

export interface AppContextProps {
  currentPage: LocationDescriptor<LocationState>;
  prevPage: LocationDescriptor<LocationState>;
  userInfo: UserInfoResponseType;
  updateRoutes: () => void;
  updateUserInfo: () => void;
}

export const AppContext = React.createContext<AppContextProps>({
  currentPage: null,
  prevPage: null,
  userInfo: null,
  updateRoutes: noop,
  updateUserInfo: noop,
});
