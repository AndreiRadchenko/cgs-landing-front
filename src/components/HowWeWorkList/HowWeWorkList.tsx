import React from 'react';
import HowWeWorkCard from '../HowWeWorkCard/HowWeWorkCard';
import { IHowWeWorkCardProps } from '../HowWeWorkCard/types';

const HowWeWorkList = ({ items }: { items: IHowWeWorkCardProps[] }) => {
  return (
    <>
      {items.map((item, i) => (
        <HowWeWorkCard key={i.toString()} {...item} />
      ))}
    </>
  );
};

export default HowWeWorkList;
