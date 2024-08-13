'use server';
import * as z from 'zod';

const subscribeSchema = z.object({
  email: z.string().email(),
});

type ReturnValue<T> = {
  data?: T;
  error?: string;
};

export const subscribe = async (
  formData: FormData
): Promise<ReturnValue<string>> => {
  const email = formData.get('email');
  const parsed = subscribeSchema.safeParse({ email });

  if (!parsed.success) {
    return { error: 'Invalid email' };
  }

  return {};
};
