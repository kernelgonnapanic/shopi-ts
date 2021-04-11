import React from 'react';

export type EmptyListInfoProps = {
  children: React.ReactNode;
};

const EmptyListInfo: React.FC<EmptyListInfoProps> = (props) => {
  return <h2>{props.children}</h2>;
};

export default EmptyListInfo;
