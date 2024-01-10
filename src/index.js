import React from 'react';
import { createRoot } from 'react-dom/client';
import App from '../src/components/App/App';

const app = createRoot(document.getElementById('app'));

app.render(<App />);