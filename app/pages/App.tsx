import { Text } from '@chakra-ui/react';
import { Page } from '@shopify/polaris';
import React, { useEffect, useState } from 'react';
import './App.css';
import { PaymentRepository } from '../api/PaymentAPI';
import { AmountInput } from '../components/AmountInput';
import { Header } from '../components/Header';
import { PaymentsResponseType, PaymentsType } from '../types/Payment.type';

const convertToCamelCase = (data: PaymentsResponseType[]): PaymentsType[] => {
  return data.map(item => ({
    id: item.id,
    amount: item.amount,
    description: item.description,
    date: new Date(item.date), // ISO文字列をDate型に変換
    isShared: item.is_shared,
    pairId: item.pair_id,
    userId: item.user_id,
    sharedPayments: item.shared_payments.map(sp => ({
      id: sp.id,
      amount: sp.amount,
    })),
  }));
};

export default function App() {
  const [ data, setData ] = useState<PaymentsType[]>([]);
  const [ sum, setSum ] = useState<{ [key: string]: number }>({});
  const [ error, setError ] = useState<string>("");

  const getAll = async () => {
    const result = await PaymentRepository.getAll();
    const { data, status, error } = result;
    if (error) {
      console.error(error);
      setError('Error fetching data');
    } else {
      if (!data || status !== 200 || data.length < 0) return;
      const responseData = data as PaymentsResponseType[];
      const formattedData: PaymentsType[] = convertToCamelCase(responseData);
      setData(formattedData);
    }
  };

  useEffect(() => {
    getAll().then(r => r);
  }, []);

  useEffect(
    () => {
      const result = data.reduce((acc, item) => {
          if (1 === item.userId) {
            acc.total += item.amount;
            if (item.isShared) {
              item.sharedPayments.map((item) =>
                acc.give = acc.give + item.amount,
              );
            }
          } else {
            item.sharedPayments.map((item) => acc.give = acc.give - item.amount,
            );
          }
          return acc;
        }, { total: 0, give: 0 },
      );
      setSum(result);
    }, [ data ],
  );

  return (
    <Page>
      <Header />
      {data.map((item => (
        <Text
          ml={10}>{new Date(item.date).toISOString().split('T')[0]}　{item.userId === 1 ? "Q" : "M"}　¥{item.amount} 　　{item.description}　　　{item.sharedPayments.map((item) => item.amount ? `↪️¥${item.amount}` : "")}</Text>
      )))}
      <br />
      <Text ml={10}>{`Total: ${sum.total}、Treat: ${sum.give}`}</Text>
      <AmountInput fetchPayments={getAll} />
    </Page>
  );
}


