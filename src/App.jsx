import React from 'react';
import Header from './Header/Header';
import Main from './Main/Main';

const App = () => {
  return (
    <div className='lg:container mx-auto lg:px-4'>
      <Header></Header>
      <hr className='border-2' />
      <Main></Main>
    </div>
  );
};

export default App;