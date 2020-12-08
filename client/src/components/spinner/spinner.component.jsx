import React from 'react';

import { SpinnerContainer, SpinnerOverlay } from './spinner.styles';

const Spinner = () => (
  <SpinnerOverlay>
    <SpinnerContainer />
    <br />
    <h1>Loading....</h1>
  </SpinnerOverlay>
);

export default Spinner;