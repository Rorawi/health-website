import { useEffect } from "react";
import WholeWebsite from "./components/WholeWebsite";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { useSelector,useDispatch } from "react-redux"
import { addUser } from "./action/userAction";
import { db,auth } from "./firebase/config";
import { loggedInPatient } from "./action/authAction";
import { onAuthStateChanged } from "firebase/auth";
import ThemeProvider from "react-bootstrap/ThemeProvider"
// import Routing from "./Routing";


function App() {
  const detailItem = useSelector((state) => (state.UserReducer.details))


  const dispatch = useDispatch()
  useEffect(() => {
    const readData = async () => {
      const q = query(collection(db, "patients"));
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const patientArr = [];
        querySnapshot.forEach((doc) => {
          patientArr.push(doc.data());
        });
        dispatch(addUser(patientArr))
        console.log(patientArr);
      });
    };
    readData()
  }, []
  )

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) dispatch(loggedInPatient(user))
      else { dispatch(loggedInPatient(null)) }
    })
  }, [])

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
