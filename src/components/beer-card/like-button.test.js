import React from 'react';
import ReactDOM from 'react-dom';
import Like from './like-button';

describe('LikeButton', () => {
  it('should be defined', () => {
    expect(Like).toBeDefined();
  });

  it('renders correctly when liked is not defined', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Like />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders correctly when liked=true', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Like liked={true} />, div);
    expect(div).toMatchSnapshot();
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders correctly when liked=false', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Like liked={false} />, div);
    expect(div).toMatchSnapshot();
    ReactDOM.unmountComponentAtNode(div);
  });
});

// A lot more tests could have been performed by simulating click actions on the Like button
