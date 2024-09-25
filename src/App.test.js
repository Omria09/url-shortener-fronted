import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

import axios from 'axios';
jest.mock('axios');


test('renders URL Shortener heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/URL Shortener/i);
  expect(headingElement).toBeInTheDocument();
});

test('allows entering a URL', () => {
  render(<App />);
  const input = screen.getByPlaceholderText(/Enter URL/i);
  fireEvent.change(input, { target: { value: 'https://www.example.com' } });
  expect(input.value).toBe('https://www.example.com');
});

axios.post.mockResolvedValue({
  data: {
    originalUrl: 'https://www.example.com',
    shortUrl: 'link.ktzr.lol/abc123'
  }
});

test('displays shortened URL or error message after submission', async () => {
  render(<App />);
  const input = screen.getByPlaceholderText(/Enter URL/i);
  const submitButton = screen.getByText('Shorten', {exact: true});

  fireEvent.change(input, { target: { value: 'https://www.example.com' } });
  fireEvent.click(submitButton);

  await waitFor(() => {
    const result = screen.getByText(/link\.ktzr\.lol\/abc123|Invalid URL/);
    expect(result).toBeInTheDocument();
  });
});


test('shows error message for invalid URL', async () => {
  render(<App />);
  const input = screen.getByPlaceholderText(/Enter URL/i);
  const submitButton = screen.getByText('Shorten', {exact: true});

  fireEvent.change(input, { target: { value: 'invalid-url' } });
  fireEvent.click(submitButton);

  await waitFor(() => {
    const errorMessage = screen.getByText(/Invalid URL/i);
    expect(errorMessage).toBeInTheDocument();
  });
});