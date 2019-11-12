import React from 'react';
import BaseLayout from '../components/layouts/baseLayout';
import BasePage from '../components/BasePage';
import { Row, Col, Card, CardTitle, CardText, CardImg, CardImgOverlay } from 'reactstrap';


class About extends React.Component {

  render() {
    return (
      <BaseLayout {...this.props.auth}>
        <BasePage className="about-page">
          <Row className="mt-5">
            <Col md="6">
              <div className="left-side">
                <h1 className="title fadein">Welcome</h1>
                <h4 className="subtitle fadein">To My About Page</h4>
                {/* <p className="subsubTitle fadein">Feel free to read a short description about me.</p> */}
                <div className="fadein">
                <p className="subsubTitle fadein">My name is Alan Butcher and I am a Full Stack Developer. </p>
                <p className="aboutText fadein">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a gravida urna, eget semper ipsum. Mauris mi nibh, facilisis non ipsum eget, volutpat ornare massa. Nulla rutrum, lectus eget sodales tristique, nisi lorem viverra odio, vitae pharetra lorem enim id lorem. Morbi suscipit tempor laoreet. Sed vulputate arcu nec fermentum scelerisque. Proin condimentum lacus felis, eget porta ante eleifend id. Vivamus cursus imperdiet tortor, non ultricies justo varius vel. Aenean ornare ex nec odio cursus, a volutpat eros faucibus. Proin pellentesque nibh imperdiet molestie aliquet.
                </p>
                </div>  
              </div>
            </Col>
            <Col md="6">
              <div>
                <Card className="profile-picture fadein" inverse>
                  <CardImg  height="auto" src="/static/images/profile-pic.jpg" alt="Card image cap" />
                </Card>
              </div>
            </Col>
          </Row>  
      </BasePage> 
      </BaseLayout> 
    )
  }
}

export default About