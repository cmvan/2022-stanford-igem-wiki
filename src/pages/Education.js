import Accordion from 'react-bootstrap/Accordion'
import Template from './Template';

export default function Education() {
  return (
    <Template title="Education">
      <h1>The Stanford iGEM High School Synthetic Biology Summer Session</h1>
      <p>
        While the COVID-19 pandemic took so much from us as a society and wreaked havoc, it lead to the arisal of a new era of education––	virtual education. Thanks to the pandemic, virtual education programs and classes are much more common and widely accepted with many individuals adapted to the virtual format. To foster a diverse and inclusive student population, our team decided to capitalize on virtual learning to create a synthetic biology summer session program for high school students across the world. 
      </p>

      <h3>Program Goals and Preparations</h3>
      <p>
        With great emphasis on accessibility,  a goal of our team when discussing our target audience was to encourage recruitment from underrepresented minority groups and low income students that would have otherwise not had the opportunity or exposure to learn about synthetic biology. We ensured that we outreached to highschools historically located in low-demographic  and low-income areas and high school programs targeted towards diverse student populations such as EMERGE, LEDA, and MITES. We particularly sought to research and outreach to title 1 high schools through discussions with students who had previously attended a title 1 high school and extensive research. 
      </p>
      <p>
        In preparation, we established a set sign up form, zoom links for each day, and a mailing list to ensure effective communication and means for us to share the individually made assignments, submission forms, lecture recordings, and slideshows with the students. We also onboarded each student attaining the necessary paperwork to work with minors and while his/her/their guardian completed it, offering them general and language interpretation assistance. Logistically, the summer session spanned over 4 weeks from August 29th to September 21st with sessions held twice a week on Mondays and Wednesdays from 5:00PM to 7:00PM PST. Mondays were reserved for lectures on our weekly synthetic biology topic and were recorded in case students were unable to attend a lecture. Wednesdays were reserved for our wonderful guest speakers followed by office hours. 
      </p>
      <img 
        className="d-block mx-auto"
        src="https://static.igem.wiki/teams/4466/wiki/pages/education/summer-session-flyer.png"
        alt="Summer Session Flyer"
        width="300px"
      />
      <caption className="d-block mx-auto text-center">Flyer Pubbing Stanford iGEM's Education Program</caption>

      <h3>Thoughtful Content Development and Presentation</h3>
      <p>
        Content wise––week one revolved around protein modeling, week two around biological chassis and model organisms, week three around plasmid design and codon optimization, and week four around computational methods in synthetic biology. Interestingly, during the second week of the program, our team collaborated with the Yale iGEM team while lecturing. In terms of our speaker series on Wednesday, our speakers consisted of renounced synthetic biology researchers: Dr. Brophy, Dr. Coleman, and Dr. Endy with week 2 speakers consisting of a panel of the Stanford and Yale iGEM team for questions revolving around research, college, iGEM, and synthetic biology. Afterwards, all accompanied by office hours to ensure that students had the help they needed while completing the assignment and option, but recommended challenge assignment. 
      </p>
      <p>
        We ensured throughout the entire education process, we were accommodating to all. We made certain that a plethora of languages would be offered during our office hours to accommodate students whose first language was not English having the presence of Spanish, Punjabi, English, Hindi, Urdu, German, Japanese, French, Mandarin, and Vietnamese interpreters present––further emphasizing the desire to implement a successful and impactful education program. We even ensured to be accommodating to those afflicted with contrast sensitivity and color blindness throughout the content of the program itself and our communicative and administrative interactions. Equally important, during each and every lecture, we made sure to record, enable live captioning, and use inclusive verbiage. 
      </p>
      <p>
        After each lecture, we sent out the weekly assignments, challenge assignments, the slideshows, and recordings we produced along with helpful resources. The challenge assignment was ultimately optional but recommended in order to make certain that we were not inflicting any student with stress. Each assignment and challenge was related to the topic covered that week. Full credit was provided with immense feedback to students who completed the assignment to both facilitate student learning and further minimize stress. Upon completion of all four assignments, the students received a certificate of completion. See examples of what these assignments looked like below:
      </p>
      <p>
        View the content of our lectures below.
      </p>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>8/29 Proteins Lecture Slides</Accordion.Header>
          <Accordion.Body>
            <iframe title="8/29 Protein Lecture Slides" width="100%" height="620" src="https://static.igem.wiki/teams/4466/wiki/pages/education/08-29-22-proteins-lecture-slides.pdf"></iframe>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>8/29 Proteins Lecture Slides</Accordion.Header>
          <Accordion.Body>
            <iframe title="9/12 Plasmids and DNA Design Lecture Slides" width="100%" height="620" src="https://static.igem.wiki/teams/4466/wiki/pages/education/09-12-22-plasmids-and-dna-design-lecture.pdf"></iframe>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>8/29 Proteins Lecture Slides</Accordion.Header>
          <Accordion.Body>
            <iframe title="9/19 Computataional Methods in Synthetic Biology Lecture Slides" width="100%" height="620" src="https://static.igem.wiki/teams/4466/wiki/pages/education/09-19-22-computational-methods-in-synthetic-biology.pdf"></iframe>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <h3>Reflections</h3>
      <p>
        Our team valued the quality of experience for our participants and to learn more about these efforts learn more through our communication and inclusivity sections. We sought to educate students on the intricacies of synthetic biology research, encourage and enable students to pursue research, and to provide students with basic computational skills that would be applicable to synthetic biology research and other related fields. Through our program, we hoped to inspire these students to pursue opportunities in bioscience research in college and beyond.
      </p>
    </Template>
  );
}
