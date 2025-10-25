/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */

import React, { useContext } from 'react';
import styled from 'styled-components';

/* -------------------------- Internal Dependencies ------------------------- */

import Layout, { PageWrapper } from '../components/Layout';
import FooterLink from '../components/Footer';
import MansoryLayout from '../components/Mansory';
import MansoryItem from '../components/Mansory/mansory-item';
import { ProjectsContext } from '../components/Utils/context';

/* -------------------------------------------------------------------------- */
/*                                  Component                                 */
/* -------------------------------------------------------------------------- */

const Projects = () => {
  const projectsData = useContext(ProjectsContext);

  return (
    <Layout title="About & Projects">
      <PageSection>
        <PageWrapper>
          {/* ---------------------------- ABOUT SECTION ---------------------------- */}
          <section className="about">
            <h1 className="intro__text">About Me</h1>
            <p>
              Hi, I’m <strong>Ahmed Ismail</strong>, a passionate{' '}
              <strong>Data Scientist</strong> who loves transforming raw data
              into meaningful insights. I specialize in{' '}
              <strong>machine learning</strong>, <strong>data visualization</strong>, 
              and <strong>predictive analytics</strong>. My goal is to blend data,
              logic, and creativity to solve real-world problems and help
              businesses make smarter, data-driven decisions.
            </p>
            <p>
              When I’m not analyzing datasets or training models, I enjoy
              exploring new technologies, reading about AI advancements, and
              experimenting with side projects that mix science and creativity.
            </p>
          </section>

          {/* ---------------------------- PROJECTS SECTION ---------------------------- */}
          <section className="projects">
            <h2 className="intro__text">Projects</h2>
            <MansoryLayout>
              {projectsData.slice(0, 5).map((item, index) => (
                <MansoryItem key={index} item={item} />
              ))}
            </MansoryLayout>
          </section>

          <FooterLink goto="/resume" className="mt-3 mb-5">
            View My Resume
          </FooterLink>
        </PageWrapper>
      </PageSection>
    </Layout>
  );
};

/* -------------------------------------------------------------------------- */
/*                                    STYLES                                  */
/* -------------------------------------------------------------------------- */

export const PageSection = styled.div`
  padding: 2rem 0;

  .about {
    margin-bottom: 4rem;
  }

  .intro__text {
    font-size: clamp(1.8rem, 4vw, 2.6rem);
    font-weight: 900;
    margin: 2rem 0 1.5rem;
    position: relative;
    color: var(--text-color, #111);
  }

  p {
    font-size: calc(var(--font-sm) + 0.8px);
    line-height: 1.9;
    font-weight: 400;
    color: var(--article-color);
    margin-bottom: 1rem;
  }

  /* Responsive grid & layout */
  @media (max-width: 1024px) {
    .intro__text {
      text-align: center;
    }
    p {
      text-align: center;
      font-size: 0.95rem;
    }
  }

  @media (max-width: 768px) {
    .projects {
      margin-top: 3rem;
    }
  }

  @media (max-width: 480px) {
    .intro__text {
      font-size: 1.6rem;
    }
    p {
      font-size: 0.9rem;
    }
  }
`;

export default Projects;
