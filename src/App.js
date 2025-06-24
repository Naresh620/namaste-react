import React, { lazy, Suspense, useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./components/Header";
import { Body } from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/userContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

const Grocery = lazy(() => import("./components/Grocery"));


const AppLayout = () => {
  const [userName,setuserName]=useState();

//athentication
useEffect(()=>{
  //Make an api call and send username and password

  const data={
    name:"Naresh"
  };
  setuserName(data.name);
},[]);
  return (
    <Provider store={appStore}>
    <UserContext.Provider value={{loggedInuser:userName, setuserName}}>
    <div>
      <Header />
      <Outlet />
    </div>
    </UserContext.Provider>
    </Provider>
  );
};

const AppRouter = createBrowserRouter(
  [
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <Error />,
      children: [
        { path: "/", element: <Body /> },
        { path: "/about", element: <About /> },
        { path: "/contact", element: <Contact /> },
        { path:"/cart", element:<Cart/>},
        {
          path: "/grocery",
          element: (
            <Suspense fallback={"Loading..."}>
              <Grocery />
            </Suspense>
          ),
        },
        {
          path: "/restaurant/:resId",
          element: <RestaurantMenu />,
        },
      ],
    },
  ],
  {
    future: {
      v7_startTransition: true,
    },
  }
);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={AppRouter} />);
