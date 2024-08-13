'use server';
import { v4 as uuidv4 } from 'uuid';
import * as z from 'zod';
import { cookies } from 'next/headers'; // next/headers から cookies をインポート

import { createSubscriber, getOneSubscriberByEmail } from '@/lib/queries';
import { sendConfirmationEmail } from '@/utils/email';

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
  try {
    const parsed = subscribeSchema.safeParse({ email: formData.get('email') });
    if (!parsed.success) return { error: parsed.error.message };

    const checkedEmail = parsed.data.email.toLowerCase();

    const existingSubscriber = await getOneSubscriberByEmail(checkedEmail);
    if (existingSubscriber) {
      return { error: 'Subscriber already exists.' };
    }
    const token = uuidv4();

    const newSubscriber = await createSubscriber(checkedEmail, token);
    console.log(newSubscriber);

    const validateEmailLink = `${process.env.NEXT_PUBLIC_URL}/subscriber/confirm?token=${token}`;
    const { error } = await sendConfirmationEmail(
      checkedEmail,
      validateEmailLink
    );
    if (error) return { error: 'Failed to send confirmation email' };

    return {};
  } catch (error) {
    console.error(error);
    return { error: 'Failed to send confirmation email.' };
  }
};
