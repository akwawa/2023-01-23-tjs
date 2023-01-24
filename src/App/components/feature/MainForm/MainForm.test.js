import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MainForm from './MainForm';

describe('<MainForm />', () => {
  test('it should mount', () => {
    render(<MainForm />);
    
    const mainForm = screen.getByTestId('MainForm');

    expect(mainForm).toBeInTheDocument();
  });
});