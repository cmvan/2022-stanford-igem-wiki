import { Col, Container, Row } from 'react-bootstrap'
import Template from './Template';

export default function Sustainable() {
  return (
    <Template title="Pursuing Sustainability">
      <h1>Focusing on Sustainability</h1>
        <p>
        Plastics are consuming the Earth and endangering billions upon billions of living organisms all around the world in a plethora of environments. Polyethylene Terephthalate (PET) remains to be particularly menacing as one of the most common forms of plastics destroying the planet. Hence, we sought to address the global release of plastics and microplastic particles into the environment through means of targeting the destruction/ degradation of PET plastics. 
        </p>
        <Container>
          <Row>
            <Col>
              <img 
                className="d-block mx-auto"
                src="https://static.igem.wiki/teams/4466/wiki/pages/sustainable/3-good-health-and-well-being.png"
                alt="Good Health and Well-Being SDG"
                width="300px"
                height="100%"
              />
            </Col>
            <Col>
              <img 
                className="d-block mx-auto"
                src="https://static.igem.wiki/teams/4466/wiki/pages/sustainable/4-quality-education.png"
                alt="Quality Education SDG"
                width="300px"
                height="100%"
              />
            </Col>
            <Col>
              <img 
                className="d-block mx-auto"
                src="https://static.igem.wiki/teams/4466/wiki/pages/sustainable/13-climate-action.png"
                alt="Climate Action SDG"
                width="300px"
                height="100%"
              />
            </Col>
            <Col>
              <img 
                className="d-block mx-auto"
                src="https://static.igem.wiki/teams/4466/wiki/pages/sustainable/15-life-on-land.png"
                alt="Life On Land SDG"
                width="300px"
                height="100%"
              />
            </Col>
            <caption className="d-block mx-auto text-center space-above">The Sustainable Development Goals that Stanford iGEM strove towards</caption>
          </Row>
        </Container>
        <p>
        By helping work towards a scalable PET degradation system, we would assist in the development of a more sustainable outcome while the production and consumption of PET is occurring as we will be able to effectively destroy it after it has been put to its particular use. 
        </p>
        <p>
          We engaged with stakeholders both in the U.S and beyond to understand how we can address the sustainable development goal of “life on land” and “climate change.” In particular, over the summer we connected with an environmental organization in Japan called Tokyo River Friends and helped cleanup plastics from the river. We had the opportunity to share our research with the volunteers, as well as engage in a fruitful conversation regarding how we can further improve the global environmental, social, and economical implications of our research. Based on their input to find a scalable, cost-effective way to substantially reduce the amount of PET bottles around them, we decided that implementing a bioreactor with PET-degrading yeast at municipal waste management sites would be a step in the right direction to mass-degrade PET plastics. By using plastic waste as a supply source for yeast, we can reduce the air pollution and greenhouse gasses that are released through the production and incineration of plastic waste. Overall, a bioreactor implementation would work towards improving life on land and tackling climate change.
        </p>
        <p>
          We additionally collaborated with The American School in Japan iGEM team to improve the sustainable development goals of “quality education” and “good health and wellbeing.” Given that the ASIJ iGEM team is developing a breast cancer diagnostic tool, we wanted to support their work to improve the health and wellbeing of our community. We decided to make two public surveys, one for each of our projects, and distribute them among our respective communities. Through our collaboration, we both strived to improve the general quality of education on breast cancer diagnostic measures, as well as plastic recycling and trash sorting and the current bioengineering solutions that are being implemented.
        </p>
    </Template>
  );
}
