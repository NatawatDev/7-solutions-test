'use client'

import React from 'react'
import BaseButton from './BaseButton'
import { ItemColumnProps } from '../types'

const ItemColumn: React.FC<ItemColumnProps> = ({ dataList = [], action }) => {
  return (
    <>
      {dataList.length > 0 && (
        dataList.map((item) => (  
          <BaseButton key={item.name} title={item.name} action={() => action(item)} />
        ))
      )}
    </>
  );
};

export default ItemColumn