import { Col, Container, Row } from 'react-bootstrap'
import Template from './Template';

export default function Home() {
  return (
    <Template title="MORPH: Mutation Optimized Reactor for PET Hydrolysis">
      <h1>Introducing MORPH!</h1>
      <p>
        Polyethylene Terephthalate (PET), accounts for 12% of solid waste worldwide thus making PET processing a top priority. Recently, an enzyme was discovered in bacteria that breaks down PET and following this, several studies have used the wild-type protein to improve its efficiency and stability for enzymatic degradation in vitro. Although these recent achievements are incredible advances, having optimized PETases for conditions that microbes prefer will essentially make PET biodegradable. To produce PETases that function under different conditions (e.g. fermentation), our team is building a platform for producing PETases through continuous directed evolution called “OrthoRep”. To achieve this, we’ve developed a system that selects for yeast mutants with improved activity in user-defined conditions. Our workflow can be used to evolve PETases that work optimally for different species based on the pH and temperature used in our evolution and could be used to evolve enzymes that break down many other materials.
      </p>
      <h2>Check out our video for a SPEEDY introduction :D</h2>
      <iframe className="d-block mx-auto space-above"title="Stanford: MORPH (2022) - Project Promotion [English]" width="840" height="473" src="https://video.igem.org/videos/embed/9323e1c8-b182-49ea-b680-b50bdd0cab61" frameborder="0" allowfullscreen="" sandbox="allow-same-origin allow-scripts allow-popups"></iframe>
      <h1>Join Stanford iGEM!</h1>
      <p>
        Find Project MORPH exciting? Want to craft similar projects in synthetic biology? Click the button below to learn about how YOU can get involved with Stanford iGEM! 
      </p>
      <Container>
        <Row>
          <Col class="d-flex justify-content-center">
            <img 
              class="img-responsive mh-80"
              src="https://static.igem.wiki/teams/4466/wiki/pages/home/caroline-with-gaskets.jpg"
              alt="Stanford iGEM at Grand Jamboree"
              width="25%"
              height="100%"
            />
            <img 
              class="img-responsive"
              src="https://static.igem.wiki/teams/4466/wiki/pages/home/stanford-igem-in-lab.jpg"
              alt="Savana and Shreya Purifying DNA"
              width="25%"
              height="100%"
            />
            <img 
              class="img-responsive"
              src="https://static.igem.wiki/teams/4466/wiki/pages/home/stanford-igem-in-office.jpg"
              alt="Stanford iGEM in Office"
              width="25%"
              height="100%"
            />
            <img 
              class="img-responsive"
              src="https://static.igem.wiki/teams/4466/wiki/pages/home/presenting-at-biox.jpg"
              alt="Stanford iGEM Members Presenting at Bio-X Symposium"
              width="25%"
              height="100%"
            />
          </Col> 
        </Row>
        <Row>
          <Col class="d-flex justify-content-center">
            <img 
              class="img-responsive"
              src="https://static.igem.wiki/teams/4466/wiki/pages/home/stanford-igem-at-grand-jamboree.jpg"
              alt="Stanford iGEM at Grand Jamboree"
              width="30%"
              height="100%"
            />
            <img 
              class="img-responsive"
              src="https://static.igem.wiki/teams/4466/wiki/pages/home/stanford-igem-hands.jpg"
              alt="Stanford iGEM Hands Showing Teamwork"
              width="20%"
              height="100%"
            />
            <img 
              class="img-responsive"
              src="https://static.igem.wiki/teams/4466/wiki/pages/home/stanford-igem-at-dinner.jpeg"
              alt="Stanford iGEM at Dinner"
              width="30%"
              height="100%"
            />
            <img 
              class="img-responsive"
              src="https://static.igem.wiki/teams/4466/wiki/pages/home/walking-thru-paris.jpg"
              alt="Stanford iGEM Walking Through Paris"
              width="20%"
              height="100%"
            />
          </Col>
        </Row>
      </Container>
      <caption className="d-block mx-auto text-center space-above">Fun Times with Stanford iGEM: This could be you! </caption>
      <a class="button" href='https://stanfordbiome.org/igem.html' target="_blank" rel="noreferrer">Join Stanford iGEM Today!</a>
    </Template>
  );
}
