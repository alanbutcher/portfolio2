import React from 'react';
import BaseLayout from '../components/layouts/baseLayout';
import BasePage from '../components/BasePage';




class Cv extends React.Component {

  render() {
    return (
      <BaseLayout {...this.props.auth}>
        <BasePage>  
          <h1>I am the Contact page</h1>
          </BasePage>  
      </BaseLayout>  
    )
  }
}

export default Cv