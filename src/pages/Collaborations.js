import { Col, Container, Row } from 'react-bootstrap'
import Template from './Template';

export default function Collaborations() {
  return (
    <Template title="Collaborations">
      <h1>Collaboration</h1>
      <h2>Yale</h2>
      <p>
        We worked together with Yale iGEM to further develop a well-rounded educational summer session. In light of the Yale team’s work to transition a biological pathway from one organism to another, we invited them to host a week of the session themed around model organisms and biological chassis. We worked together for two months to design the summer session and create educational materials (including slides, an assignment, case studies, and challenges). The Yale/Stanford collaborative lecture and office hours in the second week of the summer session provided an important bridge between the first education week, which focused on protein engineering, and the third week, which centered on implementing synthetic bio-constructs into organisms through plasmid design.
      </p>
      <img 
        className="d-block mx-auto"
        src="https://static.igem.wiki/teams/4466/wiki/pages/collaboration/yale-collab.png"
        alt="Summer Session Flyer with Yale Collab"
        width="600px"
      />
      <caption className="d-block mx-auto text-center">Summer Session Flyer Highlighting Collaboration with Yale</caption>

      <h2>Thailand-RIS</h2>
      <p>
        We collaborated with Thailand-RIS through a mentorship relationship, meeting with the team on a few occasions to lend our insights on web development. In our first meeting with the Thailand-RIS team, they asked for advice with the Wiki. Therefore the subsequent meetings were based on mentorship to this first-year team and follow-up questions that the Thailand-RIS team had. For instance, the first meeting was about website development一 how to get started and what to keep in mind when building wiki. The second meeting involved discussing requirements, advice on project modeling as well as registering parts.
      </p>
      <img 
        className="d-block mx-auto"
        src="https://static.igem.wiki/teams/4466/wiki/pages/collaboration/thailand-ris.jpg"
        alt="Zoom Meeting with Thailand-RIS"
        width="600px"
      />
      <caption className="d-block mx-auto text-center">Zoom Meeting with Thailand-RIS</caption>

      <h2>ASIJ</h2>
      <p>
        The American School in Japan (ASIJ) high school is one of our team member’s alma mater. We had the opportunity to collaborate with the current ASIJ iGEM team and share our projects with one another over zoom. From our conversations we learned that the ASIJ team is developing a breast cancer diagnostic tool and are hoping to get insight into how educated people in the U.S are on breast cancer and current diagnostics measures. Similarly, we were hoping to gather information about the plastic pollution problem among people in Japan, and more specifically, what gaps in knowledge there are surrounding trash sorting, recycling, and current bioengineering solutions that tackle plastic waste. Since both teams were looking for an information exchange about another demographic, we decided to create flyers for our projects that would contain information to access a public survey with our questions. We then agreed to put these flyers up around our respective school campuses and on social media. The Stanford iGEM team’s flyer links people to our <a href="https://docs.google.com/forms/d/e/1FAIpQLSdInqTyG_0OXamwgio0OlO-lok9I0oJZ99gVGNv6Ki02FbNAg/viewform" target="_blank" rel="noreferrer noopener">Plastic Waste Survey</a>. Below are the flyers we distributed and exchanged on social media.
      </p>
      <Container>
        <Row>
          <Col>
            <img 
              className="d-block mx-auto"
              src="https://static.igem.wiki/teams/4466/wiki/pages/collaboration/asij-poster.jpg"
              alt="ASIJ Poster"
              width="600px"
            />
            <caption className="d-block mx-auto text-center">ASIJ Poster</caption>
          </Col>
          <Col>
            <img 
              className="d-block mx-auto"
              src="https://static.igem.wiki/teams/4466/wiki/pages/collaboration/publicsurveystanfordflyer.png"
              alt="Public Survey Stanford Flyer"
              width="600px"
            />
            <caption className="d-block mx-auto text-center">Stanford Plastic Public Survey Flyer</caption>
          </Col>
        </Row>
      </Container>
    </Template>
  );
}
