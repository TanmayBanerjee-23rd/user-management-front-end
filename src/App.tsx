import "./App.css";
import Header from "./components/header";
import { useSelector } from "react-redux";
import { fetchUsers, selectUsers } from "./redux/userReducer";
import { useEffect, useRef } from "react";
import { store } from "./redux/store";
import UserTilesGridView from "./components/userTilesGrid";

function App() {
  const users = useSelector(selectUsers);
  const isMounted = useRef(false);

  useEffect(() => {
    if (!isMounted.current) {
      store.dispatch(fetchUsers());
      isMounted.current = true;
    }
  }, []);

  return (
    <div className="App appBg">
      <Header />
      <UserTilesGridView users={users.list} />
    </div>
  );
}

export default App;
