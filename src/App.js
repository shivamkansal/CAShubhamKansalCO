import React from "react";
import { BrowserRouter, HashRouter, Route, Switch } from "react-router-dom";
import protectedRoutes from "./components/protectedRoutes";
import ProtectedRouteHoc from "./components/ProtectedRouteHoc";
import { useEffect } from "react";

//Index views
import Index from "./views/index";
//views/services
import Services1 from "./views/services/services1";
import Services2 from "./views/services/services2";
import Services3 from "./views/services/services3";
import Services4 from "./views/services/services4";
import Services5 from "./views/services/services5";
import Services6 from "./views/services/services6";
import Services7 from "./views/services/services7";
import Services8 from "./views/services/services8";
import Services9 from "./views/services/services9";
//views/info
import Careers from "./views/careers";
import Contact from "./views/contact";
import Login from "./views/login";
//view/admin
import AdminCarrer from "./views/Admin/AdminCareers.js";
import AdminContact from "./views/Admin/AdminContact.js";
import AdminForm from "./views/Admin/AdminForm.js";

//importing firebase and configurations of it
import * as firebase from "firebase";
import firebaseConfig from "./config";

//initialising firebase
if (!firebase.app.length) {
  firebase.initializeApp(firebaseConfig);
}

export const AuthContext = React.createContext(null);

export default function App() {
  const [isLoggedIn, setLoggedIn] = React.useState(false);
  function readSession() {
    const user = window.sessionStorage.getItem(
      `firebase:authUser:${firebaseConfig.apiKey}:[DEFAULT]`
    );
    if (user) setLoggedIn(true);
  }
  useEffect(() => {
    readSession();
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setLoggedIn }}>
      {/* Is logged in? {JSON.stringify(isLoggedIn)} */}
      <BrowserRouter>
        <Switch>
          {protectedRoutes.map(route => (
            <ProtectedRouteHoc
              key={route.path}
              isLoggedIn={isLoggedIn}
              path={route.path}
              component={route.main}
              exact={route.exact}
              public={route.public}
            />
          ))}
          <Route exact path="/" component={Index} />
          <Route path="/services/Accounting-Services" component={Services1} />
          <Route
            path="/services/Auditing-&-Assurance-Services"
            component={Services2}
          />
          <Route
            path="/services/Business-Process-Outsourcing-Services"
            component={Services3}
          />
          <Route path="/services/Payroll" component={Services4} />
          <Route path="/services/Income Tax" component={Services5} />
          <Route
            path="/services/Company-Law-Matters-Consultancy"
            component={Services6}
          />
          <Route path="/services/Financial-Services" component={Services7} />
          <Route path="/services/TIN-PAN-Facilitation" component={Services8} />
          <Route
            path="/services/GST"
            component={Services9}
          />

          <Route path="/careers" component={Careers} />
          <Route path="/contact" component={Contact} />
          <Route path="/login" component={Login} />
          <Route exact path="/admin" component={AdminForm} />
          <Route path="/admin/careers" component={AdminCarrer} />
          <Route path="/admin/contact" component={AdminContact} />
        </Switch>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}
