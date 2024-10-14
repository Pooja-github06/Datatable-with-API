// import React, { StrictMode } from 'react';
// import { createRoot } from 'react-dom/client';

// import App from './App';

// const rootElement = document.getElementById('root');
// const root = createRoot(rootElement);

// root.render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider } from './ThemeContext';

ReactDOM.render(
    <ThemeProvider>
        <App />
    </ThemeProvider>,
    document.getElementById('root')
);
