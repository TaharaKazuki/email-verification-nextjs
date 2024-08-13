'use server';
import * as React from 'react';
import { Resend } from 'resend';

import ConfirmationEmail from '@/email/emailConfirmation';

export const sendConfirmationEmail = async (email: string, link: string) => {
  const resend = new Resend(process.env.RESEND_API_KEY);

  const from = `Email Confirmation <onboarding@resend.dev>`;

  const res = await resend.emails.send({
    from,
    to: email,
    subject: 'Confirm your email',
    react: React.createElement(ConfirmationEmail, {
      email,
      link,
    }),
    headers: {
      Date: new Date().toUTCString(),
    },
  });
  return res;
};
