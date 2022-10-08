import { Card, Col, Modal, Row } from "react-bootstrap";
import { memberBios } from "../data/members.js"
import Template from './Template';
import { useState } from "react";
import '../stylesheets/pages/team.scss';

// Adapted from https://codesandbox.io/s/hungry-sunset-t865t3
// Add error handling?

export default function Team() {
  const initialState = Object.fromEntries(
    memberBios.map((member) => [member.name, false])
  );

  const [modalShow, setModalShow] = useState(initialState)
  const toggleShow = (id) =>
    setModalShow((prev) => {
      return { ...prev, [id]: !prev[id] };
    });

  return (
    <Template title="Team">
      <h1>This is the Team Page</h1>
      <p>Click on Each Member to Learn More!</p>
      <Row xs={1} md={2} lg={4} className="g-4 team-row">
        {memberBios.map((member, key) => {
          return (
            <Col key={key}>
              <Card onClick={() => {toggleShow(member.name)}} className="team-card">
                <Card.Img variant="top" src={member.img.src} alt={member.img.alt} />
                <Card.Body>
                  <Card.Title>{member.name}</Card.Title>
                  <Card.Text>{member.catchphrase}</Card.Text>
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
    </Template>
      );
    }
