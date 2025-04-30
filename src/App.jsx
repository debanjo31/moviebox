import React from "react";
import { Routes, Route } from "react-router-dom";
import { Footer } from "./Layout/Footer";
import { HBar } from "./Layout/NavBar";
import Counter from "./Counter";
import HomePage from "./pages/HomePage";
import RequestForm from "./componenets/RequestForm";
import SingleMovie from "./pages/SingleMovie";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

export default function App() {
  return (
    <div>
      <HBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/request" element={<RequestForm />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/movies/:id" element={<SingleMovie />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer />
    </div>
  );
}

//We create componenet for each route
// if path == / - show homepage
//// - Homepage
// /request - request component
// /contact - contact
// /:id
//:username

//React Hooks
// They are special functions that let you "hook into" React features
// They let you use state and other React features without writing a class
// useState is a Hook that lets you add React state to function components
// useEffect is a Hook that lets you perform side effects in function components
// useContext is a Hook that lets you subscribe to React context without introducing nesting
// useReducer is a Hook that lets you manage complex state logic in function components
// useRef is a Hook that lets you access DOM nodes directly
// useMemo is a Hook that lets you optimize performance by memoizing expensive calculations
// useCallback is a Hook that lets you memoize functions to prevent unnecessary re-renders
// useLayoutEffect is a Hook that lets you perform side effects synchronously after all DOM mutations
// useImperativeHandle is a Hook that lets you customize the instance value that is exposed when using React.forwardRef
// We create moviechild, we styled it in the movie component, we are now going to pass data into it everytime we call it
