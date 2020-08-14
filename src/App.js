import React, { useEffect } from 'react';
import Layout from './layouts/main-layout/layout';

import { grayColor } from './shared/style_utility';

const App = () => {

  useEffect(() => {
    
  }, []);
  return (
    <div>
      <Layout>
        <h3>This is a route!</h3>
      </Layout>
    </div>
  );
};

export default App;
