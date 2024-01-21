import styled from '@emotion/styled';
import * as React from 'react';
import { css } from '@emotion/react';
import { UtoriLogoIcon } from '../../icons';

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
        <UtoriLogoIcon
          xmlnsXlink="http://www.w3.org/1999/xlink"
          version="1.1"
          width="200"
          height="200"
          fill="#4898da"
          stroke="none"
          viewBox="0 0 100 100"
        />
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
