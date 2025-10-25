/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */

import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { arrayRandomItem } from 'codewonders-helpers';
import { motion } from 'framer-motion';

/* -------------------------- Internal Dependencies ------------------------- */

import Layout, { PageWrapper } from '../components/Layout';
import FooterLink from '../components/Footer';
import MansoryLayout from '../components/Mansory';
import MansoryItem from '../components/Mansory/mansory-item';
import { ProjectsContext } from '../components/Utils/context';
import { getTransitions } from '../components/Utils';

/* -------------------------------------------------------------------------- */
/*                                  Component                                 */
/* -------------------------------------------------------------------------- */

const Home = () => {
  const [color] = useState(arrayRandomItem(['#37609c', '#34c759', '#5856d6']));
  const projectsData = useContext(ProjectsContext);

  return (
    <Layout>
      <PageSection color={color}>
        <PageWrapper>
          {/* ---------------------------- INTRO SECTION ---------------------------- */}
          <article>
            <motion.h1
              data-text="I'm Ahmed Ismail"
              className="intro__text"
              {...getTransitions(0.1)}
            >
              <mark className="mark">I&apos;m Ahmed Ismail</mark>
            </motion.h1>

            <motion.p {...getTransitions(0.3)}>
              A passionate <strong>Data Scientist</strong> who transforms raw
              data into meaningful insights. I specialize in{' '}
              <strong>machine learning</strong>,{' '}
              <strong>data visualization</strong>, and{' '}
              <strong>predictive analytics</strong>. I love exploring patterns in
              numbers and translating them into real-world impact.
            </motion.p>

            <motion.p {...getTransitions(0.5)}>
              When I’m not analyzing datasets or training models, I’m usually
              exploring new technologies, reading about AI and data science, or
              creating projects that mix creativity and science. If you’d like
              to collaborate or chat, feel free to reach out anytime.
            </motion.p>
          </article>

          <br />

          {/* ---------------------------- PROJECTS SECTION ---------------------------- */}
          <section className="projects">
            <motion.h2
              className="intro__text projects__title"
              {...getTransitions(0.9)}
            >
              Featured Projects
            </motion.h2>
            <MansoryLayout>
              {projectsData.slice(0, 5).map((item, index) => (
                <MansoryItem
                  key={index}
                  item={{
                    ...item,
                    imageUrl:
                      typeof item.imageUrl === 'string'
                        ? item.imageUrl
                        : item.imageUrl?.src || '',
                  }}
                />
              ))}
            </MansoryLayout>
          </section>

          <motion.div {...getTransitions(1.1)}>
            <FooterLink goto="/resume" hidden>View Resume</FooterLink>
          </motion.div>
        </PageWrapper>
      </PageSection>
    </Layout>
  );
};

/* -------------------------------------------------------------------------- */
/*                                   STYLES                                  */
/* -------------------------------------------------------------------------- */

const PageSection = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .intro__text {
    font-size: 2.275em;
    font-weight: 600;
    margin: 2rem 0 1.5rem;
    position: relative;
    text-transform: uppercase;
    letter-spacing: 8px;
  }

  p {
    font-size: calc(var(--font-sm) + 0.9px);
    line-height: 2.3;
    font-weight: 400;
    color: var(--article-color) !important;
    max-width: 800px;
    margin-bottom: 1rem;
  }

  .projects {
    margin-top: 5rem;
    width: 100%;
  }

  .projects__title {
    text-align: left;
    font-size: 2rem;
    margin-bottom: 2rem;
  }

  /* Responsive styles */
  @media (max-width: 989px) {
    .intro__text {
      text-align: center;
      font-size: 1.9rem;
    }

    p {
      text-align: center;
    }

    .projects__title {
      text-align: center;
    }
  }

  @media (max-width: 585px) {
    padding: 2rem 0;
    p {
      font-size: 0.95rem;
    }
  }
`;

export default Home;
