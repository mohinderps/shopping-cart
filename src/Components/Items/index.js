import React from 'react';
import Item from '../Item';
import './style.css';
import items from '../../Data';

const Items = () => (
  <div className="Items">
    {items.map(item => (
      <Item key={item.id} item={item} />
    ))}
  </div>
);

export default Items;
