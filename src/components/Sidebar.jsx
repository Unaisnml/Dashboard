import React from "react";

const Sidebar = () => {
  return (
    <div>
      <div class=" min-h-screen  bg-cyan-100 ">
        <div class="flex flex-row-reverse pb-20">
          <div class=" h-26  bg-white mr-2 mr-28 mt-8 rounded-lg shadow-lg">
            <div class="p-2">
              <button
                id="dropdownDefaultButton"
                data-dropdown-toggle="dropdown"
                class="text-black  font-medium rounded-lg text-sm text-center inline-flex items-center "
                type="button"
              >
                {" "}
                <svg
                  class="w-2.5 h-2.5 ml-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div class="w-56 h-26  bg-white mr-2 mt-8 rounded-lg shadow-lg">
            <div class="p-2">
              <div>XYZ ENTERPRISE</div>
            </div>
          </div>
        </div>
        <div class="flex flex-row">
          {/* Sidebar */}
          <div class="bg-white drop-shadow-xl">
            <div class="w-48 min-h-screen">
              <div class="profile-pic h-32 shadow-lg">
                <div class="rounded-full w-16 h-16  bg-black ml-16 mt-4"></div>
                <div class="ml-12">
                  <h6 class="mt-2 font-bold">Ram Mohan</h6>
                  <h6 class="text-xs me-2">rammohan2@gmail.com</h6>
                </div>
              </div>
              <div>
                <div class="pt-4">
                  <div>
                    <button class="w-40 h-10  rounded-r-lg hover:bg-sky-300 shadow-lg">
                      Dashboard
                    </button>
                    <button class="w-40 h-10 mt-4 rounded-r-lg hover:bg-sky-300 shadow-lg">
                      Perks
                    </button>
                    <button class="w-40 h-10 mt-4  rounded-r-lg hover:bg-sky-300 shadow-lg">
                      AddOns
                    </button>
                    <button class="w-40 h-10 mt-4  rounded-r-lg hover:bg-sky-300 shadow-lg">
                      FAQ
                    </button>
                    <button class="w-40 h-10 mt-4  rounded-r-lg hover:bg-sky-300 shadow-lg">
                      Support
                    </button>
                  </div>
                </div>
                <div class="mt-20 ml-10">
                  <button class="w-20 h-10 mt-4 font-semibold rounded-lg hover:bg-sky-300 shadow-lg text-cyan-700">
                    Log Out
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Dashboard COntent */}
          <div class="w-4/5 h-screen">
            <div class="bg-white  ">
              <div class="pt-14 ml-24 font-bold text-xl">
                Choose a plan that's just right for you
              </div>
              <div class="flex flex-row-reverse ">
                <button class="border border-black w-52 h-10 mt-4 p-2 rounded-full hover:bg-sky-300 shadow-lg">
                  Monthly
                </button>
                <button class="border border-black w-52 h-10 mt-4 p-2 rounded-full hover:bg-sky-300 shadow-lg">
                  Annually
                </button>
              </div>
              {/* //cards     */}
              <div class="p-10">
                <div class="flex flex-row p-10 ">
                  <div class=" h-64 w-64 p-4  ml-16 shadow-lg">
                    <div class="font-bold text-lg">Basic</div>
                    <div class="font-normal text-lg">$9.99</div>
                    <button class="rounded-r-lg rounded-l-lg bg-orange-300 w-28 text-sm">
                      Get Started
                    </button>
                    <div class="text-xs mt-2 font-semibold">
                      what you"ll get
                    </div>
                    <div class="text-xs mt-2 font-semibold">Upto 25 users</div>
                    <div class="text-xs mt-2 font-semibold">
                      upto 25GB storage
                    </div>
                    <div class="text-xs mt-2 font-semibold">Email Support</div>
                    <div class="font-bold ml-2 mt-3 underline text-sm">
                      Explore Fetaures
                    </div>
                  </div>
                  <div class=" h-64 w-64 p-4  ml-16 shadow-lg">
                    <div class="font-bold text-lg">Basic</div>
                    <div class="font-normal text-lg">$9.99</div>
                    <button class="rounded-r-lg rounded-l-lg bg-rose-400 w-28 text-sm">
                      Get Started
                    </button>
                    <div class="text-xs mt-2 font-semibold">
                      what you"ll get
                    </div>
                    <div class="text-xs mt-2 font-semibold">Upto 25 users</div>
                    <div class="text-xs mt-2 font-semibold">
                      upto 25GB storage
                    </div>
                    <div class="text-xs mt-2 font-semibold">Email Support</div>
                    <div class="font-bold ml-2 mt-3 underline text-sm">
                      Explore Fetaures
                    </div>
                  </div>
                  <div class=" h-64 w-64 p-4  ml-16 shadow-lg">
                    <div class="font-bold text-lg">Basic</div>
                    <div class="font-normal text-lg">$9.99</div>
                    <button class="rounded-r-lg rounded-l-lg bg-purple-400 w-28 text-sm">
                      Get Started
                    </button>
                    <div class="text-xs mt-2 font-semibold">
                      what you"ll get
                    </div>
                    <div class="text-xs mt-2 font-semibold">Upto 25 users</div>
                    <div class="text-xs mt-2 font-semibold">
                      upto 25GB storage
                    </div>
                    <div class="text-xs mt-2 font-semibold">Email Support</div>
                    <div class="font-bold ml-2 mt-3 underline text-sm">
                      Explore Fetaures
                    </div>
                  </div>
                </div>
                <div class="flex flex-row p-10 ">
                  <div class=" h-auto w-auto p-4  ml-16 shadow-lg flex flex-row">
                    <div class="">
                      <span class="rounded-full w-20 p-1 bg-lime-200  text-xs font-semibold">
                        Free forever
                      </span>
                      <div class="font-bold mt-2 text-lg">Free Starter</div>

                      <div class="text-xs mt-4 font-semibold ">
                        The quickes and easiest way to try protocols
                        <br />
                        with basic functionalities
                      </div>
                      <button class="rounded-r-lg rounded-l-lg bg-lime-200 w-28 text-sm font-semibold mt-4">
                        Get Started
                      </button>
                    </div>

                    <div class="ml-8 ">
                      <div class="text-xs mt-4 font-semibold ">
                        What You"ll get
                      </div>
                      <div class="text-xs mt-2 font-semibold ">
                        Upto 8 users{" "}
                      </div>
                      <div class="text-xs  mt-2  font-semibold ">
                        upto 3gb storage{" "}
                      </div>
                      <div class="text-xs  mt-2  font-semibold ">
                        Email Support{" "}
                      </div>
                      <div class="text-xs mt-2 font-semibold ">
                        Basics of documents ,Task flow
                        <br />
                        voting accounting,banking, notes,
                        <br /> investor,Director and team
                      </div>
                    </div>
                  </div>
                  {/* ////////////// */}
                  <div class=" h-52 w-auto p-4  ml-16 shadow-lg flex flex-row">
                    <div class="">
                      <span class="rounded-full  bg-sky-300 w-20 p-1 text-xs font-semibold ">
                        Lets Connect
                      </span>
                      <div class="font-bold text-lg mt-2">Enterprise Plan</div>

                      <div class="text-xs mt-4 font-semibold ">
                        Effortlesly customize and find-tune service as your{" "}
                        <br />
                        needs shift,ensuring the perfect tools for success{" "}
                      </div>
                      <button class="rounded-r-lg rounded-l-lg bg-sky-300 w-28 text-sm font-semibold mt-4">
                        Contact Us
                      </button>
                    </div>

                    <div class="ml-8 ">
                      <div class="text-xs mt-4 font-semibold ">
                        What You"ll get:
                      </div>
                      <div class="text-xs mt-2 font-semibold ">
                        More than 75 Users
                      </div>
                      <div class="text-xs  mt-2  font-semibold ">
                        Customization of all other features
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
