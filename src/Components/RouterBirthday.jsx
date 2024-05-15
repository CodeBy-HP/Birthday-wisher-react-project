import React from 'react';
import Birthday from './Birthday';
import { useParams } from 'react-router-dom';

const RouterBirthday = () => {
  const { name, day, month } = useParams();
  return (
    <>
      <Birthday name={name} month={month} day={day} />
    </>
  );
};
export default RouterBirthday;