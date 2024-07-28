import { Page } from '@shopify/polaris';
import React, { useEffect, useState } from 'react';
import './App.css';
import { PaymentRepository } from '../api/PaymentAPI';
import { PaymentsResponseType, PaymentsType } from '../types/Payment.type';

const convertToCamelCase = (datas: PaymentsResponseType[]): PaymentsType[] => {
  return datas.map(item => ({
    id: item.id,
    amount: item.amount,
    description: item.description,
    date: new Date(item.date), // ISO文字列をDate型に変換
    isShared: item.is_shared,
    pairId: item.pair_id,
    userId: item.user_id,
  }));
};

export default function App() {
  const [data, setData] = useState<PaymentsType[]>([]);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      const result = await PaymentRepository.fetchData();
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
  }, []);
  return (
    <Page>
    </Page>
  );
}


