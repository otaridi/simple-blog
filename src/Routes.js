import React from "react"
import './styles/App.css';
import {Route, Switch} from 'react-router-dom';
import MainPage from "./pages/main/MainPage";
import PostPage from "./pages/posts/PostPage";
import UserPage from "./pages/user/UserPage";
import {routes} from "./config/routes";
import PageNotFound from "./components/PageNotFound";


function Routes() {
    return (
         <>
            <Switch>
                <Route path={routes.main} exact><MainPage/></Route>
                <Route path={`${routes.post}/:id`}><PostPage/></Route>
                <Route path={`${routes.user}/:id`}><UserPage/></Route>
                <Route><PageNotFound /></Route>
            </Switch>
         </>
    );
}

export default Routes;
