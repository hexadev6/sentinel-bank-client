import { Typography } from "@material-tailwind/react";
import React, { useState } from "react";
import useDarkMode from "../../../Hooks/useDarkMode";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import multiImgUpload from "../../../Hooks/multiImgUpload";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const Notice = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [value, setValue] = useState("");
  const axiosPublic = useAxiosPublic();

  const {
    isPending,
    refetch,
    error,
    data: allnotice,
  } = useQuery({
    queryKey: ["allnotice"],
    queryFn: async () => {
      try {
        const res = await axiosPublic.get("/allNotice");
        console.log(res.data);
        return res.data;
      } catch (error) {
        console.log(error);
      }
    },
  });

  const HandleNotice = async (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const image = form.photo.files[0];
    const photo = await multiImgUpload(image);

    const currentDate = new Date();
    const formattedDate = currentDate?.toISOString().split("T")[0];

    const notice = {
      title: title,
      image: photo,
      description: value,
      date: formattedDate,
    };

    await axiosPublic
      .post("/allNotice", notice)
      .then((res) => {
        console.log(res.data);
        refetch()
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="p-5 grid grid-cols-6 gap-4 justify-between">
      <div className="col-span-4">
        <Typography
          variant="h4"
          color="blue-gray"
          className={` ${darkMode ? "text-blue-gray-400" : "text-nevy-blue"}`}
        >
          Give Update of the Bank
        </Typography>

        <form action="" onSubmit={HandleNotice}>
          <div className="grid grid-cols-2 gap-3 justify-between items-center mt-10">
            {/* account holder name */}
            <div className="flex flex-col ">
              <label htmlFor="name">Notice Title</label>
              <input
                color="indigo"
                name="title"
                type="text"
                required
                id="name"
                placeholder="Give title here.."
                className={`mt-2 py-3 px-4 rounded outline-0 ${
                  darkMode ? "bg-[#25324b]" : "border "
                }`}
              />
            </div>
            <div className="flex flex-col ">
              <label htmlFor="photo">Notice Thumbnail</label>
              <input
                required
                type="file"
                id="photo"
                name="photo"
                accept="image/*"
                className={`p-2 mt-2 rounded outline-0 ${
                  darkMode ? "bg-[#25324b]" : "border "
                }`}
              />
            </div>
          </div>
          <div className="mt-5 flex flex-col h-40 gap-2 ">
            <label className="">Notice Thumbnail</label>
            <ReactQuill
              theme="snow"
              value={value}
              className=" h-full "
              onChange={setValue}
              placeholder={"Write something awesome..."}
            />
          </div>
          <button
            variant="text"
            className={`mt-20 py-2 px-4 hover:text-white rounded bg-nevy-blue text-white  ${
              darkMode ? "hover:bg-[#25324b]" : "hover:bg-black "
            }`}
          >
            Share this notice
          </button>
        </form>
      </div>

      <div className="flex gap-3 flex-col col-span-2">
        {allnotice?.map((notice) => (
          <div className="shadow-md  p-5 w-full ">
            <p>title: {notice.title}</p>
            <span>description:   </span>
            <p dangerouslySetInnerHTML={{ __html: notice.description }}></p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notice;
