import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import React from "react";
function Funpage() {
    return (
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMSbH9EUHmctmrDKtr7GiRIkRpccHyE8ZD6Q&usqp=CAU" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              I love REACT. 
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>FUN</ListGroup.Item>
          </ListGroup>

          <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLN47ToKrHJfRF7y7qhJzRTD3liLBBbkBDJQ&usqp=CAU" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              I love REACT. 
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>FUN</ListGroup.Item>
          </ListGroup>

          <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7HRe1t4hy4NZQgflXSYs5ucrjNrOEA-JVhw&usqp=CAU" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              I love REACT. 
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>FUN</ListGroup.Item>
          </ListGroup>
        </Card>
        
      );
  
}
export default Funpage;