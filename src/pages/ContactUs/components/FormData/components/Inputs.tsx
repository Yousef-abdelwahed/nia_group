import React from "react";

interface IProps {
  label: string;
  id: string;
  error: string | any;
  value: string;
  type: string;
  name: string;
  onChange: (e: any) => void;
  onBlur: (e: any) => void;
}

const Inputs = React.forwardRef<HTMLInputElement, IProps>(
  ({ label, id, error, ...props }: IProps, ref) => {
    return (
      <div className="mb-6 w-[87%]">
        <label htmlFor="email" className=" block text-[#727272] font-semibold">
          {label}
        </label>
        <input
          id={id}
          ref={ref}
          {...props}
          className=" p-1  border-b-2 border-[#676565] w-full"
          required
        />
        <div className="text-red-500	text-sm md:text-base w-full ">
          {error && <p>{error}</p>}
        </div>
      </div>
    );
  }
);

export default Inputs;
