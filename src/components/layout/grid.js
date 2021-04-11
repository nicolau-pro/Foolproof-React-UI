import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { device } from '../../helpers';

export const Grid = styled.div`
  width: 100%;
  position: relative;
  margin: 0 auto;
  height: auto;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  > div {
    flex-basis: 100%;

    @media ${device.laptop} {
      flex-basis: calc(
        ${(props) => 100 / props.theme.itemsPerRow}% - ${(props) => (props.theme.gap * (props.theme.itemsPerRow - 1)) / props.theme.itemsPerRow}px
      );
    }
  }
`;

Grid.defaultProps = {
  theme: {
    itemsPerRow: 3,
    gap: 20,
  },
};

const grid = (props) => {
  return (
    <ThemeProvider theme={props.theme}>
      <Grid>{props.children}</Grid>
    </ThemeProvider>
  );
};

export default grid;
