'use client';
import { VscSend } from 'react-icons/vsc';

const SubscribeFormButton = () => {
  return (
    <button
      type="submit"
      className="absolute right-1 top-[14px] pr-[19px] duration-300 hover:translate-x-1"
      aria-label="Submit"
    >
      <VscSend className="size-[24px] text-[#14B8A6]" />
    </button>
  );
};

export default SubscribeFormButton;
