import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Footer from "./other/Footer";
import React, { useState } from "react";
import { NotFound } from "./pages";
import { motion, AnimatePresence } from "framer-motion";
const LazyDashboard = React.lazy(() => import("./pages/Dashboard"));
const LazyLogin = React.lazy(() => import("./pages/auth/Login"));
const LazyRegister = React.lazy(() => import("./pages/auth/Register"));
const LazyTables = React.lazy(() => import("./pages/Tables"));

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;

export const AppRoutes = () => {
  const location = useLocation();
  const routerName = location.pathname;
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <React.Suspense fallback="">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <LazyDashboard
                    setIsDrawerOpen={setIsDrawerOpen}
                    isDrawerOpen={isDrawerOpen}
                  />
                </motion.div>
              </React.Suspense>
            }
          />
          <Route
            path="/tables"
            element={
              <React.Suspense fallback="">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <LazyTables
                    setIsDrawerOpen={setIsDrawerOpen}
                    isDrawerOpen={isDrawerOpen}
                  />
                </motion.div>
              </React.Suspense>
            }
          />
          <Route
            path="/login"
            element={
              <React.Suspense fallback="">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  <LazyLogin />
                </motion.div>
              </React.Suspense>
            }
          />
          <Route
            path="/register"
            element={
              <React.Suspense fallback="">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  <LazyRegister />
                </motion.div>
              </React.Suspense>
            }
          />
          <Route
            path="*"
            element={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <NotFound />
              </motion.div>
            }
          />
        </Routes>
      </AnimatePresence>
      {["/login", "/register"]?.includes(routerName) && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: 2 }}
        >
          <Footer container={true} />
        </motion.div>
      )}
    </>
  );
};
