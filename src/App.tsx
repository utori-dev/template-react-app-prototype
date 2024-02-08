import * as React from 'react';
import styled from '@emotion/styled';
import clsx from 'clsx';
import { Navigate, Route, Routes } from 'react-router-dom';
import { text } from './ui/emotion';
import {
  openCreditsDialog,
  toggleThemeModeAction,
  useThemeMode,
} from './state';
import { Button, Header, Main } from './ui/components';
import { DarkModeIcon, InfoIcon, LightModeIcon } from './ui/icons';
import { CreditsDialog, HomeView } from './views';

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
            onClick={toggleThemeModeAction}
            icon={mode === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
          />
          <Button
            iconOnly
            label="View Credits"
            onClick={openCreditsDialog}
            icon={<InfoIcon />}
          />
        </Header.Actions>
      </Header>
      <Main>
        <Routes>
          <Route path="/" element={<Navigate to="home" />} />
          <Route path="/home">
            <Route index element={<HomeView />} />
          </Route>
        </Routes>
      </Main>
      <CreditsDialog />
    </AppRoot>
  );
}

export default App;
