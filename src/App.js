import { useEffect } from "react";
import WholeWebsite from "./components/WholeWebsite";
import { useSelector,useDispatch } from "react-redux"
import { addUser } from "./action/userAction";
import ThemeProvider from "react-bootstrap/ThemeProvider"
// import Routing from "./Routing";


function App() {

  return (
   <>
<ThemeProvider>
<WholeWebsite/>
{/* <Routing/> */}
</ThemeProvider>
   </>
  );
}

export default App;
