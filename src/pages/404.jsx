import React from 'react';

import { navigate } from 'gatsby';

class NotFoundPage extends React.Component {
  componentDidMount() {
    navigate('/');
  }

  render() {
    return '';
  }
}

export default NotFoundPage;
