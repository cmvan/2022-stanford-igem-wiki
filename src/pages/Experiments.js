import Accordion from 'react-bootstrap/Accordion'
import Template from './Template';

export default function Experiments() {
  return (
    <Template title="Experiments">
      <h1>Core Experimental Procedures</h1>
      <p>
        As we sought to optimize PETase we went through a large process of cloning and constructing involving a plethora of experimental procedures. Some of our vital and more common experimental protocols are written below! 
      </p>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>MiniPreps</Accordion.Header>
          <Accordion.Body>
            <h2>Procedure: </h2>
            <ol>
              <li>
                Grow liquid cultures the night before with any particular antibiotic that is required. 
              </li>
              <li>
                Spray and wipe down the lab surface with ethanol to sterilize the environment.  
              </li>
              <li>
                Grab the overnight cell culture from the shaker.
              </li>
              <li>
                Make a Glycerol stock for each culture.
                <ul>
                  <li>Add 700ul of 50% glycerol to an 1.5mL eppendorf tube and 700uL cells.</li>
                  <li>Immediately place in the freezer at -80 degrees Fahrenheit.</li>
                </ul>
              </li>
              <li>
                Label 2ml tubes.
              </li>
              <li>
                Transfer 2ml of cells into each 2ml tube.
              </li>
              <li>
                Centrifuge cells for 1 minute at max speed.  
              </li>
              <li>
                Aspirate supernatant without disturbing the pellet.
                <ul>
                  <li>Repeat steps 6-8 for the remaining cultures</li>
                </ul>
              </li>
              <li>
                Add 250ul of P1 buffer. 
              </li>
              <li>
              Resuspend cells via raking tubes across the rack. 
              </li>
              <li>
              Add 250 ul of P2 lysis buffer and invert tube 4-6 times.
              </li>
              <li>
              Wait ~2min, no more than 5 minutes for neutralization.
              </li>
              <li>
              Add 350ul of N3 and invert 4-6 times.
              </li>
              <li>
              Centrifuge tubes for 8 minutes at max speed.
              </li>
              <li>
              Prepare blue spin columns. 
              </li>
              <li>
              Pipette 750 ul of supernatant into blue spin columns avoiding white precipitate. 
              </li>
              <li>
              Centrifuge for 30 seconds at max speed.
              </li>
              <li>
              Clean columns by carefully aspirating off of rims/around column opening. 
              </li>
              <li>
              Place column in new 2 ml cap-less tube.
                <ul>
                  <li>Repeat steps 16-19 if there is remaining supernatant. </li>
                </ul>
              </li>
              <li>
              Repeat steps 16-19 if there is remaining supernatant. 
              </li>
              <li>
              Centrifuge for 30 seconds at max speed.
              </li>
              <li>
              Clean column: aspirate off of rims. 
              </li>
              <li>
              Place column in new 2 ml cap-less tube.
              </li>
              <li>
              Repeat steps 20-23 for a second PE wash.
              </li>
              <li>
              Dry-spin column for 1 minute at max speed.
              </li>
              <li>
              Clean column by aspirating off of rims.
              </li>
              <li>
              Place column into new cap-less 1.7ml tube.
              </li>
              <li>
              Add 80ul of elution buffer directly onto the column filter.
              </li>
              <li>
              Wait for 1 minute and centrifuge for 1 min.
              </li>
              <li>
              Measure its concentration using nanodrop.
              </li>
              <li>
              Store miniprepped DNA in the fridge.
              </li>
            </ol>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Yeast gDNA Extraction</Accordion.Header>
          <Accordion.Body>
            <h2>Procedure: </h2>
            <ol>
              <li>
              From an overnight yeast culture, pipette 500ul into a 1.7ml tube with the spin cap. Label.
              </li>
              <li>
              Spin at 6000 rcf for ~ 4 minutes.
              </li>
              <li>
              Aspirate the supernatant using sterile pipette tips. 
              </li>
              <li>
              Resuspend the pellet using 400-500ul TTESS and add 1ul of Rnase A (yellow cooler box in mini freezer).
              </li>
              <li>
              Add micro beads (~1/3 of the pcr tube of beads) into the tube and vortex for 1 minute.
              </li>
              <li>
              Add 100ul phenol (in the 4°C fridge) from the bottom of the bottle into the tube.
              </li>
              <li>
              Centrifuge at high speed for ~3 minutes.
              </li>
              <li>
              Pipette 300ul from the top layer of the tube into a new and labeled 1.7ml tube.
              </li>
              <li>
              Add 10% of that volume of Sodium Acetate (NaAc) and 2 volumes of IPA?? (Ex. For 300ul dna, add 30ul NaAc and 660ul IPA).
              </li>
              <li>
              Place in the -20°C freezer for 1 minute (not sure if this order is correct).
              </li>
              <li>
              Centrifuge again 10 min
              </li>
              <li>
              Carefully aspirate the supernatant without disturbing the pellet (it’s very small!).
              </li>
              <li>
              Add ~ 500ul of 70% Ethanol (Etoh) and centrifuge.
              </li>
              <li>
              Add ~ 50ul of 70% Ethanol and centrifuge.
              </li>
              <li>
              Add ~ 20ul elution buffer to dissolve the pellet. Wait about 10 minutes.
              </li>
              <li>
              Vortex and centrifuge.
              </li>
              <li>
              Measure the concentration of the sample. Using the nanodrop.
              <ol type="A">
                <li>Blank the spectrophotometer with a 1.5ul elution buffer.</li>
                <li>Measure 1.5ul of the gdna</li>
              </ol>
              </li>
            </ol>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Gel Electrophoresis</Accordion.Header>
          <Accordion.Body>
            <h2>Procedure: </h2>
            <ol>
              <li>
              Make 500ml of 1x TBE buffer (50ml of 10x TAE buffer, and add milliq water to bring up to 500mL)
              </li>
              <li>
              Measure ~1% (might vary depending on size of sample) of agarose powder 
              </li>
              <li>
              Mix agarose powder with 140 mL of 1X TBE Buffer in a 500ml microwavable flask.
              </li>
              <li>
              Microwave for 1-3 min until the agarose is completely dissolved (but do not overboil the solution; microwave in pulses, swirling the flask occasionally as the solution heats up.)
              </li>
              <li>
              Let agarose solution cool down to about 50 °C (about when you can comfortably keep your hand on the flask), about 2-5 mins.
              </li>
              <li>
              Add 1:10000 dilution of dye to agarose solution in flask 
              </li>
              <li>
              Gently swirl dye in flask until the solution appears homogenous (avoid bubble formation in the flask)
              </li>
              <li>
              Take the agarose solution and the gel tray/holder/comb into cold room
              </li>
              <li>
              Pour the agarose into a gel tray with the gel holder and well comb in place, can use small gel holder, will need about 25mL of agarose solution
              </li>
              <li>
              Leave in cold room at 4C for 20-30mins to solidify.
              </li>
              <li>
              Collect the DNA sample and put it on ice
              </li>
              <li>
              Locate the DNA ladder
              </li>
              <li>
              Once solidified, place the agarose gel in gel holder into the gel box (electrophoresis unit).
              </li>
              <li>
              Fill gel box with TBE until the gel is covered
              </li>
              <li>
              Turn on gel viewer to pre-cool it (on button is on the back right side, next to the power cord)
              </li>
              <li>
              Carefully load your sample into the second wells of the gel. 
              </li>
              <li>
              Carefully load DNA molecular weight ladder into the third lane of the gel
              </li>
              <li>
              Run the gel at 80-150 V until the dye line is approximately 75-80% of the way down the gel. A typical run time is about 30 minutes, depending on the gel concentration and voltage; keep checking every 10 minutes or so to make sure you don't run off the gel.
              </li>
              <li>
                When bubbles start to for at both nodes, turn OFF power, disconnect the electrodes from the power source, and then carefully remove the gel from the gel box.
              </li>
              <li>
              Take a photo of the gel with the gel viewer (use blue multifluor settings) 
              </li>
              <li>
              Take gel to gel imager in dark room, place gel on illuminator and turn on UV (can look with orange UV glasses) and take a picture with your phone (need to hold orange plastic over gel and phone on top of that)
              </li>
              <li>
              Cut the bands out of the gel and store them in Eppendorf tubes in the 4°C fridge (in the iGEM box) 
              </li>
              <li>
              Label tubes w/ plasmid name on lid, plasmid name and date on the side of the tube
              </li>
            </ol>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>Gel Purification</Accordion.Header>
          <Accordion.Body>
          <h2>Procedure: </h2>
          <ol>
              <li>
              Weigh gel fragment (write weight on tube), then add 3X volume of gel solubilization/QG buffer (yellow) (6X for ≥1.8% gels) (100mg = 100ul)
              </li>
              <li>
              Incubate in the shaker at 50 °C for ~3-5 min at 1000 RPM. 
              </li>
              <li>
              Add 1 gel volume of isopropyl alcohol (IPA).
              </li>
              <li>
              Dispense 750ul of solution into a Zymo-Spin I column (white tube) (Cat# C1003-50) inserted into a 2.0ml Eppendorf tube. 
              </li>
              <li>
              Centrifuge for 1 min. Then repeat this step if there is remaining leftover gel solution from steps 1-4.
              </li>
              <li>
              Transfer column to new 2.0 ml Eppendorf tube, add 500 μl of PE wash buffer then centrifuge for 30 seconds
              </li>
              <li>
              Transfer column to new 1.5 ml Eppendorf tube, and add 15μl of elution buffer depending on the downstream step and brightness of the band.
              </li>
              <li>
              Dispense elution buffer directly onto the column, let sit for 1 min, and then centrifuge for 1 min. We elute in 15ul.
              </li>
              <li>
              Transfer elution to new 1.5 ml Eppendorf tube and label with description, name, date. Nanodrop and write concentration on a tube.
              </li>
              <li>
              Store labeled Eppendorf tube in the fridge.
              </li>

            </ol>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>PCR</Accordion.Header>
          <Accordion.Body>
            <h2>Procedure: </h2>
            <ol>
              <li>
              Spin dried-primers down → 30 seconds, Max speed 
              </li>
              <li>
              make a 100uM primer stock out of freeze-dried primers: on the tube, check what the nmole value is and calculate how much milliQ water you would need to add to create a 100uM or 100,000nM concentration
              </li>
              <li>
              # nmol/x L = 100,000 nmol/L, solve for x (remember to change units from L to ul)
              </li>
              <li>
              Using the 100uM stock, create a 10uM stock to use in PCR added 20ul of 100uM primer with 180ul of water into an Eppendorf tube
              </li>
              <li>
              Dilute the template plasmid (PETase plasmid [727-1]: 86.3 ng/ul) to 20ng/ul of integration plasmid for PCR to create 10ul of diluted plasmid
                <ul>
                  <li>use CV1 = CV2</li>
                  <li>200/86.3 ul = 2.4 ul = Volume of integration plasmid; added 7.6 ul of H20 for a 10ul total volume</li>
                </ul>
              </li>
              <li>
              Gather PCR tubes 8 pcr tubes (2 replicates of 4 amplified sequences)- we mixed 1x the total reaction in four tubes, then aliquoted 25 uL to each
              </li>
              <li>
              MilliQ water, Dntp, add integration plasmid, forward primer, reverse primer, 2x Xtreme Buffer, KOD Xtreme
              </li>
              <li>
              Gently pipette up and down well!
              </li>
              <li>
              After adding and mixing everything listed above, add the KOD enzyme made some mistakes, and repeat this a few times (the total final volume should be ~25ul)
              </li>
              <li>
              Put diluted 10uM primer stocks in the 4°C fridge
              </li>
              <li>
              Put 100uM primer stock in a -20°C fridge
              </li>
              <li>
              Store back integration plasmid and dilution stock in the 4°C fridge
              </li>
            </ol>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5">
          <Accordion.Header>Gasket Formulation</Accordion.Header>
          <Accordion.Body>
            <h2>Procedure: </h2>
            <ol>
              <li>
              Slip the top piece of the 2-piece mold into the bottom piece of the 2-piece mold
              </li>
              <li>
              Insert the microscope slides along the short sides of the mold
              </li>
              <li>
              Secure the perimeter with green autoclave tape.
              </li>
              <li>
              Stir the silicon mix part A for approximately 3 minutes 
              </li>
              <li>
              Place the first weighboat on the balance and zero the balance out
              </li>
              <li>
              Pour 35 g of silicon mix part A into the weighboat 
              </li>
              <li>
              Stir silicon mix part B for approximately 3 minutes
              </li>
              <li>
              Pour the 35 g of silicon mix part B into the weighboat to maintain the 1:1 ratio 
              </li>
              <li>
              With 70 g of mix total in the weighboat, stir the mixture for 3 minutes with the lab spoon 
              </li>
              <li>
              Pour the mix into the second weighboat and stir the mixture for another 3 minutes with the lab spoon
              </li>
              <li>
              Place the weighboat with the mixture into the vacuum chamber and run it for 15 minutes
              </li>
              <li>
              Set the incubator to 37° C and preheat
              </li>
              <li>
              Once the vacuum has run for about 10 minutes, apply a light mist of mold release spray, disperse the spray with a toothbrush, and then apply another layer before letting it sit for five minutes
              </li>
              <li>
              Once the vacuum has run for about 10 minutes, apply a light mist of mold release spray, disperse the spray with a toothbrush, and then apply another layer before letting it sit for five minutes
              </li>
              <li>
              Move the gasket to the incubator and let it cure for 1 hour
              </li>
              <li>
              Clean the stirring rods and metal lab spoon by wiping them with a kimwipe alone and then a kimwipe with acetone on it
              </li>
              <li>
              Remove the gasket from the mold and trim the gasket using the stirring rod, scalpel, and tweezers
              </li>
              <li>
              Clean the mold by rinsing with water and scrubbing with a toothbrush and/or bottle brush
              </li>
            </ol>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

    </Template>
  );
}
