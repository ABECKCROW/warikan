import { CreateToastFnReturn } from '@chakra-ui/react';

type ToastType = "success" | "error" | "warning" | "info" | "loading"

type Props = {
  toast: CreateToastFnReturn
  title: string,
  description: string,
  status: ToastType,
  isClosable: boolean,
  icon: string
}

export const createToast = (props: Props) => {
  const {
    toast,
    title,
    description,
    status,
    isClosable,
    icon,
  } = props;
  toast({
    title: title,
    description: description,
    status: status,
    duration: 2000,
    isClosable: isClosable,
    icon: icon,
  });
};
