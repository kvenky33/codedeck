import { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ModalProvider from "./Context/ModalContext";
import PlaygroundProvider from "./Context/PlaygroundContext";
import routes from "./Pages/Routes";
const Loader = () => {
  <div>Loading...</div>;
};
function App() {
  return (
    <Suspense fallback={Loader()}>
      <ModalProvider>
        <PlaygroundProvider>
          <BrowserRouter>
            <Routes>
              <>
                {routes.map((route) => (
                  <Route path={route.path} element={route.component} />
                ))}
              </>
            </Routes>
          </BrowserRouter>
        </PlaygroundProvider>
      </ModalProvider>
    </Suspense>
  );
}

export default App;
