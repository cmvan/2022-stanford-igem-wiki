import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Template from './Template';
import { useState } from "react";
import '../stylesheets/pages/team.scss';

export default function Team() {
  const dummyHeadshot = "https://static.igem.wiki/teams/4466/wiki/dummy-headshot.jpg"
  const [modalShow, setModalShow] = useState(false);

  return (
    <Template title="Team">
      <h1>This is the Team Page</h1>
      <p>Click on Each Member to Learn More!</p>
      <Row xs={1} md={2} lg={4} className="g-4 team-row">
        <Col>
        <Card onClick={() => {setModalShow(true)}} className="team-card">
          <Card.Img variant="top" src={ dummyHeadshot } />
          <Card.Body>
            <Card.Title>Member Name</Card.Title>
            <Card.Text>
              Superhero Name or some catchphrase
            </Card.Text>
          </Card.Body>
        </Card>
        <Modal
          show={modalShow}
          onHide={() => setModalShow(false)}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Member Name
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              Member Bio
            </p>
          </Modal.Body>
        </Modal>
      </Col>
      <Col>
        <Card onClick={() => {setModalShow(true)}} className="team-card">
          <Card.Img variant="top" src={ dummyHeadshot } />
          <Card.Body>
            <Card.Title>Member Name</Card.Title>
            <Card.Text>
              Superhero Name or some catchphrase
            </Card.Text>
          </Card.Body>
        </Card>
        <Modal
          show={modalShow}
          onHide={() => setModalShow(false)}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Member Name
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              Member Bio
            </p>
          </Modal.Body>
        </Modal>
      </Col>
      <Col>
        <Card onClick={() => {setModalShow(true)}} className="team-card">
          <Card.Img variant="top" src={ dummyHeadshot } />
          <Card.Body>
            <Card.Title>Member Name</Card.Title>
            <Card.Text>
              Superhero Name or some catchphrase
            </Card.Text>
          </Card.Body>
        </Card>
        <Modal
          show={modalShow}
          onHide={() => setModalShow(false)}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Member Name
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              Member Bio
            </p>
          </Modal.Body>
        </Modal>
      </Col>
      <Col>
        <Card onClick={() => {setModalShow(true)}} className="team-card">
          <Card.Img variant="top" src={ dummyHeadshot } />
          <Card.Body>
            <Card.Title>Member Name</Card.Title>
            <Card.Text>
              Superhero Name or some catchphrase
            </Card.Text>
          </Card.Body>
        </Card>
        <Modal
          show={modalShow}
          onHide={() => setModalShow(false)}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Member Name
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              Member Bio
            </p>
          </Modal.Body>
        </Modal>
      </Col>
    </Row>
    <Row xs={1} md={2} lg={4} className="g-4 team-row">
        <Col>
        <Card onClick={() => {setModalShow(true)}} className="team-card">
          <Card.Img variant="top" src={ dummyHeadshot } />
          <Card.Body>
            <Card.Title>Member Name</Card.Title>
            <Card.Text>
              Superhero Name or some catchphrase
            </Card.Text>
          </Card.Body>
        </Card>
        <Modal
          show={modalShow}
          onHide={() => setModalShow(false)}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Member Name
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              Member Bio
            </p>
          </Modal.Body>
        </Modal>
      </Col>
      <Col>
        <Card onClick={() => {setModalShow(true)}} className="team-card">
          <Card.Img variant="top" src={ dummyHeadshot } />
          <Card.Body>
            <Card.Title>Member Name</Card.Title>
            <Card.Text>
              Superhero Name or some catchphrase
            </Card.Text>
          </Card.Body>
        </Card>
        <Modal
          show={modalShow}
          onHide={() => setModalShow(false)}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Member Name
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              Member Bio
            </p>
          </Modal.Body>
        </Modal>
      </Col>
      <Col>
        <Card onClick={() => {setModalShow(true)}} className="team-card">
          <Card.Img variant="top" src={ dummyHeadshot } />
          <Card.Body>
            <Card.Title>Member Name</Card.Title>
            <Card.Text>
              Superhero Name or some catchphrase
            </Card.Text>
          </Card.Body>
        </Card>
        <Modal
          show={modalShow}
          onHide={() => setModalShow(false)}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Member Name
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              Member Bio
            </p>
          </Modal.Body>
        </Modal>
      </Col>
      <Col>
        <Card onClick={() => {setModalShow(true)}} className="team-card">
          <Card.Img variant="top" src={ dummyHeadshot } />
          <Card.Body>
            <Card.Title>Member Name</Card.Title>
            <Card.Text>
              Superhero Name or some catchphrase
            </Card.Text>
          </Card.Body>
        </Card>
        <Modal
          show={modalShow}
          onHide={() => setModalShow(false)}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Member Name
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              Member Bio
            </p>
          </Modal.Body>
        </Modal>
      </Col>
    </Row>
    </Template>
  );
}
