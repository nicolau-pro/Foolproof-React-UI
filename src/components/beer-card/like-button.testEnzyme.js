import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

import Like from './like-button';

configure({ adapter: new Adapter() });

describe('LikeButton', () => {
  it('should be defined', () => {
    expect(Like).toBeDefined();
  });

  it('renders correctly without liked being defined', () => {
    const tree = shallow(<Like />);
    expect(toJson(tree)).toMatchSnapshot();
  });

  it('has heart-icon svg', () => {
    const tree = shallow(<Like liked={true} />);
    expect(tree.find('#heart-icon')).toHaveLength(1);
  });

  it('liked is passed correctly to the icon if ture', () => {
    const tree = shallow(<Like liked={true} />);
    const icon = tree.find('#heart-icon').first().parent();
    expect(icon.props().liked).toBe(true);
  });

  it('liked is passed correctly to the icon if flase', () => {
    const tree = shallow(<Like liked={false} />);
    const icon = tree.find('#heart-icon').first().parent();
    expect(icon.props().liked).toBe(false);
  });
});
