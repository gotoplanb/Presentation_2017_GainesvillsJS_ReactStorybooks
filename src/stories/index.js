import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import '../styles/salesforce-lightning-design-system.min.css'
import {
  Grid,
  Row
} from 'react-lightning-design-system';
import GlobalNavigationItem from '../components/GlobalNavigationItem';
import GlobalNavigation from '../components/GlobalNavigation';

storiesOf('GlobalNavigationItem', module)
  .add('base', () => (
    <GlobalNavigationItem itemName="Home" />
  ))
  .add('with a long itemName', () => (
    <GlobalNavigationItem itemName="Super Magical Funtime Section" />
  ))

  storiesOf('persona.GlobalNavigation', module)
    .add('base', () => (
      <GlobalNavigation />
    ))
    .add('with a long itemName', () => (
      <Grid>
        <Row>
          <GlobalNavigationItem itemName="foo" />
          <GlobalNavigationItem itemName="Super Magical Funtime Section" />
          <GlobalNavigationItem itemName="baz" />
        </Row>
      </Grid>
    ))
