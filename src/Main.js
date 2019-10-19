import React, { useState } from "react";
import Person from "./Person";
import Hired from "./Hired";
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

  const [ hired, setHired ] = useState(0);
  const [ hiredName, setHiredName ] = useState(0);
  const [ hiredImage, setHiredImage ] = useState(0);

  const handleClick = (person) => {
    setHired(1);
    setHiredName(person.name);
    setHiredImage(person.image);
    console.log('Hired clicked.');
  }

  const handleReturn = () => {
    setHired(0);
    console.log('Return clicked');
  }

  return (
    <>
      <TopAppBar>
        <TopAppBarRow>
          <TopAppBarSection alignStart>
            <TopAppBarNavigationIcon icon="menu" />
            <TopAppBarTitle>Tempo</TopAppBarTitle>
          </TopAppBarSection>
          <TopAppBarSection alignEnd>
            <TopAppBarActionItem icon="info" />
            {/*<TopAppBarActionItem icon="star" />
            <TopAppBarActionItem icon="mood" />*/}
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
        <GridCell span={4}></GridCell>
        <GridCell span={6}>
          {(hired === 0) ? 
          <>
          <Person
            name={'Tom Stringer'}
            onClick={handleClick}
            stars={4}
            location={'Stoke, New Zealand'}
            description={'Logistics expert, and enthusiastic innovator. Available 24/7.'}
            image={'person_1.png'}/>
          <br/>
          <Person
            name={'Ashlin Redpath'}
            onClick={handleClick}
            stars={2}
            location={'Nelson, New Zealand'}
            description={'Registered patent attorney with 15 years experience across a range of industries. Available at the drop of a hat.'}
            image={'person_2.png'}/>
          <br/>
          <Person 
            name={'Karene Scholzel'}
            onClick={handleClick}
            stars={5}
            location={'Nelson, New Zealand'}
            description={'Current Tertiary Student. Experience in retail and orchard labour. Available during the study break period from early November to late February.'}
            image={'person_3.png'}/>
          <br/>
          <Person
            name={'Hoani Takao'}
            onClick={handleClick}
            stars={3}
            location={'Richmond, New Zealand'}
            description={'Registered Drainlayer, licensed machine operator - endorsed Class 1,2, W.T.R. Available over summer, open to flexible hours.'}
            image={'person_4.png'}/>
          <br/>
          <Person
            name={'Annelie Stephenson'}
            onClick={handleClick}
            stars={5}
            location={'Stoke, New Zealand'}
            description={'Semi-retired, financial admin, accounts, edible landscape designer, project management. Available 2 days a week, flexible.'}
            image={'person_5.png'}/> 
            </> :
          <Hired
            name={hiredName}
            onClick={handleReturn}
            image={hiredImage}/>
          }

        </GridCell>
        <GridCell span={4}></GridCell>
      </Grid>
    </>
  );
};

export default Main;