import { Col, Container, Row } from 'react-bootstrap'
import Template from './Template';
import '../stylesheets/pages/implementation.scss';

export default function Implementation() {
  return (
    <Template title="Implementation">
      <h1>Applying Our Work to the Real World</h1>
      <h2>Implementation Goals</h2>
      <p>
        Yeast is an incredibly versatile microbe: it’s cheap, easy to grow, and transportable. In creating yeast-optimized PETase enzymes, we aimed to take advantage of the adaptability of yeast to make plastic-degrading bioreactors with very low barriers to implementation. In particular, we wanted our bioreactors to be inexpensive and able to integrate safely into municipal waste streams without external treatment or waste pickup. We also designed the system to be easy to use, with minimal risk to the operator.
      </p>
      <h4>Human Practices Motivated</h4>
      <p>
        Our decision to design and market the bioreactor for a municipal scale came as a result of our human practices research. Originally we imagined personal bioreactors in individual homes for a household’s plastic waste, but since realized it would not be accessible in terms of cost and maintenance. It would also unfairly place shared environmental responsibility on individuals, instead of the large corporations who contribute the most significantly to pollution and fossil fuel emissions. In addition, if an environmentally-conscious household was our market, they would likely not use many disposable plastic bottles anyway. Disposable plastic bottles tend to be purchased when people are on the go in public spaces from markets, schools, or even amusement parks. These places are usually where the drink is finished and the bottle is disposed of. It makes sense for a larger-scale campus to pool its substantial PET waste and invest in maintaining a bioreactor to degrade it. Besides the initial upfront cost of the bioreactor, maintaining it should not be too expensive. It will simply cost the salary of 1 maintenance staff, yeast packets from us, a nutrient water medium, and energy to power the reactor. Corporations and educational institutions should be able to afford it. Apart from sustainably degrading their plastic waste, the bioreactor could also act as an educational exhibit and showcase of their environmental efforts. 
      </p>
      <p>
        Therefore, we changed our direction for bioreactor implementation from an individual home setting to a local community scale, either by municipality waste management organizations, large corporations, or college campuses, where communities can see the bioreactors in action.
      </p>

      <h2>Bioreactor Pipeline</h2>
      <Container class="bioreactor-cont">
        <Row>
          <Col sm={9}>
            <h3>Waste Collection</h3>
            <p>
              The PET plastic to be degraded by our system could be collected in typical recycling bins, although some post-collection sorting may be necessary to separate PET from other plastics. The waste would not need to be cleaned, but the waste receptacle could contain an internal UV light to sterilize them, reducing microbial competition for the plastic-degrading yeast.
            </p>

            <h3>Bioreactor</h3>
            <p>
              The PET waste would be loaded into a large bioreactor with a rotor, containing yeast transformed with our optmimized PETase enzyme, along with media supplements with the nutrients needed for yeast survival.To manage levels of ethanol and other cell waste products, the bioreactor would need to be periodically drained and replenished with fresh water and a new packet of yeast and nutrients.
            </p>
            <p>
              When the rotor is stopped, yeast, cell debris, and any TPA precipitate would settle to the bottom of the bioreactor, allowing the supernatant fluid to be drained through a valve into a receptacle. This fluid would likely contain built-up ethylene glycol from the PETase hydrolysis reaction.
            </p>

            <h3>Additional Treatment for Ethylene Glycol</h3>
            <p>
              Ethylene glycol is a key ingredient in antifreeze, and could have deleterious effects for both people and the surrounding environment if allowed to enter the water table. The CDC has recently released guides suggesting that a treatment of UV light and 10% hydrogen peroxide allows the ethylene glycol to fully oxidize nearby molecules, forming water and carbon dioxide [1].
            </p>
          </Col>
          <Col>
          <div className="d-flex justify-content-end">
            <img 
              src="https://static.igem.wiki/teams/4466/wiki/pages/implementation/bioreactor-design.png"
              alt="Bioreactor Design"
              width="300px" />
          </div>
          <caption className="d-block mx-auto text-center">Bioreactor Design</caption>
          </Col>
        </Row>
      </Container>
      <h3>More Details</h3>
      <p>
        Our bioreactor design was based on a few existing pieces of waste management infrastructure, namely septic tanks. In septic tanks, solids settle to the bottom of the tank while the above layer of wastewater is drained off the top for further treatment and dispersal [2]. Similarly in our bioreactor, yeast, cell debris, and TPA precipitate will settle to the bottom when the rotor is stopped. The top layer of liquid will be a mixture of media and ethylene glycol as a by-product from the PETase hydrolysis reaction. A valve will open to a pipe positioned above the level of solid debris, allowing just this supernatant to flow through into a secondary container for treatment.
      </p>
      <img 
        className="d-block mx-auto"
        src="https://static.igem.wiki/teams/4466/wiki/pages/implementation/septic-tank.png"
        alt="Septic Tank"
        width="500px"
      />
      <caption className="d-block mx-auto text-center">Septic Tank; Source: Olek Remesz (wiki-pl: Orem, commons: Orem), <a href="https://creativecommons.org/licenses/by-sa/3.0" target="_blank" rel="noreferrer noopener">CC BY-SA 3.0</a>, via Wikimedia Commons</caption>
      <p>
        In this secondary container the ethylene glycol will be treated with UV light and 10% hydrogen peroxide (H2O2). The UV light photochemically decomposes H2O2 to produce hydroxyl (OH) radicals, which allow the ethylene glycol to fully oxidize nearby molecules into water and carbon dioxide. Although this process successfully turns a hazardous chemical into harmless molecules, the momentary presence of free radicals is not something we can ignore. In the human body, hydroxyl radicals can cause cell death, damage to DNA, and subsequent cancer [3]. However, these molecules are also very unstable and reactive, so they should assimilate quickly into surrounding antioxidant compounds to form water and carbon dioxide. As long as the treatment container is secure and the chemical reaction is self contained, no free radicals should escape into the surrounding environment or cause unwanted exposure to the operator collecting the reaction products. We will factor this into later iterations of our bioreactor system design when mocking up detailed safety measures, and this will warrant extensive testing to validate the approach. One such safety measure is to use an automatic locking mechanism that will only open the reaction container when it senses 0 traces of free radicals. Thus, when the container needs to be emptied, the operator can be confident that there are no carcinogens left that could pose a hazard.
      </p>
      <img 
        className="d-block mx-auto"
        src="https://static.igem.wiki/teams/4466/wiki/pages/implementation/eg-treatment.png"
        alt="EG Treatment"
        width="500px"
      />
      <caption className="d-block mx-auto text-center">EG Treatment</caption>
      <p>
        We also want to address the presence of terephthalic acid (TPA) precipitate in our bioreactor design. TPA is a mild irritant and is not a compound we want to simply dispose of back into the environment. TPA can also be biodegraded by an enzyme called TPADO into the molecule protocatechuate (PCA) [4]. PCA is not only harmless, but also found in green tea and has potential as a cancer therapeutic [5]. Although it was out of the scope of our summer iGEM work, we plan to eventually incorporate the TPADO and MHETase enzymes into the directed evolution pipeline to optimize them for expression in yeast as well. Then we could express all the components in the full PET degradation pathway, either simultaneously in 1 yeast strain or adjacently in 3 different yeast strains that could form a microbial community in the bioreactor. Our ultimate goal is to make PET fully biodegradable into non-toxic, biocompatible compounds, so that we can start making a dent on the build-up of global plastic pollution.
      </p>

      <h4>References</h4>
      <ol className="references">
        <li>
          U.S. Department of Health and Human Services, Public Health Service. (November 2010). Toxicological Profile for Ethylene Glycol. Chapter 6: Potential for Human Exposure. Agency for Toxic Substances and Disease Registry.
        </li>
        <li>
          Types of Septic Systems | US EPA. (n.d.). Retrieved October 12, 2022, from https://www.epa.gov/septic/types-septic-systems
        </li>
        <li>
          Mu, T., Sun, H., Zhang, M., & Wang, C. (2017). Sweet Potato Proteins. In Sweet potato processing technology (pp. 49–119). Elsevier. https://doi.org/10.1016/B978-0-12-812871-8.00002-7
        </li>
        <li>
          Kincannon, W. M., Zahn, M., Clare, R., Lusty Beech, J., Romberg, A., Larson, J., Bothner, B., Beckham, G. T., McGeehan, J. E., & DuBois, J. L. (2022). Biochemical and structural characterization of an aromatic ring-hydroxylating dioxygenase for terephthalic acid catabolism. Proceedings of the National Academy of Sciences of the United States of America, 119(13), e2121426119. https://doi.org/10.1073/pnas.2121426119
        </li>
        <li>
          Acquaviva, R., Tomasello, B., Di Giacomo, C., Santangelo, R., La Mantia, A., Naletova, I., Sarpietro, M. G., Castelli, F., & Malfa, G. A. (2021). Protocatechuic Acid, a Simple Plant Secondary Metabolite, Induced Apoptosis by Promoting Oxidative Stress through HO-1 Downregulation and p21 Upregulation in Colon Cancer Cells. Biomolecules, 11(10). https://doi.org/10.3390/biom11101485
        </li>
      </ol>
    </Template>
  );
}
