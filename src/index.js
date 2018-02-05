import React from 'react';
import ReactDOM from 'react-dom';

import Counter from './Counter';

ReactDOM.render(
  <Counter />,
  document.getElementById('app')
);

module.hot.accept();