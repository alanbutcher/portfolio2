import React from 'react';
import BaseLayout from '../components/layouts/baseLayout';
import BasePage from '../components/BasePage';



class About extends React.Component {

  render() {
    return (
      <BaseLayout {...this.props.auth}>
      <BasePage>
        <h1>I am the about page</h1>
      </BasePage> 
      </BaseLayout> 
    )
  }
}

export default About