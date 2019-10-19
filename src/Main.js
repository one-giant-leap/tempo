import React, { useState } from "react";
import Person from "./Person";
import {
  TopAppBar,
  TopAppBarRow,
  TopAppBarFixedAdjust,
  TopAppBarSection,
  TopAppBarActionItem,
  TopAppBarTitle,
  TopAppBarNavigationIcon
} from "@rmwc/top-app-bar";

import {
  Grid,
  GridCell
} from "@rmwc/grid";

import '@material/top-app-bar/dist/mdc.top-app-bar.css';
import '@material/layout-grid/dist/mdc.layout-grid.css';

const Main = props => {

  return (
    <>
      <TopAppBar>
        <TopAppBarRow>
          <TopAppBarSection alignStart>
            <TopAppBarNavigationIcon icon="menu" />
            <TopAppBarTitle>All Features</TopAppBarTitle>
          </TopAppBarSection>
          <TopAppBarSection alignEnd>
            <TopAppBarActionItem icon="favorite" />
            <TopAppBarActionItem icon="star" />
            <TopAppBarActionItem icon="mood" />
          </TopAppBarSection>
        </TopAppBarRow>
        {/*<TopAppBarRow>
          <TopAppBarSection alignStart>
            <TopAppBarTitle>Another Row</TopAppBarTitle>
          </TopAppBarSection>
        </TopAppBarRow>*/}
      </TopAppBar>
      <TopAppBarFixedAdjust />
      <Grid>
        <GridCell span={3}></GridCell>
        <GridCell span={3} desktop={6}>
          <Person name={'Annelie Stephenson'} location={'Stoke, New Zealand'} image={'person_1.png'}/>
          <br/>
          <Person
            name={'Ashlin Redpath'}
            location={'Nelson, New Zealand'}
            description={'Registered patent attorney with 15 years experience across a range of industries. Available at the drop of a hat.'}
            image={'person_2.png'}/>
          <br/>
          <Person 
            name={'Hoani Takao'}
            location={'Nelson, New Zealand'}
            description={'Registered patent attorney with 15 years experience across a range of industries. Available at the drop of a hat.'}
            image={'person_3.png'}/>
          <br/>
          <Person
            name={'Karene Scholzel'}
            location={'Richmond, New Zealand'}
            description={'Registered patent attorney with 15 years experience across a range of industries. Available at the drop of a hat.'}
            image={'person_4.png'}/>
          <br/>
          <Person
            name={'Annelie Stephenson'}
            location={'Stoke, New Zealand'}
            description={'Current Tertiary Student. Experience in retail and orchard labour.  Available during the study break period from early November to late February.'}
            image={'person_5.png'}/>
        </GridCell>
        <GridCell span={3}></GridCell>
      </Grid>
    </>
  );
};

export default Main;