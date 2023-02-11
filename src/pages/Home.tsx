// @ts-nocheck

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authTest } from '../actions/auth';

export default function Home() {
  const dispatch = useDispatch();
  const { authData } = useSelector((state) => state.auth);
  console.log('authData:', authData);

  useEffect(() => {
    dispatch(authTest());
  }, []);

  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}
