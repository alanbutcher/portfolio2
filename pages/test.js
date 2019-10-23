import React from 'react';
import BaseLayout from '../components/layouts/baseLayout'
import { withRouter } from 'next/router';
import axios from 'axios';

class Test extends React.Component {

  static async getInitialProps({query}) {
    const testId = query.id
    return {testId}
  }


  render() {
    const {testId} = this.props
    return (
      <BaseLayout>
        <h1>I am a test page with id of {testId}</h1>
      </BaseLayout>
    )
  }
}

export default withRouter(Test);