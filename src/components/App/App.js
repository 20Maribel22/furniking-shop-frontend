import React, { useEffect, useState } from "react";
import "./App.css";
import { auth } from "../../utils/Auth";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import ContactUs from "../ContactUs/ContactUs";
import { AppContext } from "../../context";
import Blog from "../Blog/Blog";
import About from "../About/About";
import Layout from "../Layout/Layout";
import All from "../Shop/All/All";
import NewArrivals from "../Shop/NewArrivals/NewArrivals";
import SinglePageNew from "../Shop/NewArrivals/SinglePageNew/SinglePageNew";
import HotSale from "../Shop/HotSale/HotSale";
import SinglePageHot from "../Shop/HotSale/SinglePageHot/SinglePageHot";
import BestSellers from "../Shop/BestSellers/BestSellers";
import SinglePageBest from "../Shop/BestSellers/SinglPageBest/SinglPageBest";
import Tables from "../Shop/Tables/Tables";
import Chairs from "../Shop/Chairs/Chairs";
import Sofas from "../Shop/Sofas/Sofas";
import Mirrors from "../Shop/Mirrors/Mirrors";
import Stools from "../Shop/Stools/Stools";
import Benches from "../Shop/Benches/Benches";
import ImagePopup from "../ImagePopup/ImagePopup";
import Main from "../Main/Main";
import Drawer from "../Drawer/Drawer";
import Favorite from "../Favorite/Favorite";
import PageNotFound from "../PageNotFound/PageNotFound";
import Profile from "../Profile/Profile";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Delivery from "../Delivery/Delivery";
import SmartCard from "../SmartCard/SmartCard";
import Payment from "../Payment/Payment";
import Connect from "../Connect/Connect";
import Vacancies from "../Vacancies/Vacancies";
import Feedback from "../Feedback/Feedback";
import Notification from "../Notification/Notification";
import Wardrobes from "../Shop/Wardrobes/Wardrobes";
import SinglePageChair from "../Shop/Chairs/SinglePageChair/SinglePageChair";
import SinglePageWardrobe from "../Shop/Wardrobes/SinglePageWardrobe";
import SinglePageTable from "../Shop/Tables/SinglePageTable";
import SinglePageSofa from "../Shop/Sofas/SinglePageSofa";
import SinglePageMirror from "../Shop/Mirrors/SinglePageMirror";
import SinglePageStool from "../Shop/Stools/SinglePageStool";
import SinglePageBench from "../Shop/Benches/SinglePageBench";
import AllProducts from "../Shop/AllProducts/AllProducts";
import SinglePageAll from "../Shop/AllProducts/SinglePageAll";
import { feedbackApi } from "../../utils/FeedbackApi";
import AdminPage from "../AdminPage/AdminPage";

function App() {
  const [selectedCard, setSelectedCard] = useState({});
  const [isOpened, setIsOpened] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [count, setCount] = useState(1);
  const [favorites, setFavorites] = useState([]);
  const [searchItems, setSearchItems] = useState("");
  const [isAuth, setIsAuth] = useState(false);
  const [statusRegister, setStatusRegister] = useState(false);
  const [statusLogin, setStatusLogin] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const [feedback, setFeedback] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  let navigate = useNavigate();
  let isAdmin = currentUser.isAdmin;

  useEffect(() => {
    setIsLoading(true);
    feedbackApi
      .getFeedbackAll()
      .then((data) => {
        setFeedback(data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    auth.setToken(jwt);
    if (jwt) {
      auth
        .getMe()
        .then((user) => {
          if (user) {
            setCurrentUser(user.data);
            setLoggedIn(true);
            setIsAuth(true);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
    if (localStorage.getItem("favorites") !== null) {
      setFavorites(JSON.parse(localStorage.getItem("favorites")));
    }
    if (localStorage.getItem("cart") !== null) {
      setCartItems(JSON.parse(localStorage.getItem("cart")));
    }
  }, [loggedIn]);

  const handleRegister = (name, phone, email, password, isAdmin) => {
    auth
      .register(name, phone, email, password, isAdmin)
      .then((res) => {
        if (res) {
          handleLogin(email, password);
        } else {
          setLoggedIn(false);
          handleLogout();
        }
      })
      .catch((err) => {
        setLoggedIn(false);
        setStatusRegister(err);
      });
  };

  const handleLogin = (email, password) => {
    auth
      .login(email, password)
      .then((data) => {
        if (data.token) {
          localStorage.setItem("jwt", data.token);
          setLoggedIn(true);
          navigate("/");
          setIsAuth(true);
        } else {
          setLoggedIn(false);
        }
      })
      .catch((err) => {
        setStatusLogin(err);
      });
  };

  const handleLogout = () => {
    localStorage.clear();
    setCurrentUser({});
    setLoggedIn(false);
    auth.setToken("");
    navigate("/auth/signin");
    setIsAuth(false);
    setStatusLogin(false);
    setStatusRegister(false);
  };

  const closeAllPopups = () => {
    setIsOpened(false);
    setSelectedCard({});
  };

  const onCardClick = (selectedCard) => {
    setSelectedCard(selectedCard);
  };

  const openDrawer = () => {
    setIsOpened(!isOpened);
  };

  const addPrice = cartItems.reduce(
    (sum, item) => item.price * item.count + sum,
    0
  );
  const addDelivery = Math.round(addPrice * 0.03);
  const salePrice = addPrice >= 1000 ? addDelivery === 0 : addDelivery;
  const totalPriceProduct = salePrice + addPrice;

  const onAddToCart = (data) => {
    if (cartItems.find((item) => item._id === data._id)) {
      setCartItems((prev) =>
        prev.filter((product) => product._id !== data._id)
      );
    }
    setCartItems((prev) => [
      ...prev,
      {
        ...data,
        count: count,
      },
    ]);
  };

  const plusOneProduct = (id) => {
    setCartItems((prev) =>
      prev.map((item) => {
        if (item._id === id) {
          return { ...item, count: item.count + 1 };
        }
        return item;
      })
    );
  };

  const minusOneProduct = (id) => {
    let count = cartItems.find((item) => item._id === id).count;

    if (count === 1) {
      return 1;
    } else {
      setCartItems((prev) =>
        prev.map((item) => {
          if (item._id === id) {
            return { ...item, count: item.count - 1 };
          }
          return item;
        })
      );
    }
  };

  const onDeleteToCart = (_id) => {
    setCartItems((prev) => prev.filter((item) => item._id !== _id));
  };

  const onAddToFavorite = (data) => {
    let findProduct = favorites.some((obj) => obj._id === data._id);
    if (findProduct) {
      setFavorites((prev) => prev.filter((item) => item._id !== data._id));
    } else {
      setFavorites((prev) => [...prev, data]);
    }
  };

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [favorites, cartItems]);

  const onAddItem = (_id) => {
    return cartItems.some((item) => item._id === _id);
  };

  return (
    <>
      <AppContext.Provider
        value={{
          currentUser,
          onAddToCart,
          onAddToFavorite,
          onCardClick,
          onAddItem,
          favorites,
          searchItems,
          setSearchItems,
          cartItems,
          feedback,
          count,
          isLoading,
          setIsLoading,
        }}
      >
        <div className="page">
          <Routes>
            <Route
              path="/"
              element={
                <Layout
                  loggedIn={loggedIn}
                  openDrawer={openDrawer}
                  totalPrice={totalPriceProduct}
                  isAuth={isAuth}
                />
              }
            >
              <Route
                index
                element={
                  <Main
                    loggedIn={loggedIn}
                    onCardClick={onCardClick}
                    onAddItem={onAddItem}
                    cartItems={cartItems}
                  />
                }
              />

              <Route path="shop" element={<All />} />
              <Route path="all-products" element={<AllProducts />} />
              <Route path="all/:id" element={<SinglePageAll />} />
              <Route path="new-arrivals" element={<NewArrivals />} />
              <Route path="new-arrivals/:id" element={<SinglePageNew />} />
              <Route path="hot-sale" element={<HotSale />} />
              <Route path="hot-sale/:id" element={<SinglePageHot />} />
              <Route path="best-sellers" element={<BestSellers />} />
              <Route path="best-sellers/:id" element={<SinglePageBest />} />
              <Route path="wardrobes" element={<Wardrobes />} />
              <Route path="wardrobes/:id" element={<SinglePageWardrobe />} />
              <Route path="tables" element={<Tables />} />
              <Route path="tables/:id" element={<SinglePageTable />} />
              <Route path="chairs" element={<Chairs />} />
              <Route path="chairs/:id" element={<SinglePageChair />} />
              <Route path="sofas" element={<Sofas />} />
              <Route path="sofas/:id" element={<SinglePageSofa />} />
              <Route path="mirrors" element={<Mirrors />} />
              <Route path="mirrors/:id" element={<SinglePageMirror />} />
              <Route path="stools" element={<Stools />} />
              <Route path="stools/:id" element={<SinglePageStool />} />
              <Route path="benches" element={<Benches />} />
              <Route path="benches/:id" element={<SinglePageBench />} />
              <Route path="blog" element={<Blog />} />
              <Route path="about" element={<About />} />
              <Route path="contact-us" element={<ContactUs />} />
              <Route path="vacancies" element={<Vacancies />} />
              <Route
                path="favorite"
                element={<Favorite onAddItem={onAddItem} />}
              />

              <Route
                path="cart"
                element={
                  <Drawer
                    onDeleteToCart={onDeleteToCart}
                    setCartItems={setCartItems}
                    totalPrice={totalPriceProduct}
                    addPrice={addPrice}
                    addDelivery={addDelivery}
                    plusOneProduct={plusOneProduct}
                    minusOneProduct={minusOneProduct}
                  />
                }
              />
              <Route path="notification" element={<Notification />} />
              <Route path="delivery" element={<Delivery />} />
              <Route path="smart-card" element={<SmartCard />} />
              <Route path="payment" element={<Payment />} />
              <Route path="connect" element={<Connect />} />
              <Route path="feedback" element={<Feedback />} />
            </Route>
            <Route path="*" element={<PageNotFound />} />
            <Route
              path="auth/me"
              element={
                isAdmin ? (
                  <Navigate to="/admin" />
                ) : (
                  <Profile loggedIn={loggedIn} handleLogout={handleLogout} />
                )
              }
            />
            <Route
              path="auth/signin"
              element={
                isAuth ? (
                  <Navigate to="/" />
                ) : (
                  <Login handleLogin={handleLogin} statusLogin={statusLogin} />
                )
              }
            />
            <Route
              path="auth/signup"
              element={
                isAuth ? (
                  <Navigate to="/" />
                ) : (
                  <Register
                    handleRegister={handleRegister}
                    statusRegister={statusRegister}
                  />
                )
              }
            />
            <Route
              path="admin/*"
              element={<AdminPage handleLogout={handleLogout} />}
            />
          </Routes>
          <ImagePopup card={selectedCard} onClose={closeAllPopups} />
        </div>
      </AppContext.Provider>
    </>
  );
}

export default App;
