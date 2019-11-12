import React from 'react';
import { Col, Card, CardHeader, CardBody, CardTitle, CardText, Button } from 'reactstrap';
// import PortfolioCardDetail from './PortfolioCardDetail'


export default class PortfolioCard extends React.Component {

  constructor(props) {
    super()
  }

  render() {
    const { portfolio, children } = this.props

    return (
      < span >
      {/* <PortfolioCardDetail /> */}
      <Card className="portfolio-card">
        <CardHeader className="portfolio-card-header">{portfolio.title}</CardHeader>
        <CardBody>
          <p className="portfolio-card-city">Languages</p>
          <CardTitle className="portfolio-card-title">{portfolio.languages}</CardTitle>
          <CardText className="portfolio-card-text">{portfolio.description}</CardText>
          <div className="readMore">
            {children}
          </div>
        </CardBody>
      </Card>
      </span >
    )

  }
}