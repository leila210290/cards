import players from "./player";
import Player from "./component/Player";
import { Container, Row, Col } from "react-bootstrap";

function PlayerList() {
  return (
    <Container className="my-5">
      <Row>
        {players.map((player, index) => (
          <Col key={index} sm={6} md={4} lg={3}>
            <Player {...player} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default PlayerList;
