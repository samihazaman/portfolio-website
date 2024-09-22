import React from 'react';

import { Section, SectionText, SectionTitle, Link } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hey there,
        </SectionTitle>
        <SectionText>
        I'm Samiha, a student at CUNY Queens College majoring in computer science with a minor in interaction design. 
        I'm an aspiring software engineer and web developer with hands-on experiences in a variety of projects. 
        I aim to create impactful digital solutions for real-world challenges. 
        Explore my projects on GitHub to see how I combine design, development, and problem-solving in innovative ways.


        </SectionText>
        <Button onClick={(e) => {
          e.preventDefault();
          if (typeof window !== 'undefined') {
            window.location.href = '/files/Samiha Zaman Resume.pdf'; // Ensure this only runs on the client-side
          }
        }}>My Resume</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
