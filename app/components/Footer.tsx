import { Grid, GridItem } from '@chakra-ui/react';
import { css } from '@emotion/react/macro';
import { AvatarIcon } from './AvatarIcon';


export const Footer=() => {

  return (
    <Grid templateColumns="repeat(5, 1fr)" gap={6} css={args}>
      <GridItem>
        Home
      </GridItem>
      <GridItem>
        Nav
      </GridItem>
      <GridItem>
        Main
      </GridItem>
      <GridItem>
        <AvatarIcon name={"+"} size={"md"} src={""}/>
      </GridItem>
      <GridItem>
        ああああああああああ
      </GridItem>
    </Grid>
  );
};


const args = css`
  display: none;
  @media (display-mode: standalone) {
    display: block;
  }
  //display: block;
  //@media (display-mode: standalone) {
  //  display: none;
  //}
`