import { Card, Badge } from "react-bootstrap";

function Player({ name, team, nationality, kitnumber, age, imagelink }) {
  return (
    <Card className="m-3 shadow-sm rounded" style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src={imagelink}
        alt={`${name}`}
        style={{ height: "250px", objectFit: "cover" }}
      />
      <Card.Body>
        <Card.Title className="text-center">{name}</Card.Title>
        <Card.Text className="text-muted text-center mb-2">{team}</Card.Text>
        <div className="d-flex justify-content-between mb-2">
          <Badge bg="primary">Kit #{kitnumber}</Badge>
          <Badge bg="success">{nationality}</Badge>
        </div>
        <div className="text-center">
          <Badge bg="warning" text="dark">
            Age: {age}
          </Badge>
        </div>
      </Card.Body>
    </Card>
  );
}

export default Player;
