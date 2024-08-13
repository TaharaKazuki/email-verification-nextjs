'use client';
import { useFormStatus } from 'react-dom';
import { VscSend } from 'react-icons/vsc';

const SubscribeFormButton = () => {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className="absolute right-1 top-[14px] pr-[19px] duration-300 hover:translate-x-1"
      aria-label="Submit"
      disabled={pending}
    >
      {pending ? (
        <div className="size-6 animate-spin rounded-full border-b-2 border-teal-500" />
      ) : (
        <VscSend className="size-[24px] text-[#14B8A6]" />
      )}
    </button>
  );
};

export default SubscribeFormButton;
