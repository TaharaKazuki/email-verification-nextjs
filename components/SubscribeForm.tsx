import React from 'react';

import SubscribeFormButton from './SubscribeFormButton';

const SubscribeForm = () => {
  return (
    <form id="subscribe-form" className="w-96">
      <label htmlFor="email" className="hidden">
        Email
      </label>
      <div className="relative h-11 md:h-16">
        <input
          type="text"
          name="email"
          id="email"
          placeholder="E-mail address"
          className="w-full rounded-md border border-white/[.67] bg-transparent p-3 pl-4 text-white md:h-[70px] md:rounded-[16px] md:placeholder:text-white/[.47]"
        />
        <SubscribeFormButton />
      </div>
    </form>
  );
};

export default SubscribeForm;
