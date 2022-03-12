import React, { useEffect } from 'react'
import { withRouter } from 'react-router-dom';

class ScrollOnTop extends React.Component {
  componentDidUpdate(prevProps) {
    if (
      this.props.location.pathname !== prevProps.location.pathname
    ) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return null;
  }
}
export default withRouter(ScrollOnTop);