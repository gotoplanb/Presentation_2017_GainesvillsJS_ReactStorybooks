import React from 'react';
import {
  Grid,
  Row
} from 'react-lightning-design-system';
import GlobalNavigationItem from './GlobalNavigationItem';

export default () => (
  <Grid>
    <Row>
      <GlobalNavigationItem itemName="foo" />
      <GlobalNavigationItem itemName="bar" />
      <GlobalNavigationItem itemName="baz" />
    </Row>
  </Grid>
);
