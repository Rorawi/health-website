import WholeWebsite from "./components/WholeWebsite";
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
