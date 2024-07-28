import { PostgrestSingleResponse } from '@supabase/supabase-js';
import { supabase } from '../lib/supabaseClient';
import { PaymentsResponseType } from '../types/Payment.type';

export class PaymentAPI {

  fetchData = async () => {
    const result: PostgrestSingleResponse<{}[]> = await supabase
      .from<'payments', PaymentsResponseType[]>('payments')
      .select('*');
    return result;
  };
}

export const PaymentRepository = new PaymentAPI();