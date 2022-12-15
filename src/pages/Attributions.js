import { Col, Container, Image, Row } from "react-bootstrap";
import { membersInfo } from "../data/members.js"
import Template from './Template';
import '../stylesheets/pages/attributions.scss';

export default function Attributions() {
  return (
    <Template title="Attributions">
      <h1>Attributions</h1>
      <p>
        We are extremely grateful for the invaluable guidance we have received on our project 
        throughout the year. Your expertise, wisdom, and continued support throughout our iGEM 
        journey is very much appreciated. Thank you for teaching the Stanford iGEM team what it 
        takes  to realize a research idea and make a positive impact on the environment—one PET 
        bottle at a time.
      </p>

      <Container fluid className="attr-container">
        <h2>Team Members</h2>
        {membersInfo.map((member, key) => {
            return (
              <Row className="attr-row" key={key}>
                <Col xs={2}>
                  <Image src={member.img.src} alt={member.img.alt} fluid roundedCircle/>
                </Col>
                <Col><p class="member-attr">{member.attribution}</p></Col>
              </Row>
            )
        })}
      </Container>

      <Container fluid className="attr-container">
      <h2>Advisors</h2>
      <Row className="attr-row">
        <Col xs={2}>
          <Image 
            src="https://static.igem.wiki/teams/4466/wiki/people/phillip-kyriakakis.png" 
            alt="Picture of Phil Kyriakakis" 
            fluid roundedCircle
          />
        </Col>
        <Col>
          <p>
            Phil Kyriakakis is our advisor and mentor who we are beyond grateful for. He guided us 
            through the initial project research stage, experimental design, team organization, 
            wet lab work, and much more.
          </p>
        </Col>
      </Row>
      <Row className="attr-row">
        <Col xs={2}>
          <Image 
            src="https://static.igem.wiki/teams/4466/wiki/people/drew-endy.jpeg"
            alt="Picture of Drew Endy"
            fluid roundedCircle
          />
        </Col>
        <Col>
          <p>
            Drew Endy advised us on how we could address the potential harms that engineered yeast 
            might pose on the environment, specifically with regards to the production of toxic 
            ethylene glycol following PET degradation.
          </p>
        </Col>
      </Row>
      </Container>
      
      <Container fluid className="attr-container">
      <h2>External Parties</h2>
      <ul>
        <li>
          <strong>Rachel Wallstrom</strong> and <strong>L’Nard Tufts</strong> are the advisors 
          for the Stanford Product Realization Lab. They provided extensive support and 
          guidance during the process of designing and 3D printing our gaskets to select for 
          yeast with optimized PETase.
        </li>
        <li>
          The <strong>Hong Lab</strong> in the Stanford ChEM-H Neuroscience Building for their 
          continued support and sharing of lab space and equipment.
        </li>
        <li>
          <strong>Ren Ramlan</strong> and <strong>Ayush Pandit</strong> are previous Stanford iGEM 
          members who provided valuable mentorship during the early stages of our project. They 
          helped us navigate project brainstorming as well as understand the logistical and 
          financial aspects of iGEM.
        </li>
        <li>
          <strong>Professor Possu Huang</strong> provided input on the modeling process for the 
          PETase protein. He pointed out some of the limitations of computational docking and 
          made suggestions for accurate parameterization of the binding surface.
        </li>
      </ul>
      </Container>

      <Container fluid className="attr-container">
      <h2>Education and Human Practices</h2>
      <ul>
        <li>
          <strong>Dr. Todd Coleman</strong> talked about his journey into Bioengineering and the 
          importance of interdisciplinary collaboration during the first week of our high school 
          education program.
        </li>
        <li>
          <strong>Dr. Jenn Brophy</strong> gave a DNA & Plasmids class to the high school students 
          in our Synthetic Biology education program. 
        </li>
        <li>
          <strong>Dr. Chang Liu</strong> provided us with numerous cloning strategies and wet lab 
          tips to engineer the OrthoRep system into yeast.
        </li>
        <li>
          <strong>Katherine Huded</strong> provided input on the drawbacks and limitations of 
          plastic recycling infrastructure and supported our human practices initiatives.
        </li>
        <li>
          <strong>Sebastian Cocioba</strong> suggested we incorporate an enzyme into our PET 
          degradation system to degrade the TPA byproduct into a more biosafe compound.
        </li>
        <li>
          <strong>Tokyo River Friends</strong> continues to inspire and humble us by their work to 
          eliminate trash from the river coasts of Tokyo. Thank you for the wonderful experiences 
          and friendships formed during our cleanup session of the Arakawa River.
        </li>
        <li>
          <strong>The Stanford Program for Inspiring the Next Generation of Women in Physics</strong> was 
          a useful resource that we drew inspiration from for the lecture content in our high school 
          education program.
        </li>
      </ul>
      </Container>

      <Container fluid className="attr-container">
      <h2>Sponsors</h2>
      <ul>
        <li>
          <strong>Biological Interdisciplinary Open Maker Environment (BIOME)</strong> has given us 
          academic and financial support for our project.
        </li>
        <li>
          <strong>Stanford Bioengineering</strong> provided us with funding, lab space, community 
          reagents and supplies.
        </li>
        <li>
          <strong>Frederick Gardner Cottrell Foundation (Research Corporate Technologies)</strong> 
          financially supported us after we applied for the iGEM Impact Grant.
        </li>
        <li>
          <strong>Integrated DNA Technologies</strong> and <strong>Beckman Coulter</strong> have 
          given us the necessary biological tools and resources required to complete our wet lab 
          protocols and collect experimental data through their broader sponsorship of this year's 
          iGEM competition.
        </li>
        <li>
          <strong>Stanford University School of Engineering</strong> provided funding support to 
          cover travel expenses and project resources.
        </li>
      </ul>
      </Container>
      <Container fluid className="attr-container">
      <h2>Image Credits</h2>
      <ul>
        <li>
          <strong>Taylor Skaff</strong> photographed the Green Butterfly photo used as the hero image for the wiki pages and made it available on Unsplash.
        </li>
      </ul>
      </Container>
    </Template>
  );
}

