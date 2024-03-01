import {
  Input,
  Popover,
  PopoverHandler,
  PopoverContent,
} from "@material-tailwind/react";
import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
const LoanSubForm = ({ loan, id, refetch }) => {
  const axios = useAxiosPublic();
  console.log(id);
  const [date, setDate] = useState();
  const handleDateSelect = (selectedDate) => {
    setDate(selectedDate);
  };
  const perLoan = parseInt(loan?.perLoan);

  let submitDate = date?.toLocaleDateString("en-US");

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    let updateInfo = {
      ...data,
      submitDate,
    };
    console.log(updateInfo);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Submite Loan!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .patch(`/updateLoan/${id}`, updateInfo)
          .then(
            Swal.fire({
              title: "Approved!",
              text: "Your file has been Submite.",
              icon: "success",
            })
              .then(refetch())
              .catch()
          )
          .catch();
      }
    });
  };

  return (
    <div className="my-10 bg-nevy-blue p-10 text-white">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 gap-y-10"
      >
        <Input
          defaultValue={perLoan}
          {...register("perLoan", { required: true })}
          label="Amount"
          placeholder={15000}
          className="bg-white py-8"
        />
        <div className="">
          <Popover placement="bottom">
            <PopoverHandler>
              <Input
                className="bg-white py-8"
                label="Select a Date"
                onChange={() => null}
                value={date ? format(date, "PPP") : ""}
              />
            </PopoverHandler>
            <PopoverContent>
              <DayPicker
                mode="single"
                selected={date}
                onSelect={handleDateSelect}
                showOutsideDays
                className="border-0"
                classNames={{
                  caption:
                    "flex justify-center py-2 mb-4 relative items-center",
                  caption_label: "text-sm font-medium text-gray-900",
                  nav: "flex items-center",
                  nav_button:
                    "h-6 w-6 bg-transparent hover:bg-blue-gray-50 p-1 rounded-md transition-colors duration-300",
                  nav_button_previous: "absolute left-1.5",
                  nav_button_next: "absolute right-1.5",
                  table: "w-full border-collapse",
                  head_row: "flex font-medium text-gray-900",
                  head_cell: "m-0.5 w-9 font-normal text-sm",
                  row: "flex w-full mt-2",
                  cell: "text-gray-600 rounded-md h-9 w-9 text-center text-sm p-0 m-0.5 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-gray-900/20 [&:has([aria-selected].day-outside)]:text-white [&:has([aria-selected])]:bg-gray-900/50 first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
                  day: "h-9 w-9 p-0 font-normal",
                  day_range_end: "day-range-end",
                  day_selected:
                    "rounded-md bg-gray-900 text-white hover:bg-gray-900 hover:text-white focus:bg-gray-900 focus:text-white",
                  day_today: "rounded-md bg-gray-200 text-gray-900",
                  day_outside:
                    "day-outside text-gray-500 opacity-50 aria-selected:bg-gray-500 aria-selected:text-gray-900 aria-selected:bg-opacity-10",
                  day_disabled: "text-gray-500 opacity-50",
                  day_hidden: "invisible",
                }}
                components={{
                  IconLeft: ({ ...props }) => (
                    <ChevronLeftIcon {...props} className="h-4 w-4 stroke-2" />
                  ),
                  IconRight: ({ ...props }) => (
                    <ChevronRightIcon {...props} className="h-4 w-4 stroke-2" />
                  ),
                }}
              />
            </PopoverContent>
          </Popover>
        </div>
        <button
          type="submit"
          className=" col-span-1 md:col-span-2 lg:col-span-1 px-4 py-5 bg-green-300 text-white rounded-md"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default LoanSubForm;
