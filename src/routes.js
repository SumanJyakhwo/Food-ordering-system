/*!

=========================================================
* Argon Dashboard React - v1.2.3
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Index from "views/Index.js";
import Profile from "views/Admin side/Profile.js";
import Maps from "views/Admin side/Maps.js";
import Register from "views/Admin side/Register.js";
import Login from "views/Admin side/Login.js";
import Tables from "views/Admin side/Tables.js";
import Icons from "views/Admin side/Icons.js";
import Projectlist from "views/Admin side/ProjectList";
import AddFoodItems from "views/Admin side/AddFoodItems";
import CartPage from "views/Admin side/Cartpage";
import ViewDetails from "views/Web/View Details/ViewPage";
import Cart from "views/Web/Cart/Cart";
import Payment from "views/Web/Payment/Payment";
import SearchPage from "views/Web/Search Page/SearchPage";
import LoginPage from "views/Web/Login Page/LoginPage";
import Landingpage from "views/Web/Landing Page/Landing Page";
var routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: <Index />,
    layout: "/admin",
  },
  {
    path: "/icons",
    name: "Icons",
    icon: "ni ni-planet text-blue",
    component: <Icons />,
    layout: "/admin",
  },
  
  {
    path: "/maps",
    name: "Maps",
    icon: "ni ni-pin-3 text-orange",
    component: <Maps />,
    layout: "/admin",
  },
  {
    path: "/user-profile",
    name: "User Profile",
    icon: "ni ni-single-02 text-yellow",
    component: <Profile />,
    layout: "/admin",
  },
  {
    path: "/tables",
    name: "Tables",
    icon: "ni ni-bullet-list-67 text-red",
    component: <Tables />,
    layout: "/admin",
  },
  {
    path: "/register",
    name: "Register",
    icon: "ni ni-circle-08 text-pink",
    component: <Register />,
    layout: "/auth",
  },
  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: <Login />,
    layout: "/auth",
  },
  
  {
    path: "/food-items",
    name: "Food Items",
    icon: "fas fa-utensils text-blue",
    component: <Projectlist />,
    layout: "/admin",
  },
  {
    path: "/addfooditems",
    name: "Add Food Items",
    icon: "fas fa-utensils text-blue",
    component: <AddFoodItems />,
    layout: "/admin",
  },
  {
    path: "/cartpage",
    name: "Cart Page",
    icon: "ni ni-cart",
    component: <CartPage />,
    layout: "/admin",
  },
  
  {
    path: "/site",
    name: "Main Page",
    icon: "ni ni-shop",
    component: <Landingpage />,
    layout: "/admin",
  },
  {
    path: "/viewdetails/:code",
    name: "View Page",
    icon: "ni ni-chart-bar-32",
    component: <ViewDetails />,
    layout: "/admin",
  },
  {
    path: "/cart",
    name: "Cart Page",
    icon: "ni ni-money-coins",
    component: <Cart />,
    layout: "/admin",
  },
  {
    path: "/pay",
    name: "Payment Page",
    icon: "ni ni-basket",
    component: <Payment />,
    layout: "/admin",
  },
  {
    path: "/search/:searchText",
    name: "Search Page",
    icon: "ni ni-zoom-split-in",
    component: <SearchPage />,
    layout: "/admin",
  },
  {
    path: "/signin",
    name: "Sign In",
    icon: "ni ni-key-25 text-info",
    component: <LoginPage />,
    layout: "/admin",
  },
  
];
export default routes;
