import React from 'react';
import {
  Col,
  Grid,
  Row
} from 'react-lightning-design-system';
import GlobalHeader from './GlobalHeader';
import GlobalNavigation from './GlobalNavigation';

export default () => (
  <div>
    <Grid>
      <Row cols={1}>
        <Col cols={1}>
          <GlobalHeader />
        </Col>
      </Row>
      <Row>
        <Col cols={1}>
          <GlobalNavigation />
        </Col>
      </Row>
      <Row cols={1}>
        <Col cols={1}>
          Home
        </Col>
      </Row>
    </Grid>
  </div>
);
