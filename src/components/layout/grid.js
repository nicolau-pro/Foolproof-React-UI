import * as React from 'react';
import styled from 'styled-components';
import { device } from '../../helpers';

export const Grid = styled.div`
  width: 100%;
  position: relative;
  margin: 0 auto;
  height: auto;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media ${device.laptop} {
  }

  > div {
    flex-basis: 100%;

    @media ${device.laptop} {
      width: 30%;
      flex-basis: calc(33.333333% - 13.333333px);
    }
  }
`;

const grid = (props) => <Grid>{props.children}</Grid>;

export default grid;
