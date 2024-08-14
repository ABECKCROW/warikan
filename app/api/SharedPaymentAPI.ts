import { PostgrestSingleResponse } from '@supabase/supabase-js';
import { supabase } from '../lib/supabaseClient';
import { PaymentsResponseType } from '../types/Payment.type';

export class SharedPaymentAPI {

  create= async (foreignKey:number, sharedAmount:number): Promise<PostgrestSingleResponse<PaymentsResponseType[]>> =>{
    const value = [{
      payment_id: foreignKey,
      amount: sharedAmount
    }]
    const result: PostgrestSingleResponse<PaymentsResponseType[]> = await supabase
      .from('shared_payments')
      .insert(value)
      .select();
    return result
  }
}

export const SharedPaymentRepository = new SharedPaymentAPI();