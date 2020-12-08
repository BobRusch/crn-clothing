import React from 'react';

import {
  ErrorImageContainer,
  ErrorImageOverlay,
  ErrorImageText
} from '../../components/error-boundary/error-boundary.styles';

const ContactUs = () => (
  <ErrorImageOverlay>
    <ErrorImageContainer imageUrl='https://i.imgur.com/qIufhof.png' />
    <ErrorImageText>
      <h2 style={{ textAlign: "center" }}>Page Under Construction</h2>
      <p>Please check  back in the future as this page is currently being built</p>
    </ErrorImageText>
  </ErrorImageOverlay >
);

export default ContactUs;