import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '..';

afterEach(cleanup);  //This will ensure that after each test, we won't have any leftover memory data that could give us false results.

describe('About component', () => { //first arg string declares what is being tested and second arg callback function runs the test
    //First Test
    it('renders', () => {
        render(<About />);
      });
    
    //Second Test
    it('matches snapshot DOM node structure', () => {
        const { asFragment } = render(<About />);

        expect(asFragment()).toMatchSnapshot();
      });
  })