import React from 'react';

import { navigate } from 'gatsby';
import SEO from '../components/SEO';

class NotFoundPage extends React.Component {
  componentDidMount() {
    navigate('/');
  }

  render() {
    return '';
  }
}

export default NotFoundPage;
