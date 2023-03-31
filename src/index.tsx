import * as React from 'react';
import { createRoot } from 'react-dom/client';

// Ensure that the styles from index.css are included.
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import App from './App';

const container = document.getElementById('app');
const root = createRoot(container!);
root.render(<App />);

window.addEventListener('load', registerServiceWorker);
