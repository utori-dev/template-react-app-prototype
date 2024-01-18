import * as React from 'react';
import styled from '@emotion/styled';
import clsx from 'clsx';
import { heading, text } from './ui/emotion';
import { useThemeMode } from './state';

const AppRoot = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  overflow: hidden;
  display: flex;
  flex-flow: column nowrap;

  background: var(--color--background);
  color: var(--color--on-background);

  ${text.md}
`;

function App(): React.ReactElement | null {
  const mode = useThemeMode();

  React.useEffect(() => {
    document.body.className = clsx({
      'dark-mode': mode === 'dark',
      'light-mode': mode === 'light',
    });
  }, [mode]);

  return (
    <AppRoot>
      <h1 css={heading.lg}>Hello World</h1>
    </AppRoot>
  );
}

export default App;
