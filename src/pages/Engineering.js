import { Col, Container, Row } from 'react-bootstrap'
import Template from './Template';

export default function Engineering() {
  return (
    <Template title="Engineering">
      <h1>Introduction</h1>
      <p>
        One key component of our project is the use of directed evolution methods to improve 
        FAST-PETase for operation in yeast. To target the PETase gene for random mutagenesis 
        within the cells, we used a genetic platform called OrthoRep. However, we also needed 
        to develop a screening method to select for yeast that had evolved more effective 
        PETases. A few screening concepts were pitched: we could use HPLC to detect the 
        concentrations of the PET breakdown products and sort for successful strains accordingly, 
        or we could grow our OrthoRep yeast on a thin sheet of PET plastic with nutrient-rich 
        media underneath. However, because we wanted to fully harness the potential of OrthoRep 
        for high-throughput exploration of the PETase mutant sample space, we decided to design 
        a screen that could fit into a 96-well plate. The final design for our screening device 
        has three layers: on top, a gasket into which OrthoRep yeast culture samples are pipetted. 
        On the bottom, a 96-well plate. A thin film of PET plastic is sandwiched between the 
        gasket and the plate.
      </p>
      <img 
        className="d-block mx-auto"
        src="https://static.igem.wiki/teams/4466/wiki/pages/engineering/petase-screen-3.png"
        alt="PET-ase Screen"
        width="600px"
      />
      <caption className="d-block mx-auto text-center">PET-ase Screening Overview</caption>
      <p>
        For a yeast strain to be selected, it must successfully break down the PET film and drop 
        down into the well. The OD600 of the wells in the plate can be measured over time using 
        a plate reader or Nanodrop device, allowing a researcher to directly observe the rate at 
        which different yeast strains break through the film. 
      </p>
      <p>
        For this screening device, we ordered transparent 96-well plates and the standard PET 
        film used in the original FAST-PETase study [1]. However, we could not find a gasket 
        suitable for our use, and instead decided to design one of our own. The process of 
        engineering this gasket required us to solve problems, think creatively, and iterate 
        over a wide variety of designs.
      </p>

      <h2>Design Specifications</h2>
      <p>
        We entered the initial design process for our gasket with a few key requirements in mind, and as we went through multiple prototype iterations, it became clearer what details were most important. Ultimately, we sought to make our gasket hydrophobic and impermeable, flexible, biologically inert, autoclavable, thick enough to be able to hold 150 μL of culture fluid above each well in the plate and thin enough for the entire screening device to fit into a plate reader. When, during our evaluation process, we were forced to choose between two characteristics of our gasket, we ended up adapting our screening methods to improve our solution.
      </p>

      <h2>Applying the Design Cycle</h2>
      <p>
      We used the principles of the design cycle to improve the properties of our gaskets over more than twenty prototype iterations. In general, our design pipeline had four repeating steps:
      </p>

      <h2>Design</h2>
      <p>
      Each time we started a new batch of gaskets, we asked ourselves: what variables should we manipulate? We tried a variety of silicone brands, mold shapes, handling methods, and processing steps (such as vacuum degassing, manual agitation, and heating) to improve the gasket quality.
      </p>

      <h2>Fabrication</h2>
      <p>
        While building our gaskets, we tried to be as consistent as possible, regardless of which lab member was carrying out the procedure. We kept detailed notes on our procedures to ensure reproducibility.
      </p>

      <h2>Testing</h2>
      <p>
        During or after the production of each gasket, we evaluated their properties as a function of the materials and steps involved in making them. At certain stages in the process, we created multiple gaskets in parallel to directly compare the effects of different treatments.
      </p>

      <h2>Review</h2>
      <p>
        With each new gasket we made, we considered the parts of our process that worked, and came up with alternative approaches where necessary. Sometimes, when we were unsure why a component failed, we proceeded with literature research or follow-up experiments. Reflecting on our results led us into the design step for the next iteration of the cycle.
      </p>


      <h1>Engineering the Gasket</h1>
      <h2>Choice in Materials</h2>
      <p>
        Although we considered a few other curable polymers, including epoxies and acrylics, we chose to use silicone in our gasket for its flexibility, biocompatibility, cure times, and thermostability. Initially, we decided to work with Smooth-On Solaris silicone because we were easily able to obtain it from a fellow researcher. Although the cured silicone had very suitable material properties, it had a long cure time and was prone to cure inhibition (i.e., the chemical conditions of the curing environment prevented the silicone mixture from solidifying). In response to these problems, we switched to Reschimica R PRO 30 silicone, which had a faster cure time and higher viscosity, making it easier to work with.
      </p>
      <h2>Molding the Gasket</h2>
      <p>
        To form the silicone into the appropriate gasket shape, we designed a 96-well-plate mold. We made an initial prototype mold for our gasket using a PCR tube rack and 96-well plate lid found in our lab. When we applied the silicone, the resultant prototype gasket was shaped and cured well, but not nearly thick enough to hold 150 μL of fluid in each well space. In response, we decided to refine the gasket mold to our exact dimensions through 3D printing. The mold design process went through many cycles of trial and error. In fact, we made a total of eight different versions of the gasket mold in Onshape, and printed each of them for testing.
      </p>
      <img 
        className="d-block mx-auto"
        src="https://static.igem.wiki/teams/4466/wiki/pages/engineering/ezgif-com-gif-maker.gif"
        alt="Gasket Mold Evolution"
        width="600px"
      />
      <caption className="d-block mx-auto text-center">Gasket Mold Evolution</caption>
      <p>
        Most of these versions varied the height or width of the pegs and walls of the mold, in order to fit the dimensional requirements while still allowing the silicone to be poured and later removed without distortions, cracks or bubbles. Two of the versions mark particularly interesting changes in our design thinking:
      </p>
      <ul>
        <li>
          Our Version 2 mold removed two of the walls on the mold, leaving it open at the ends so that the gasket was more directly accessible curing. We initially tried to cover these ends in tape, but later created tabs so that microscope slides could be inserted as walls while the silicone was curing within the mold. After the silicone hardened, the glass walls would be removed so that the gasket could be more easily peeled out of the mold.
        </li>
        <li>
          The Version 5 mold incorporated a two-layer system where the top piece of the mold could be pried out of the bottom piece to lift the gasket away from the mold pegs of the without bending it. Unfortunately, the R PRO 30 silicone was too viscous for this to work without the Version 5 mold breaking under the frictional stress caused by the separation of the two pieces.
        </li>
      </ul>

      <h1>Refinement of Production Techniques</h1>
      <p>
        Our initial gasket mold made from pieces of lab equipment produced a functional, albeit thin, gasket. However, the gaskets produced by the first few 3D-printed molds all came out largely uncured. They were sticky, messy, and more liquid than solid. 
      </p>
      <p>
        We weren’t sure what chemical was inhibiting the silicone curing reaction, but after a series of experiments and some research, we found a Reddit thread with some insight into our problem. As it turned out, our 3D printed molds were not fully cured themselves, and the photosensitive resin that had been used to make them contained traces of sulfates that disrupted the polymerization reaction of the silicone [2]. To wash out the sulfates, we incorporated a second cure cycle for our molds, rinsing them in isopropanol and placing them under UV light for six additional hours after they finished their standard wash and cure treatment. The extra exposure to UV made our molds more brittle, so that they often broke while in use making gaskets. However, the loss of mechanical integrity in the molds was worth the vastly improved quality of our gaskets.
      </p>
      <Container>
        <Row>
          <Col>
            <img 
              className="d-block mx-auto"
              src="https://static.igem.wiki/teams/4466/wiki/pages/engineering/bad-gasket.jpg"
              alt="Bad Gasket"
              width="400px"
            />
          </Col>
          <Col>
            <img 
              className="d-block mx-auto"
              src="https://static.igem.wiki/teams/4466/wiki/pages/engineering/meh-gasket.jpg"
              alt="Meh Gasket"
              width="400px"
            />
          </Col>
          <Col>
            <img 
              className="d-block mx-auto"
              src="https://static.igem.wiki/teams/4466/wiki/pages/engineering/great-gasket.jpg"
              alt="Great Gasket"
              width="400px"
            />
          </Col>
          <caption className="d-block mx-auto text-center">Gaskets of Varying Quality</caption>
        </Row>
      </Container>
      
      <h1>Quality Testing</h1>
      <p>
        Once our gasket prototypes met most of the mechanical and dimensional attributes we’d set, we tested them against our other specifications. First, we took small material samples of the R PRO 30 and autoclaved them to test their thermostability. Aside from some slight changes to the surface of the sample, which became glossier, we did not observe any changes to the sample after autoclaving. This finding is in keeping with our preliminary research about the thermostability of silicone [2]. We later autoclaved entire gaskets, with similar results. We also considered using PAP pens (markers with hydrophobic ink commonly used to separate wet samples in histology labs) to outline the edges between the gasket and the PET film, but decided that they did not meet our standards for sterility. 
      </p>
      <p>
        In order to ensure that our gasket could hold the appropriate volume of fluid without leaking, we stuck the gasket to a piece of PET film and filled a cluster of adjacent wells with water. In one of the wells in the cluster, we added tartrazine, a common food dye. We then waited for several hours to see whether the tartrazine would diffuse through the silicone with the water. We did not observe any change in color to the tartrazine-containing well or any of the surrounding wells, suggesting that the gasket is impermeable to water. Based on this test, we concluded that our gasket would function reliably as part of the PETase evolution screening device.
      </p>
      <Container>
        <Row>
          <Col>
            <img 
              className="d-block mx-auto"
              src="https://static.igem.wiki/teams/4466/wiki/pages/engineering/tartrazine-test-1.jpg"
              alt="Tartrazine Test 1"
              width="600px"
            />
            <caption className="d-block mx-auto text-center">Random Tartrazine Spot Test</caption>
          </Col>
          <Col>
            <img 
              className="d-block mx-auto"
              src="https://static.igem.wiki/teams/4466/wiki/pages/engineering/tartrazine-test-2.jpg"
              alt="Tartrazine Test 2"
              width="600px"
            />
            <caption className="d-block mx-auto text-center">Successful Tartrainze Test from Below</caption>
          </Col>
        </Row>
      </Container>
      <p>We were unfortunately unable to make the R PRO 30 gaskets thin enough to fit into a plate reader. However, the cell densities in the 96-well plate can be measured manually via Nanodrop, or the PET film can be removed from the system and visually inspected for holes made by PETase enzymes. As such, despite this limitation of our final gasket design, we consider the overall process a success.</p>
      
      <h1>References</h1>
      <ol className="references">
        <li>
        Lu H, Diaz DJ, Czarnecki NJ, Zhu C, Kim W, Shroff R, et al. Machine learning-aided engineering of hydrolases for PET depolymerization. Nature. 2022 Apr 27;604(7907):662–7.
        </li>
        <li>
        u/syphilitic_dementia. (2022, March 5). R/dicemaking - platinum silicone cure inhibition with SLA printed dice masters. Reddit. Retrieved October 12, 2022, from https://www.reddit.com/r/DiceMaking/comments/t7h9sd/platinum_silicone_cure_inhibition_with_sla/
        </li>
      </ol>
    </Template>
  );
}
