import React from "react"

const CallToActionOne = () => (
<section class="container px-4 py-32 mx-auto">
  <div class="w-full mx-auto text-left md:w-11/12 xl:w-8/12 md:text-center">
    <h1 class="mb-3 text-4xl font-bold text-gray-900 md:text-5xl md:leading-tight md:font-extrabold">A secure, faster way to transfer.</h1>
    <p class="mb-6 text-lg text-gray-500 md:text-xl md:leading-normal">
      We’re on a mission to bring transparency to finance. We charge as little as possible, and we always show you upfront. No hidden fees. No bad exchange rates. No surprises.
    </p>
    <form class="grid w-full grid-cols-1 gap-3 pt-1 mx-auto mb-8 lg:grid-cols-6 md:w-7/12">
      <label class="col-auto lg:col-span-4">
        <span class="sr-only">Your Email</span>
        <input class="mt-0 form-input form-input-lg" type="email" placeholder="Enter your email..." required="true" />
      </label>
      <button class="w-full col-auto btn btn-primary btn-lg lg:col-span-2" type="submit">Get Started</button>
    </form>
    <div class="flex flex-col justify-start mb-3 space-x-0 space-y-2 text-xs text-gray-600 md:flex-row md:justify-center md:space-x-8 md:space-y-0">
      <div class="flex items-center">
        <svg viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4 mr-1 text-green-600">
          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
        </svg>
        No credit card required
      </div>
      <div class="flex items-center">
        <svg viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4 mr-1 text-green-600">
          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
        </svg>
        14 days free
      </div>
      <div class="flex items-center">
        <svg viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4 mr-1 text-green-600">
          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
        </svg>
        Cancel anytime
      </div>
    </div>
  </div>
</section>
);


export default CallToActionOne;
