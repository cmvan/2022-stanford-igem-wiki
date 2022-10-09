import { Col, Container, Image, Row } from "react-bootstrap";
import { membersInfo } from "../data/members.js"
import Template from './Template';
import '../stylesheets/pages/attributions.scss';

export default function Attributions() {
  return (
    <Template title="Attributions">
      <h1>Attributions</h1>
      <p>We give credit to everyone who contributed to our project here</p>

      <Container className="attr-container">
        <h2>Team Members</h2>
        {membersInfo.map((member, key) => {
            return (
              <Row className="attr-row" key={key}>
                <Col xs={2}>
                  <Image src={member.img.src} alt={member.img.alt} fluid roundedCircle/>
                </Col>
                <Col>{member.attribution}</Col>
              </Row>
            )
        })}
      </Container>

      <Container className="attr-container">
      <h2>Advisors</h2>
      <Row className="attr-row">
        <Col xs={2}>
          <Image src="https://static.igem.wiki/teams/4466/wiki/dummy-headshot.jpg" alt="Picture of Phil Kyriakakis" fluid roundedCircle/>
        </Col>
        <Col><p>Phil Attribution</p></Col>
      </Row>
      <Row className="attr-row">
        <Col xs={2}>
          <Image src="https://static.igem.wiki/teams/4466/wiki/dummy-headshot.jpg" alt="Picture of Drew Endy" fluid roundedCircle/>
        </Col>
        <Col><p>Drew Attribution</p></Col>
      </Row>
      </Container>
      
      <Container className="attr-container">
      <h2>External Parties</h2>
      <ul>
        <li>Additional Attribution 1</li>
        <li>Additional Attribution 2</li>
        <li>Additional Attribution 3</li>
      </ul>
      </Container>
    </Template>
  );
}

