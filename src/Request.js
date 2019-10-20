import React from "react";
import {
  Card,
  CardPrimaryAction,
  CardActions,
  CardMedia,
  CardActionButtons,
  CardActionButton,
  CardActionIcons,
  CardActionIcon
} from "@rmwc/card";
import { Typography } from "@rmwc/typography";

import { Icon } from "@rmwc/icon"; 

import '@material/card/dist/mdc.card.css';
import '@material/button/dist/mdc.button.css';
import '@material/icon-button/dist/mdc.icon-button.css';

import '@material/typography/dist/mdc.typography.css';


const star_rating = (
    <>
      <Icon icon={{ icon: 'star', size: 'xlarge' }} />
      <Icon icon={{ icon: 'star', size: 'xlarge' }} />
      <Icon icon={{ icon: 'star', size: 'xlarge' }} />
      <Icon icon={{ icon: 'star', size: 'xlarge' }} />
      <Icon icon={{ icon: 'star_outline', size: 'xlarge' }}  />
    </>
  );

const Request = props => {

  return (
    <Card style={{ width: '100%' }}>
      <CardPrimaryAction>
        <CardMedia
          sixteenByNine
          style={{
            backgroundImage: `url(${props.image})`
          }}
        />
        <div style={{ padding: '0 1rem 1rem 1rem' }}>
          <Typography use="headline6" tag="h2">
            A request has been sent
          </Typography>
          <Typography
            use="subtitle2"
            tag="h3"
            theme="textSecondaryOnBackground"
            style={{ marginTop: '-1rem' }}
          >
            
          </Typography>
          <Typography
            use="body1"
            tag="p"
            theme="textSecondaryOnBackground"
          >
            {star_rating}
          {/*<Icon icon={{ icon: 'star', size: 'xlarge' }} />
          <Icon icon={{ icon: 'star', size: 'xlarge' }} />
          <Icon icon={{ icon: 'star', size: 'xlarge' }} />
          <Icon icon={{ icon: 'star', size: 'xlarge' }} />
        <Icon icon={{ icon: 'star_outline', size: 'xlarge' }}  />*/}
          </Typography>
          <Typography
            use="body1"
            tag="div"
            theme="textSecondaryOnBackground"
          >
            A request to {props.name} has been sent.
          </Typography>
        </div>
      </CardPrimaryAction>
      <CardActions>
        <CardActionButtons>
          <CardActionButton onClick={() => props.onClick()}></CardActionButton>
        </CardActionButtons>
        <CardActionIcons>
          {/*<CardActionIcon onIcon="favorite" icon="favorite_border" />
          <CardActionIcon icon="share" />*/}
          <CardActionIcon icon="more_vert" />
        </CardActionIcons>
      </CardActions>
    </Card>
  );
};

export default Request;