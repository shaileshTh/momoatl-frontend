import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

const PhotoCard = (props) => {
  return (
    <div>
      <Card style = {{maxWidth:'700px', margin:'auto'}}>
      <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
        <CardImg top width="100%" src="https://goseveth.sirv.com/image3.png" alt="Card image cap" />
        <CardBody>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default PhotoCard;