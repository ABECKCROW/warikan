import { AddIcon } from '@chakra-ui/icons';
import { IconButton } from '@chakra-ui/react';

export const IconAddButton = () => {
  return (
    <IconButton
      isRound={true}
      variant="solid"
      colorScheme="teal"
      aria-label="Done"
      fontSize="20px"
      icon={<AddIcon />}
    />
  );
};