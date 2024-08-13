'use server';
import { v4 as uuidv4 } from 'uuid';
import * as z from 'zod';

import { createSubscriber } from '@/lib/queries';

const subscribeSchema = z.object({
  email: z.string().email(),
});

type ReturnValue<T> = {
  data?: T;
  error?: string;
};

export const subscribe = async (
  formData: FormData
): Promise<ReturnValue<any>> => {
  const email = formData.get('email');
  const parsed = subscribeSchema.safeParse({ email });

  if (!parsed.success) {
    return { error: 'Invalid email' };
  }

  const validatedEmail = parsed.data.email.toLowerCase();

  const token = uuidv4();

  try {
    const newSubscriber = await createSubscriber(validatedEmail, token);
    return { data: newSubscriber };
  } catch (error: any) {
    console.error(error);
    if (error?.code === 'P2002') {
      return { error: 'Email already exists' };
    }
    return { error: 'Failed to subscribe' };
  }
};
