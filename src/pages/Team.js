import { Card, Col, Container, Modal, Row } from "react-bootstrap";
import { membersInfo } from "../data/members.js"
import Template from './Template';
import { useState } from "react";
import '../stylesheets/pages/team.scss';

// Adapted from https://codesandbox.io/s/hungry-sunset-t865t3
// Add error handling?

export default function Team() {
  const initialState = Object.fromEntries(
    membersInfo.map((member) => [member.name, false])
  );

  const [modalShow, setModalShow] = useState(initialState)
  const toggleShow = (id) =>
    setModalShow((prev) => {
      return { ...prev, [id]: !prev[id] };
    });

  return (
    <Template title="Team">
      <h1 className="text-center">Meet the 2022 Stanford iGEM Team!</h1>
      <img className="mx-auto d-block group-photo" src="https://static.igem.wiki/teams/4466/wiki/members/group.jpg" height="500px" alt="Stanford iGEM Team"/>
      <caption className="mx-auto d-block text-center group-photo-caption">2022 Stanford iGEM Team</caption>
      <Container className="member-cards">
        <h3 className="text-center">Learn More About the Members Here!</h3>
        <Row xs={1} md={2} lg={4} className="g-4 team-row">
          {membersInfo.map((member, key) => {
            return (
              <Col key={key}>
                <Card className="student" onClick={() => {toggleShow(member.name)}}>
                  <Card.Img variant="top mt-0" src={member.img.src} alt={member.img.alt} />
                  <Card.Body>
                    <Card.Title>{member.name}</Card.Title>
                  </Card.Body>
                </Card>
                <Modal
                  show={modalShow[member.name]}
                  onHide={() => toggleShow(member.name)}
                  size="lg"
                  aria-labelledby="contained-modal-title-vcenter"
                  centered
                >
                  <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                      {member.name}
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Row>
                      <Col xs={4}><img className="img-fluid" src={member.img.src} alt={member.img.alt}/></Col>
                      <Col><p>{member.bio}</p></Col>
                    </Row>
                  </Modal.Body>
                </Modal>
              </Col>
            )
          })}
        </Row>
      </Container>

      <h3 className="text-center">Meet Our Advisors!</h3>
      <Container className="member-cards">
        <Row>
          <Col></Col>
          <Col>
          <Card>
            <Card.Img variant="top mt-0" src="https://static.igem.wiki/teams/4466/wiki/people/phillip-kyriakakis.png" alt="Picture of Phillip Kyriakakis" />
            <Card.Body>
              <Card.Title>Phillip Kyriakakis</Card.Title>
            </Card.Body>
          </Card>
          </Col>
          <Col>
          <Card>
            <Card.Img variant="top mt-0" src="https://static.igem.wiki/teams/4466/wiki/people/drew-endy.jpeg" alt="Picture of Drew Endy" />
            <Card.Body>
              <Card.Title>Drew Endy</Card.Title>
            </Card.Body>
          </Card>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </Template>
      );
    }
