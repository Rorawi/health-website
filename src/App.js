import WholeWebsite from "./components/WholeWebsite";
import ThemeProvider from "react-bootstrap/ThemeProvider"


function App() {
  return (
   <>
<ThemeProvider>
<WholeWebsite/>
</ThemeProvider>
   </>
  );
}

export default App;
