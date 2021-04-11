import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

import Beercard from './index';
import Like from './like-button';

configure({ adapter: new Adapter() });

describe('Beercard', () => {
  it('should be defined', () => {
    expect(Beercard).toBeDefined();
  });

  const item = {
    image_url: 'https://images.punkapi.com/v2/keg.png',
    name: 'Berliner Weisse With Yuzu - B-Sides',
    brewers_tips: 'Clean everything twice. All you want is the clean sourness of lactobacillus.',
  };

  it('<Beercard /> renders correctly', () => {
    const tree = shallow(<Beercard image={item.image_url} title={item.name} description={item.brewers_tips} />);
    expect(toJson(tree)).toMatchSnapshot();
  });

  it('Like by default is false', () => {
    const wrapper = shallow(<Beercard image={item.image_url} title={item.name} description={item.brewers_tips} />);
    const likeButton = wrapper.find(Like);
    expect(likeButton.props().liked).toBe(false);
  });
});
