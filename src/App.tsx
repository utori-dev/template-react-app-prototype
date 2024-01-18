import * as React from 'react';
import styled from '@emotion/styled';
import clsx from 'clsx';
import { text } from './ui/emotion';
import { toggleThemeMode, useThemeMode } from './state';
import { Button, Header, Main } from './ui/components';
import { DarkModeIcon, LightModeIcon } from './ui/icons';

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
      <Header>
        <Header.Title to="/">Prototype React App</Header.Title>
        <Header.Actions>
          <Button
            iconOnly
            label="Toggle Light and Dark Mode"
            onClick={toggleThemeMode}
            icon={mode === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
          />
        </Header.Actions>
      </Header>
      <Main>
        Lorem ipsum dolor sit amet, consectetur adipiscing yada yada...
      </Main>
    </AppRoot>
  );
}

export default App;
