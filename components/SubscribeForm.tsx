'use client';

import SubscribeFormButton from './SubscribeFormButton';
import { subscribe } from '@/actions/subscribe';

const SubscribeForm = () => {
  const handleSubmit = async (formData: FormData) => {
    const { error, data } = await subscribe(formData);
  };
  return (
    <form action={handleSubmit} id="subscribe-form">
      <label htmlFor="email" className="hidden">
        Email
      </label>
      <div className="relative">
        <input
          type="text"
          name="email"
          id="email"
          placeholder="E-mail address"
          className="w-full rounded-md border border-white/[.67] bg-transparent p-3 pl-4 text-white md:placeholder:text-white/[.47]"
        />
        <SubscribeFormButton />
      </div>
    </form>
  );
};

export default SubscribeForm;
