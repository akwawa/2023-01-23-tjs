import React, { lazy, Suspense } from 'react';

const LazySvgViewer = lazy(() => import('./SvgViewer'));

const SvgViewer = props => (
  <Suspense fallback={null}>
    <LazySvgViewer {...props} />
  </Suspense>
);

export default SvgViewer;
