import React from 'react';

import SubscribeFormButton from './SubscribeFormButton';

const SubscribeForm = () => {
  return (
    <form id="subscribe-form">
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
