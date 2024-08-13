'use client';

import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

import SubscribeFormButton from './SubscribeFormButton';
import { subscribe } from '@/actions/subscribe';

const SubscribeForm = () => {
  const router = useRouter();

  const handleSubmit = async (formData: FormData) => {
    const { error } = await subscribe(formData);

    if (error) {
      console.error(error);
      return toast.error(error);
    } else {
      toast.success('Check your email to confirm.');
      router.push('/subscriber/pending');
    }
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
