'use client';
import { Box, Center, Grid, GridItem } from '@chakra-ui/react';
import { IoHomeSharp } from "react-icons/io5";

export const Footer = () => {
  return (
    <Box>
      <Grid templateColumns="repeat(5, 1fr)" gap={6}>
        <GridItem>
          <Center>
          <IoHomeSharp />
          ホーム
          </Center>
        </GridItem>
        <GridItem>
          入出金
        </GridItem>
        <GridItem>
          家計簿
        </GridItem>
        <GridItem>
          口座
        </GridItem>
        <GridItem>
          資産
        </GridItem>
      </Grid>
    </Box>
  );
};
