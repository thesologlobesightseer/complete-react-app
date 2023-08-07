import React, { Suspense } from 'react';

import PublicRoutes from 'main/routes';

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PublicRoutes />
    </Suspense>
  );
}

export default App;
