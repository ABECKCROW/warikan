import { Avatar, Wrap, WrapItem } from '@chakra-ui/react';

type Props = {
  name:string,
  src: string,
  size:"2xs"|"xs"|"sm"|"md"|"lg"|"xl"|"2xl",
}

export const AvatarIcon = (props: Props) => {
  const { name, src, size } = props;
  return (<Wrap>
      <WrapItem>
        <Avatar name={name} src={src} size={size} />
      </WrapItem>
    </Wrap>);
};