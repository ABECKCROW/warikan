export type PaymentsResponseType = {
  id: number,
  amount: number,
  description: string,
  date: string,
  is_shared: boolean,
  pair_id: number,
  user_id: number,
  shared_payments:SharedPaymentsResponseType[]
}

export type PaymentsType = {
  id: number,
  amount: number,
  description: string,
  date: Date,
  isShared: boolean,
  pairId: number,
  userId: number,
  sharedPayments :SharedPaymentsType[]
}

type SharedPaymentsResponseType = {
  id: number,
  amount: number,
  payment_id: number;
}

type SharedPaymentsType = {
  id: number,
  amount: number,
}