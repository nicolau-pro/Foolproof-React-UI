import React from 'react';
import ReactDOM from 'react-dom';
import Beercard from './index';

describe('BeerCard', () => {
  it('should be defined', () => {
    expect(Beercard).toBeDefined();
  });

  const item = {
    image_url: 'https://images.punkapi.com/v2/keg.png',
    name: 'Berliner Weisse With Yuzu - B-Sides',
    brewers_tips: 'Clean everything twice. All you want is the clean sourness of lactobacillus.',
  };

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Beercard image={item.image_url} title={item.name} description={item.brewers_tips} />, div);
    expect(div).toMatchSnapshot();
    ReactDOM.unmountComponentAtNode(div);
  });
});

// A lot more tests could have been performed by simulating click actions on the Like button
