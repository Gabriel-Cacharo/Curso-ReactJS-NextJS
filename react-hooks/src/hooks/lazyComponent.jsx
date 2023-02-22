import React, { Suspense, useState } from 'react';

const loadComponent = () => import('./useRef&useMemo');
const LazyComponent = React.lazy(loadComponent);

export const Home = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <p>
        <button onMouseOver={loadComponent} onClick={() => setShow((s) => !s)}>
          {show ? 'LC on screen' : 'LC off screen'}
        </button>
        <Suspense fallback={<p>Carregando</p>}>{show && <LazyComponent />}</Suspense>
      </p>
    </div>
  );
};
