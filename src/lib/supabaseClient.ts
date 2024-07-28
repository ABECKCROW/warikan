import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://udjmowdvvtauaxihpbqr.supabase.co"
  // process.env.SUPABASE_URL!;
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVkam1vd2R2dnRhdWF4aWhwYnFyIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcyMTgzMzcyMywiZXhwIjoyMDM3NDA5NzIzfQ.u1t7W7olGe78hq5nO0n4uQtq_AeeRmJ7WsyQTjnsvvg"
  // process.env.SUPABASE_KEY!;

export const supabase = createClient(supabaseUrl, supabaseKey);