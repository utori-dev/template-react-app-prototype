import styled from '@emotion/styled';
import * as React from 'react';
import { css, keyframes } from '@emotion/react';

const flicker = keyframes`
  from  { opacity: 0; }
  0%    { opacity: 1; }
  3%    { opacity: 0.4; }
  6%    { opacity: 1; }
  7%    { opacity: 0.4; }
  8%    { opacity: 1; }
  9%    { opacity: 0.4; }
  10%   { opacity: 1; }
  89%   { opacity: 1; }
  90%   { opacity: 0.4; }
  100%  { opacity: 0.4; }
  to    { opacity: 1; }
`;

const Section = styled.section`
  display: flex;
  flex-flow: column;
  align-items: center;
`;

const TextContainer = styled.div`
  max-width: 40rem;
  margin: auto;
  text-align: left;
`;

const Paragraph = styled.p`
  a {
    margin-left: 0.5rem;
  }
`;

/**
 * Props for the Main
 */
export type MainProps = React.HTMLAttributes<HTMLDivElement>;

/**
 * Contains the main content for the app.
 *
 * @param props
 * @returns
 */
const Main: React.FC<MainProps> = (props) => {
  return (
    <div
      css={css`
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        position: relative;
        padding: var(--p--xl);
        overflow: auto;
        color: inherit;
        background: transparent;
      `}
    >
      <Section
        css={css`
          display: flex;
          flex-flow: column;
          align-items: center;
          margin-bottom: 2rem;
        `}
      >
        <h2
          css={css`
            text-align: center;
          `}
        >
          Utori dev
        </h2>
        <svg
          xmlnsXlink="http://www.w3.org/1999/xlink"
          version="1.1"
          width="200"
          height="200"
          fill="#4898da"
          stroke="none"
          viewBox="0 0 100 100"
        >
          <defs>
            <filter id="shadow1">
              <feDropShadow
                opacity="0.2"
                floodColor="#326a98"
                dx="0.4"
                dy="0.4"
                stdDeviation="0.2"
              />
            </filter>
            <filter id="shadow2">
              <feDropShadow dx="0.4" dy="0.4" stdDeviation="0.2" />
            </filter>
          </defs>
          <rect rx="100" ry="100" x="0" y="0" fill="white" />
          <path
            d="M 15,15 L 15,50 A 35,35 0,1,0 85,50 L 85,15 L 60,15 L 60,50 A 10,10 0,0,1 50,60 L 50,50 L 15,15"
            fill="#4898da"
            stroke="none"
            filter="url(#shadow1)"
          />
          <path
            d="M 0,0 L 45,45 L 40,55 L 100,100 L 55,55 L 60,45 L 0,0"
            fill="#000000"
            stroke="none"
            filter="url(#shadow2)"
            css={css`
              animation: ${flicker} 6s linear 3s infinite;
            `}
          ></path>
        </svg>
      </Section>

      <Section>
        <h3>Purpose</h3>
        <TextContainer>
          <Paragraph>
            Starter React app with TypeScript and several helpful dependencies.
          </Paragraph>
          <Paragraph>
            This template is ideal for prototypes, but includes more
            dependencies that are likely needed for your individual use case.
            It's a good idea to review these dependencies and remove any you
            find unnecessary. This template is quite restrictive to encourage
            good practices, even while prototyping. Feel free to remove these
            restrictions if you decide they are unnecessary.
          </Paragraph>
          <Paragraph>
            The repository can be viewed here:
            <a href="https://github.com/utori-dev/template-react-app-prototype">
              GitHub Repo
            </a>
          </Paragraph>
        </TextContainer>
      </Section>
    </div>
  );
};

export default Main;
