import React, { useContext, useEffect, useState } from 'react';
import { Storage } from '@capacitor/storage';

interface Auth {
  loggedIn: boolean;
  userId?: string;
}

interface AuthInit {
  loading: boolean;
  auth?: Auth | any;
}

export const AuthContext = React.createContext<Auth>({ loggedIn: false });

export function useAuth(): Auth {
  return useContext(AuthContext);
}

export const useAuthInit = () => {
  const value = localStorage.getItem('@Logged');
  const auth = { loggedIn: Boolean(value) };
  return { loading: false, auth };
};
