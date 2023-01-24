import React, { lazy, Suspense } from 'react';

const LazyFlexLayout = lazy(() => import('./FlexLayout'));

const FlexLayout = props => (
  <Suspense fallback={null}>
    <LazyFlexLayout {...props} />
  </Suspense>
);

export default FlexLayout;
