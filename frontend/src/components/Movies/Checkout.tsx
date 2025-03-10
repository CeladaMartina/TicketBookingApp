import React from "react";
import { loadStripe } from "@stripe/stripe-js";

const apiUrl = 'http://localhost:4000/'

const paymentMethod = async () =>{
  const stripe = await loadStripe("pk_test_51R0WdTPG1GttzLX3fIJ4lH09JbRyAP07CUn13KsiCUg5wW5XOwtzIYu4vn2pB8JbLPXp8pJQUyUdbKj3gsAvOFDR00sC7gq0iW")
  const body = {
    products: [ 
      {
        name: "The Shawshank Redemption",
        price: "500.99",
        image: "https://upload.wikimedia.org/wikipedia/en/8/81/ShawshankRedemptionMoviePoster.jpg",
      }
    ]
  }
  const headers = {
    "Content-Type":"application/json"
  }

  const response = await fetch(`${apiUrl}movies/create-checkout-session`, {
    method:"POST",
    headers: headers,
    body:JSON.stringify(body)
  })

  const session = await response.json();

  const result = stripe?.redirectToCheckout({
    sessionId: session.id
  })

  console.log(result);

}

const Checkout = () => {
  return (
    <div className="w-full lg:px-28 md:px-16 sm:px-7 px-4 my-[8ch] space-y-10">
      <div className="grid grid-cols-5 gap-16 items-start">
        <div className="col-span-3 space-y-7 pr-20">
          <h2 className="text-xl text-neutral-800 font-medium">
            User Information
          </h2>
          <form className="space-y-6">
            <div className="">
              <label htmlFor="fullname" className="block mb-2 font-semibold">
                Fullname
              </label>
              <input
                type="text"
                id="fullname"
                name="fullname"
                placeholder="e.g. Martina Celada"
                className="w-full appearance-none text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 inline-block bg-neutral-200/60 dark: bg-neutral-900/60 px-3 h-12 border border-neutral-200 dark:border-neutral-900 rounded-md focus:outline-none focus:bg-neutral-100 dark:focus:bg-neutral-900"
              ></input>
            </div>

            <div className="">
              <label htmlFor="email" className="block mb-2 font-semibold">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="e.g. martina.celada@gmail.com"
                className="w-full appearance-none text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 inline-block bg-neutral-200/60 dark: bg-neutral-900/60 px-3 h-12 border border-neutral-200 dark:border-neutral-900 rounded-md focus:outline-none focus:bg-neutral-100 dark:focus:bg-neutral-900"
              ></input>
              <small className="block mt-1 text-xs text-neutral-500 dark:text-neutral-600 font-normal">
                You will get your tickets via this email address.
              </small>
            </div>

            <div className="">
              <label htmlFor="phone" className="block mb-2 font-semibold">
                Phone
              </label>
              <input
                type="number"
                id="phone"
                name="phone"
                placeholder="e.g. (+54) 4298-6068"
                className="w-full appearance-none text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 inline-block bg-neutral-200/60 dark: bg-neutral-900/60 px-3 h-12 border border-neutral-200 dark:border-neutral-900 rounded-md focus:outline-none focus:bg-neutral-100 dark:focus:bg-neutral-900"
              ></input>
            </div>
          </form>
        </div>

        <div className="col-span-2 space-y-8">
          <div className="bg-neutral-200/50 dark:bg-neutral-900/70 rounded-md py-5 px-7">
            <h2 className="text-xl text-center text-neutral-800 dark:text-neutral-100 font-medium border-b-2 border-neutral-200 dark:border-neutral-800/40 pb-3 mb-4">
              Your Booking Status
            </h2>

            <div className="space-y-8 pb-3">
              <h6 className="text-base text-neutral-700 dark:text-neutral-200 font-medium">
                NOMBRE PELICULA
              </h6>

              <div className="w-full flex items-center gap-x-1">
                <div className="w-fit text-base font-medium">
                  Time: - <span className="ml-1.5">TIME</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="w-full flex item justify-between">
                  <h6 className="text-base text-neutral-700 dark:text-neutral-200 font-medium">
                    Total Nro. Seats
                  </h6>

                  <h6 className="text-base text-neutral-700 dark:text-neutral-200 font-medium">
                    Cantidad
                  </h6>
                </div>
                <div className="w-full flex item justify-between">
                  <h6 className="text-base text-neutral-700 dark:text-neutral-200 font-medium">
                    Total Amout
                  </h6>

                  <h6 className="text-base text-neutral-700 dark:text-neutral-200 font-medium">
                    Precio total
                  </h6>
                </div>
              </div>
            </div>
          </div>

            <button className="w-full px-8 h-12 bg-blue-600 text-neutral-50 text-base font-normal rounded-md flex items-center justify-center gap-x-2" onClick={paymentMethod}>
                Processed to Pay <i className='bx bx-right-arrow-alt'></i> 
            </button>

        </div>
      </div>
    </div>
  );
};

export default Checkout;
