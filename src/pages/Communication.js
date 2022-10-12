import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Template from './Template';

export default function Communication() {
  return (
    <Template title="Communication">
      <h1>Education</h1>
      <p>
        Our team ran a synthetic biology summer session program for high school students across the world. In preparation, we established a set sign up form, zoom links for each day, and a mailing list to ensure effective communication and means for us to share the individually made assignments, submission forms, lecture recordings, and slideshows. Logistically, the summer session spanned over 4 weeks from August 29th to September 21st with sessions held twice a week on Mondays and Wednesdays. Mondays were reserved for lectures on our weekly synthetic biology topic and were recorded in case students were unable to attend a lecture and still wanted the information to complete their assignment. Wednesdays were reserved for our wonderful guest speakers followed by office hours. To learn more about all the details of our program, refer to the <Link to="/education">Education</Link> Page.
      </p>
      <h1>Communication</h1>
      <p>
        When constructing our summer session, we felt it was important to go beyond inclusivity by creating strong forms of communications that would foster community and conversations. In order to accomplish this, the team valued all forms of communication such as social media and emails. For instance, one of the forms of communication that got the most engagement was our instagram (@stanford_igem) where we would have Q&A stories where students would ask us any questions they had. By doing so, it allowed students to feel comfortable in reaching out and actively participate in our zoom meetings. Additionally, we intentionally created homework assignments that required active participation from the students and gave them the opportunity to ask any questions during our Q&A/office hour sessions. During these windows is where we were able to foster a two way conversation with the students over the concepts we were teaching. By creating this dialogue, students were able to express their thoughts, ideas, and work to us and thereby allowing us to teach students the science behind synthetic biology. The team also felt it was important to add the perspective of Stanford professors to the conversation and therefore we held speaker sessions.  All of these conversations and our ability to bring scientific research and synthetic biology to households all over the world was made possible through our summer session. The creation of a tight knit community which holds an open academic conversation over the span of 4 weeks was founded under the principles of community, sincerity, curiosity, and most importantly synthetic biology. 
      </p>
      <Container>
        <Row>
          <Col>
            <img 
              className="d-block mx-auto"
              src="https://static.igem.wiki/teams/4466/wiki/pages/communication/social-media-1.png"
              alt="IG Post in the Lab 1"
              width="600px"
            />
            <caption className="d-block mx-auto text-center">Instagram Post in Lab : Spinning Like a Centrifuge</caption>
          </Col>
          <Col>
            <img 
              className="d-block mx-auto"
              src="https://static.igem.wiki/teams/4466/wiki/pages/communication/social-media-2.png"
              alt="IG Post in the Lab 2"
              width="600px"
            />
            <caption className="d-block mx-auto text-center">Instagram Post in Lab: Genetics and Pipetting</caption>
          </Col>
        </Row>
      </Container>

      <p>
        Beyond our summer session, we’ve also used various forms of communication to reach out to the Stanford community. We used instagram stories to keep any interested peers updated on our team and project. We also used it to communicate with other iGEM teams in finding collaboration opportunities.  reached out to individuals in the Stanford community through tabling. In these tabling sessions we would hold open conversations with Stanford students revolving around synthetic biology and the applications of our project. We learned that the student body is curious and receptive to learn about the possibilities of synthetic biology. They showed true intellectual vitality in our discussions, and many peers offered help to our project through the means of connecting us to organizations for human outreach and recommending technical project strategies. We also showcased our project to the scientific research community on campus by participating in the Bio-X Poster Session on August 26th. It gave us a lot of great practice with explaining the scientific details of our poster and project to peers and faculty alike. From this we were able to network with other researchers and professors who had input on our project or who were doing similar research. Going into the jamboree we are now more confident in our science communication and public speaking skills. In addition, we are signed up to present at Stanford’s Symposium of Undergraduate Research and Public Service on October 20th.
      </p>
      <Container>
        <Row>
          <Col>
            <img 
              className="d-block mx-auto"
              src="https://static.igem.wiki/teams/4466/wiki/pages/communication/communication-tabling.png"
              alt="Tabling at White Plaza"
              width="600px"
            />
            <caption className="d-block mx-auto text-center">Tabling at White Plaza</caption>
          </Col>
          <Col>
            <img 
              className="d-block mx-auto"
              src="https://static.igem.wiki/teams/4466/wiki/pages/communication/biox.jpg"
              alt="Presenting at the Bio-X Symposium"
              width="600px"
            />
            <caption className="d-block mx-auto text-center">Presenting at the Bio-X Symposium</caption>
          </Col>
        </Row>
      </Container>

    </Template>
  );
}
