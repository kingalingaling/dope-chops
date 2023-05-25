import { FaUserCircle } from "react-icons/fa";

const Card = () => {
  return (
    <div className="flex flex-col max-w-lg mx-auto bg-black/80 rounded-lg p-4 text-white w-2/3">
      {/* Avatar */}
      <div className="flex justify-center p-4">
        <FaUserCircle size={70} className="cursor-pointer" />
      </div>
      {/* Title & Sub */}
      <div className="text-center">
        <p>
          Hello there,{" "}
          <span className="text-orange-500 text-xl">Chukwumerijie</span>
        </p>
        <p>You have made 9 orders. Thank you for your patronage</p>
      </div>
      {/* Details */}
      <div className="text-center pt-4">
        <h2 className="text-xl text-orange-500">Your Address</h2>
        <p>Random Address</p>
        <h2 className="text-xl text-orange-500">Phone Number(s)</h2>
        <p>080234567890</p>
        <div className="flex justify-around mt-4">
        <input
            type="text"
            className="peer block min-h-[auto] w-1/2 rounded-xl border-0 bg-black/30 px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
            id="address"
            placeholder="Add Phone"
          />
          <button
            type="button"
            className="inline-block rounded bg-primary px-4 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-orange-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
          >
            Add Phone
          </button>
        </div>
      </div>
      <hr className=" mx-auto w-4/5 my-5 border-gray-600"/>
      <div className="flex flex-col items-center pt-4">
        <h3 className="text-lg text-orange-500">Set New Address</h3>
        <form className="w-full flex flex-col items-center" action="">
          <label
            htmlFor="exampleFormControlInput2"
            className="pointer-events-none mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500"
          >
            New Address
          </label>
          <input
            type="text"
            className="peer block min-h-[auto] w-4/5 rounded-xl border-0 bg-black/30 px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
            id="address"
            placeholder="New Address"
          />
          <button
            type="button"
            className=" mt-3 inline-block rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-orange-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
          >
            Set
          </button>
        </form>
        <hr className="w-4/5 my-5 border-gray-600"/>
        <h3 className="text-lg text-orange-500">Set New Address</h3>
        <form className="w-full flex flex-col items-center" action="">
          <label
            htmlFor="exampleFormControlInput2"
            className="pointer-events-none mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500"
          >
            Old Password
          </label>
          <input
            type="text"
            className="peer block min-h-[auto] w-4/5 rounded-xl border-0 bg-black/30 px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
            id="address"
            placeholder="New Address"
          />
          <label
            htmlFor="exampleFormControlInput2"
            className="pointer-events-none mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500"
          >
            New Password
          </label>
          <input
            type="text"
            className="peer block min-h-[auto] w-4/5 rounded-xl border-0 bg-black/30 px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
            id="address"
            placeholder="New Address"
          />
          <button
            type="button"
            className=" mt-3 inline-block rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-orange-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default Card;
