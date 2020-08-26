import React from 'react';
import ShowCard from '../../generics/ShowCard';
import ShowAddress from '../../generics/ShowAddress';
import ShowCombo from '../../generics/ShowCombo';
import ButtonFinnish from './ButtonFinish';

export default function ShowData() {
  return (
    <div>
      <ShowCard valid={true} />
      <ShowCombo />
      <ShowAddress />
      <ButtonFinnish />
    </div>
  );
}

