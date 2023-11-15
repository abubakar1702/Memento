import Home from "./Components/Home/Home";
import { Route, Routes } from "react-router-dom";
import Texteditor from "./Components/Note/Texteditor";
import Sidebar from "./Components/Sidebar/Sidebar";
import Bottom from "./Components/Sidebar/Bottom";
import Header from "./Components/Home/Header";
import UserContextProvider from "./Context/UserContextProvider";
import AllNotes from "./Components/Note/AllNotes";

function App() {
  return (
    <>
      <UserContextProvider>
        <Sidebar />
        <Bottom />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/allnotes" element={<AllNotes />} />
          <Route path="/texteditor" element={<Texteditor />} />
        </Routes>
      </UserContextProvider>
    </>
  );
}

export default App;
