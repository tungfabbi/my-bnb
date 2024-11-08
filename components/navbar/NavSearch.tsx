import React from 'react'

import { Input } from '../ui/input';

function NavSearch() {
  return (
    <Input
      type='search'
      placeholder='目的地を検索'
      className='max-w-xs dark:bg-muted '
    />
  );
}
export default NavSearch;