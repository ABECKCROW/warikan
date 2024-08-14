import { SettingsIcon } from '@chakra-ui/icons';
import { Box, Center, Grid, GridItem, Link } from '@chakra-ui/react';
import { AvatarIcon } from './AvatarIcon';


export const Header=() => {

  return (

    <Grid templateColumns="repeat(5, 1fr)" gap={6} m={3}>
      <GridItem >
        <Box>
        <AvatarIcon name={"ABECK"} size={"md"} src={""}/>
        </Box>
      </GridItem>
      <GridItem>

      </GridItem>
      <GridItem place-content={"end"}>
        <Center　h='100%'>
          <Link href={"https://abeckcrow.github.io/warikan/"}>ファビコン</Link>
        </Center>
      </GridItem>
      <GridItem>

      </GridItem>
      <GridItem>
        <Center>
        <SettingsIcon/>
        </Center>
      </GridItem>
    </Grid>
  );
};
