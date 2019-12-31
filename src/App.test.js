import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

import thunk from 'redux-thunk'
import fetchHero from './fetchHero';

    // fetchHero: () => dispatch(fetchHero()),

// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

// describe("fetchHeroTest", () => {
//   if ('fetHeroData success', async () => {
//     const dispatch = jest.fn();
//     const getState = jest.fn();
//     await fetchHero()(dispatch, getState);
//     expect(dispatch).toBeCalledWith({ type: 'FETCH_PRODUCTS_PENDING' })
//   })
// })

// reference: https://stackoverflow.com/questions/39575200/how-to-unit-test-this-redux-thunk