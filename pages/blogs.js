import React from 'react';
import BaseLayout from '../components/layouts/baseLayout';
import BasePage from '../components/BasePage';




class Blogs extends React.Component {

  render() {
    return (
      <BaseLayout {...this.props.auth}>
        <BasePage>    
          <h1>I am the Blogs page</h1>
        </BasePage>
      </BaseLayout>
    )
  }
}

export default Blogs