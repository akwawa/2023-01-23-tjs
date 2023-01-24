import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SvgViewer from './SvgViewer';

describe('<SvgViewer />', () => {
  test('it should mount', () => {
    render(<SvgViewer />);
    
    const svgViewer = screen.getByTestId('SvgViewer');

    expect(svgViewer).toBeInTheDocument();
  });
});