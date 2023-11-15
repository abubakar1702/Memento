import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Bottom from "../Sidebar/Bottom";
import Todos from "./Todos";
import Header from "./Header";
import Quote from "./Quote";
import Texteditor from "../Note/Texteditor";
import NoteText from "../Note/NoteText";

const Home = () => {
  return (
    <div className="bg-gray-100 h-screen">
      <div className="flex justify-center">
        <Quote />
      </div>
      <div className="sm:ml-56 flex flex-col md:flex-row">
        <div className="md:w-[60%] border overflow-hidden rounded-md h-auto m-2 no-scrollbar">
          <h3 className="p-2">Recent</h3>
          <NoteText />
        </div>
        <div className="md:w-[40%] border rounded-md h-48 m-2">
          <Todos />
        </div>
      </div>
    </div>
  );
};

export default Home;
