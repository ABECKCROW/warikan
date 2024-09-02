'use client';
import { AddIcon, EditIcon, ExternalLinkIcon, RepeatIcon, SettingsIcon } from '@chakra-ui/icons';
import {
  Avatar,
  Center,
  Grid,
  GridItem,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';
import { useRouter } from 'next/navigation';

export const Header = () => {
  const router = useRouter();
  return (
    <Grid templateColumns="repeat(3, 1fr)" gap={6} m={3}>
      <GridItem display="flex" justifyContent="flex-start">

        <Menu>
          <MenuButton as={Avatar} color={'white'} name={"ABECK"} size={"sm"} src={""} />
          <MenuList>
            <MenuItem icon={<AddIcon />} command="⌘T">
              New Tab
            </MenuItem>
            <MenuItem icon={<ExternalLinkIcon />} command="⌘N">
              New Window
            </MenuItem>
            <MenuItem icon={<RepeatIcon />} command="⌘⇧N">
              Open Closed Tab
            </MenuItem>
            <MenuItem icon={<EditIcon />} command="⌘O">
              Open File...
            </MenuItem>
          </MenuList>
        </Menu>

      </GridItem>

      <GridItem place-content={"end"}>
        <Center h="100%">
          <Link onClick={()=>router.push("/")}>ファビコン</Link>
        </Center>
      </GridItem>

      <GridItem display="flex" justifyContent="flex-end">
        <IconButton
          size="lg"
          color={"black"}
          colorScheme="white"
          aria-label="Search database"
          icon={<SettingsIcon />}
          pb={3}
          onClick={() => router.push("/setting")}
        />
      </GridItem>
    </Grid>
  );
};
