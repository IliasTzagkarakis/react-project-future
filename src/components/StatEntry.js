import React from "react";
import { Card, CardBody, CardText, Badge } from "reactstrap";

const StatEntry = ({ title, amount }) => {
  return (
    <Card>
      <CardBody>
        <CardText>
          {title.toUpperCase()}: <Badge>{amount}</Badge>
        </CardText>
      </CardBody>
    </Card>
  );
};

export default StatEntry;
