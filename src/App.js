import "./App.css";
import { Route, Switch } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { persistor, store } from "./store";
import { PersistGate } from "redux-persist/integration/react";

//import pages
import Home from "./pages/home";
import Login from "./pages/login";
import About from "./pages/about";
import Menu from "./pages/menu";
import CreateMenu from "./pages/createMenu";
import EditMenu from "./pages/editMenu";
import Post from "./pages/post";
import CreatePost from "./pages/createPost";
import EditPost from "./pages/editPost";
import Orders from "./pages/orders";

function App() {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <Router>
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/login" exact component={Login} />
                        <Route path="/about" exact component={About} />
                        <Route path="/menu" exact component={Menu} />
                        <Route path="/menu/create" exact component={CreateMenu} />
                        <Route path="/menu/edit/:id" exact component={EditMenu} />
                        <Route path="/post" exact component={Post} />
                        <Route path="/post/create" exact component={CreatePost} />
                        <Route path="/post/edit/:id" exact component={EditPost} />
                        <Route path="/orders" exact component={Orders} />
                    </Switch>
                </Router>
            </PersistGate>
        </Provider>
    );
}

export default App;
