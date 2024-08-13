'use client';

const SubscribeFormButton = () => {
  return (
    <button
      type="submit"
      className="absolute right-1 top-4 pr-[19px] duration-300 hover:translate-x-1 md:top-6"
      aria-label="Submit"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 21 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="size-[15.21px] md:size-6"
      >
        <path
          d="M4.00004 10L1.26904 1.125C7.80191 3.025 13.9624 6.02646 19.485 10C13.9627 13.9735 7.80257 16.9749 1.27004 18.875L4.00004 10ZM4.00004 10H11.5"
          stroke="#14B8A6"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};

export default SubscribeFormButton;
