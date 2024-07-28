export type PaymentsResponseType = {
  id: number,
  amount: number,
  description: string,
  date: string,
  is_shared: boolean,
  pair_id: number,
  user_id: number,
}

export type PaymentsType = {
  id: number,
  amount: number,
  description: string,
  date: Date,
  isShared: boolean,
  pairId: number,
  userId: number,
}