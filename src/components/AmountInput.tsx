import { AddIcon, CalendarIcon, EditIcon, StarIcon } from '@chakra-ui/icons';
import { Button, Checkbox, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Icon, IconButton, Input, InputGroup, InputLeftElement, InputRightElement, Select, Stack, useDisclosure, } from '@chakra-ui/react';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { PaymentRepository } from '../api/PaymentAPI';

type formValuesType = {
  amount: number; category: string; user: string; date: string; details: string; amountReceived: number;
}

export const AmountInput = ({ fetchPayments }: { fetchPayments: () => void }) => {
  const initialInput = {
    amount: 0,
    category: "",
    user: "",
    date: "",
    details: "",
    amountReceived: 0,
  };
  const btnRef = React.useRef(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [ isInputDisabled, setIsInputDisabled ] = useState(true);
  const [ isChecked, setIsChecked ] = useState(false);
  const [ formValues, setFormValues ] = useState<formValuesType>(initialInput);
  const formValuesRef = useRef(formValues);
  const isCheckRef = useRef(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const createPayment = useCallback(async (value: any) => {
    await PaymentRepository.create(formValuesRef.current, 1);
    onClose();
    fetchPayments();
    setFormValues(initialInput)
  }, [ fetchPayments ]);

  useEffect(() => {
    formValuesRef.current = formValues;
  }, [ formValues ]);

  useEffect(() => {
    isCheckRef.current = !isChecked;
  }, [ isChecked ]);

  const handleChangeCheck = () => {
    setIsChecked((prevCheck) => !prevCheck);
  };
  useEffect(() => {
    setIsInputDisabled((prevDisabled) => !prevDisabled);
  }, [ isChecked ]);

  return (
    <>
      <IconButton
        isRound={true}
        variant="solid"
        colorScheme="teal"
        aria-label="Done"
        fontSize="20px"
        icon={<AddIcon />}
        ref={btnRef}
        onClick={onOpen}
      />
      <Drawer
        isOpen={isOpen}
        placement="bottom"
        onClose={onClose}
        finalFocusRef={btnRef}
        size={"xl"}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader textAlign={"center"}>入力</DrawerHeader>

          <DrawerBody>
            <Stack spacing={4} pr={5}>
              <Input
                name="amount"
                placeholder="¥0"
                _placeholder={{ textAlign: "right", fontWeight: "bold", fontSize: "50px" }}
                textAlign="right"
                variant="flushed"
                size="lg"
                fontSize="50px"
                onChange={handleChange}
              />

              <InputGroup>
                <InputLeftElement pointerEvents="none" children={<Icon as={StarIcon} color="black" />} />
                <Select
                  name="category"
                  placeholder="カテゴリー"
                  size="md"
                  paddingLeft="2.5rem"
                  onChange={handleChange}
                >
                  <option value="food">食費</option>
                  <option value="dailyGoods">日用品</option>
                </Select>
              </InputGroup>

              <InputGroup>
                <InputLeftElement pointerEvents="none" children={<Icon as={AddIcon} color="gray.300" />} />
                <Select
                  name="userId"
                  placeholder="ユーザー名"
                  size="md"
                  paddingLeft="2.5rem"
                  onChange={handleChange}
                >
                  <option value="1">ユーザー1</option>
                  <option value="2">ユーザー2</option>
                </Select>
              </InputGroup>

              <InputGroup>
                <InputLeftElement pointerEvents="none" color="gray.300" fontSize="1.2em">
                  <CalendarIcon color="black" />
                </InputLeftElement>
                <Input
                  name="date"
                  type="date"
                  onChange={handleChange}
                />
              </InputGroup>

              <InputGroup>
                <InputLeftElement pointerEvents="none" color="gray.300" fontSize="1.2em">
                  <EditIcon color="black" />
                </InputLeftElement>
                <Input
                  name="description"
                  placeholder="詳細"
                  onChange={handleChange}
                />
              </InputGroup>

              <InputGroup>
                <InputLeftElement pointerEvents="none" color="black" fontSize="1.2em">
                  $
                </InputLeftElement>
                <Input
                  name="amountReceived"
                  placeholder="おごられ額"
                  onChange={handleChange}
                  isDisabled={isCheckRef.current}
                />
                <InputRightElement>
                  <Checkbox onChange={handleChangeCheck} />
                </InputRightElement>
              </InputGroup>
            </Stack>
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue" onClick={() => createPayment(formValues)}>Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};
