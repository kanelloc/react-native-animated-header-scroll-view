import * as React from 'react';
import { Card, Header, OverflowHeaderComponent } from './components';
import { AnimatedScrollView } from '../../src/components/AnimatedScrollView';

const App = () => {
  const data = Array.from(Array(20).keys());

  return (
    <AnimatedScrollView
      headerImgHeight={400}
      headerHeight={90}
      OverflowHeaderComponent={<OverflowHeaderComponent />}
      HeaderComponent={<Header />}
      headerImage={require('../assets/cabin.jpg')}
    >
      {data.map((e) => {
        return <Card item={e} key={e} />;
      })}
    </AnimatedScrollView>
  );
};

export default App;
