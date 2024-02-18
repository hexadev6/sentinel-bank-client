import { Typography } from "@material-tailwind/react";
import React, { useState } from "react";
import useDarkMode from "../../../Hooks/useDarkMode";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import multiImgUpload from "../../../Hooks/multiImgUpload";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { MdDelete, MdEdit } from "react-icons/md";
import swal from "sweetalert";
import "../../Home/Money Exchange/scroll.css";
import useAllNotice from "../../../Hooks/useAllNotice";

const Notice = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [value, setValue] = useState("");
  const axiosPublic = useAxiosPublic();
  const [selectedNotice, setSelectedNotice] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { isPending, refetch, error, allnotice } = useAllNotice();

  // post
  const HandleNotice = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const form = e.target;
    const title = form.title.value;
    const image = form.photo.files[0];
    const photo = await multiImgUpload(image);

    const notice = {
      title: title,
      image: photo,
      description: value,
    };

    if (isEditing === true && selectedNotice) {
      // console.log(isEditing);
      // If editing, use the patch endpoint instead of post
      await axiosPublic
        .patch(`/allNotice/${selectedNotice._id}`, notice)
        .then((res) => {
          form.title.value = "";
          form.photo.value = "";
          setValue("");
          // console.log(res.data);
          setSelectedNotice(null);
          setIsEditing(false); // Reset the editing state after successful patch
          refetch();
          setIsLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setIsLoading(false);
        });
    } else {
      await axiosPublic
        .post("/allNotice", notice)
        .then((res) => {
          form.title.value = "";
          form.photo.value = "";
          setValue("");
          refetch();
          setIsLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setIsLoading(false);
        });
    }
  };

  // delete
  const HandleDelete = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this post!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axiosPublic
          .delete(`/allNotice/${id}`)
          .then((res) => {
            refetch();
            if (res.data) {
              swal("Poof! Your post has been deleted!", {
                icon: "success",
              });
            }
          })
          .catch((err) => console.log(err));
      } else {
        swal("Your post is safe!");
      }
    });
  };

  // update
  const HandleEdit = (notice) => {
    setSelectedNotice(notice);
    setValue(notice?.description);
    setIsEditing(true);
  };

  return (
    <div className="p-5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 justify-between">
      <div className=" xl:col-span-2">
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
                defaultValue={selectedNotice?.title}
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
            {isLoading ? "Please Wait..." : "Share this notice"}
          </button>
        </form>
      </div>

      <div className="flex flex-col xl:col-span-1 gap-4 h-screen overflow-auto scrollbar">
      <Typography
          variant="h4"
          color="blue-gray"
          className={` ${darkMode ? "text-blue-gray-400" : "text-nevy-blue"} text-end`}
        >
          All Notices
        </Typography>
        {allnotice?.map((notice) => (
          <div className="flex items-center justify-between gap-4 shadow-md  p-5 w-full">
            <div className="flex gap-3 items-center ">
              <img
                className="w-[75px] h-[75px] rounded-lg bg-slate-500"
                src={notice?.image}
                alt=""
              />
              <div className="flex flex-col">
                <h5 className="text-sm overflow-hidden break-words">
                  {notice?.title}
                </h5>
                <p className="text-xs text-gray-400 ">
                  Published on:
                  {new Date(notice?.createdAt).toISOString().split("T")[0]}
                </p>
              </div>
            </div>

            <div className="flex gap-2 items-center justify-between">
              <MdEdit
                className="bg-gray-100 w-8 h-8 rounded p-1 text-blue-gray-700"
                onClick={() => HandleEdit(notice)}
              />
              <MdDelete
                className="bg-gray-100 w-8 h-8 rounded p-1 text-blue-gray-700"
                onClick={() => HandleDelete(notice._id)}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notice;
