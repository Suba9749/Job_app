import { Box } from "@chakra-ui/react";
import { Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import CreatePage from "./pages/CreatePage";
function App() {
  return (
    <Box minH={"100vh}"} bg={"gray.100"}>
      <Navbar />
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<CreatePage/>} />
        
      </Routes>

    </Box>
  )
}

export default App;
