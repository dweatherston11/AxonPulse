// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders AxonPulse title', () => {
    render(<App />);
    const titleElement = screen.getByText(/AxonPulse/i);
    expect(titleElement).toBeInTheDocument();
});
