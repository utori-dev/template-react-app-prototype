import styled from '@emotion/styled';
import * as React from 'react';
import { css } from '@emotion/react';
import { UtoriLogoIcon } from '../../icons';

const Section = styled.section`
  display: flex;
  flex-flow: column;
  align-items: center;
  margin-bottom: 2rem;
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

const List = styled.ul`
  list-style-type: none;
`;

const ListItem = styled.li`
  padding: 0.5rem 0rem;
  margin: 0.5rem 0rem;
`;

const Span = styled.span`
  padding: 0.35rem;
  border-radius: 0.25rem;
  color: black;
  background-color: lightgray;
  font-style: italic;
  font-weight: 600;
  letter-spacing: 0.05em;
`;

const H3 = styled.h3`
  margin-bottom: 0rem;
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
const Main: React.FC<MainProps> = (props) => (
  <div
    {...props}
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
    <Section>
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
      <H3>Purpose</H3>
      <TextContainer>
        <Paragraph>
          Starter React app with TypeScript and several helpful dependencies.
        </Paragraph>
        <Paragraph>
          This template is ideal for prototypes, but includes more dependencies
          that are likely needed for your individual use case. It is a good idea
          to review these dependencies and remove any you find unnecessary. This
          template is quite restrictive to encourage good practices, even while
          prototyping. Feel free to remove these restrictions if you decide they
          are unnecessary.
        </Paragraph>
        <Paragraph>
          The repository can be viewed here:
          <a href="https://github.com/utori-dev/template-react-app-prototype">
            GitHub Repo
          </a>
        </Paragraph>
      </TextContainer>
    </Section>

    <Section>
      <H3>Useful Scripts</H3>
      <List>
        <ListItem>
          <i>
            npm run generate:icon <b>icon name</b>
          </i>
          <div>
            Used to generate a React icon/svg component which will be saved to{' '}
            <Span>./src/ui/icons/</Span>
          </div>
        </ListItem>
        <ListItem>
          <i>
            npm run generate:emotion <b>emotion name</b>
          </i>
          <div>
            Used to generate an Emotion.js template file which will be saved to{' '}
            <Span>./src/ui/emotion/</Span>
          </div>
        </ListItem>
        <ListItem>
          <i>
            npm run generate:component <b>component name</b>
          </i>
          <div>
            Used to generate a React functional component which will be saved to{' '}
            <Span>./src/ui/components/</Span>
          </div>
        </ListItem>
        <ListItem>
          <i>
            npm run generate:view <b>view name</b>
          </i>
          <div>
            Used to generate a React functional component which will be saved to{' '}
            <Span>./src/views/</Span>
          </div>
        </ListItem>
      </List>
    </Section>
  </div>
);

export default Main;
