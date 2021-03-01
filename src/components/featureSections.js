import React from "react"


const FeatureSections = () => (
<section class="container px-4 py-24 mx-auto">
  <div class="grid items-center grid-cols-1 mb-24 md:grid-cols-2 gap-y-10 md:gap-y-32 gap-x-10 md:gap-x-24">
    <div>
      <h2 class="mb-4 text-2xl font-extrabold tracking-tight text-center text-black md:leading-tight sm:text-left md:text-4xl">Clear overview for efficient tracking</h2>
      <p class="mb-5 text-base text-center text-gray-600 sm:text-left md:text-lg">
        Handle your subscriptions and transactions efficiently with the clear overview in Dashboard. Features like the smart search option allow you to quickly find any data you’re looking for.
      </p>
      <a href="#" class="w-full btn btn-dark btn-lg sm:w-auto">Learn More</a>
    </div>
    <div class="w-full h-full py-48 bg-gray-200"></div>
  </div>
  <div class="grid flex-col-reverse items-center grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-y-32 gap-x-10 md:gap-x-24">
    <div class="order-none md:order-2">
      <h2 class="mb-4 text-2xl font-extrabold tracking-tight text-center text-black md:leading-tight sm:text-left md:text-4xl">Decide how you integrate Payments</h2>
      <p class="mb-5 text-base text-center text-gray-600 sm:text-left md:text-lg">
        Love to code? Next to our ready-made and free plugins you can use our expansive yet simple API; decide how you integrate Payments and build advanced and reliable products yourself from
        scratch.
      </p>
      <a href="#" class="w-full btn btn-dark btn-lg sm:w-auto">Learn More</a>
    </div>
    <div class="w-full h-full py-48 bg-gray-200"></div>
  </div>
</section>

)

export default FeatureSections;