import React, { lazy, Suspense } from 'react';

const LazyMainForm = lazy(() => import('./MainForm'));

const MainForm = props => (
  <Suspense fallback={null}>
    <LazyMainForm {...props} />
  </Suspense>
);

export default MainForm;
