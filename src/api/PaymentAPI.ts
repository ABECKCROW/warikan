import { PostgrestSingleResponse } from '@supabase/supabase-js';
import { supabase } from '../lib/supabaseClient';
import { PaymentsResponseType } from '../types/Payment.type';

export class PaymentAPI {

  getAll = async () => {
    const result: PostgrestSingleResponse<{}[]> = await supabase
      .from<'payments', PaymentsResponseType[]>('payments')
      .select('*,shared_payments!shared_payments_payment_id_fkey (id,amount,payment_id)');
    return result;
  };

  create = async (formData: any, pairId: number): Promise<PostgrestSingleResponse<PaymentsResponseType[]>> => {
    const value = [ {
      amount: formData?.amount,
      description: formData?.description,
      date: new Date(formData?.date),
      is_shared: true,
      pair_id: pairId,
      user_id: formData?.userId,
    } ];
    const result: PostgrestSingleResponse<PaymentsResponseType[]> = await supabase
      .from('payments')
      .insert(value)
      .select();
    return result;

  };
}

export const PaymentRepository = new PaymentAPI();