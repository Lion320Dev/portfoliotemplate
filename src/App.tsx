import "../public/assets/scss/main.scss";
import "odometer/themes/odometer-theme-default.css"; // Import theme
import { ToastContainer } from "react-toastify";
import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

import { ErrorBoundary } from "react-error-boundary";
const DemoModalToggler = lazy(
  () => import("@/components/common/DemoModalToggler")
);
const DemoModal = lazy(() => import("@/components/modals/DemoModal"));
const PortfolioModal = lazy(() => import("@/components/modals/PortfolioModal"));
const BlogModal = lazy(() => import("@/components/modals/BlogModal"));
const ContentProvider = lazy(() =>
  import("@/contexts/ContentContext").then((m) => ({
    default: m.ContentProvider,
  }))
);
const ScrollTop = lazy(() => import("@/components/common/ScrollTop"));
const Chat = lazy(() => import("@/components/common/Chat"));
const Sidebar = lazy(() => import("@/components/common/Sidebar"));
const GlobalEffectsProvider = lazy(
  () => import("@/components/common/GlobalEffectsProvider")
);
const ScrollTopBehaviour = lazy(
  () => import("./components/common/ScrollToTopBehaviour")
);

// Dark homepages
const Homepage1 = lazy(() => import("./pages/dark-homes/index-01"));
const Homepage2 = lazy(() => import("./pages/dark-homes/index-02"));
const Homepage3 = lazy(() => import("./pages/dark-homes/index-03"));
const Homepage4 = lazy(() => import("./pages/dark-homes/index-04"));
const Homepage5 = lazy(() => import("./pages/dark-homes/index-05"));
const Homepage6 = lazy(() => import("./pages/dark-homes/index-06"));
const Homepage7 = lazy(() => import("./pages/dark-homes/index-07"));
const Homepage8 = lazy(() => import("./pages/dark-homes/index-08"));
const Homepage9 = lazy(() => import("./pages/dark-homes/index-09"));
const Homepage10 = lazy(() => import("./pages/dark-homes/index-10"));
const Homepage11 = lazy(() => import("./pages/dark-homes/index-11"));
const Homepage12 = lazy(() => import("./pages/dark-homes/index-12"));
const Homepage13 = lazy(() => import("./pages/dark-homes/index-13"));
const Homepage14 = lazy(() => import("./pages/dark-homes/index-14"));
const Homepage15 = lazy(() => import("./pages/dark-homes/index-15"));
const Homepage16 = lazy(() => import("./pages/dark-homes/index-16"));
const Homepage17 = lazy(() => import("./pages/dark-homes/index-17"));

// Light homepages
const HomepageLight1 = lazy(() => import("./pages/light-homes/index-white"));
const HomepageLight2 = lazy(() => import("./pages/light-homes/index-02-white"));
const HomepageLight3 = lazy(() => import("./pages/light-homes/index-03-white"));
const HomepageLight4 = lazy(() => import("./pages/light-homes/index-04-white"));
const HomepageLight5 = lazy(() => import("./pages/light-homes/index-05-white"));
const HomepageLight6 = lazy(() => import("./pages/light-homes/index-06-white"));
const HomepageLight7 = lazy(() => import("./pages/light-homes/index-07-white"));
const HomepageLight8 = lazy(() => import("./pages/light-homes/index-08-white"));
const HomepageLight9 = lazy(() => import("./pages/light-homes/index-09-white"));
const HomepageLight10 = lazy(
  () => import("./pages/light-homes/index-10-white")
);
const HomepageLight11 = lazy(
  () => import("./pages/light-homes/index-11-white")
);
const HomepageLight12 = lazy(
  () => import("./pages/light-homes/index-12-white")
);
const HomepageLight13 = lazy(
  () => import("./pages/light-homes/index-13-white")
);
const HomepageLight14 = lazy(
  () => import("./pages/light-homes/index-14-white")
);
const HomepageLight15 = lazy(
  () => import("./pages/light-homes/index-15-white")
);
const HomepageLight16 = lazy(
  () => import("./pages/light-homes/index-16-white")
);
const HomepageLight17 = lazy(
  () => import("./pages/light-homes/index-17-white")
);

const LightHomepagesLayout = lazy(() => import("./pages/light-homes/layout"));

function App() {
  return (
    <>
      <ErrorBoundary
        fallbackRender={({ error, resetErrorBoundary }) => (
          <div
            className="d-flex flex-column align-items-center justify-content-center"
            style={{ height: "100vh" }}
          >
            <h2>Something went wrong.</h2>
            <pre style={{ color: "red" }}>{error.message}</pre>
            <button
              className="btn btn-primary mt-3"
              onClick={resetErrorBoundary}
            >
              Try again
            </button>
          </div>
        )}
      >
        <Suspense
          fallback={
            <div
              className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center bg-white"
              style={{ zIndex: 1050 }}
            >
              <div
                className="spinner-border text-primary"
                role="status"
                style={{ width: "3rem", height: "3rem" }}
              >
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          }
        >
          <ContentProvider>
            <Routes>
              <Route path="/">
                <Route index element={<Homepage1 />} />
                <Route path="index-02" element={<Homepage2 />} />
                <Route path="index-03" element={<Homepage3 />} />
                <Route path="index-04" element={<Homepage4 />} />
                <Route path="index-05" element={<Homepage5 />} />
                <Route path="index-06" element={<Homepage6 />} />
                <Route path="index-07" element={<Homepage7 />} />
                <Route path="index-08" element={<Homepage8 />} />
                <Route path="index-09" element={<Homepage9 />} />
                <Route path="index-10" element={<Homepage10 />} />
                <Route path="index-11" element={<Homepage11 />} />
                <Route path="index-12" element={<Homepage12 />} />
                <Route path="index-13" element={<Homepage13 />} />
                <Route path="index-14" element={<Homepage14 />} />
                <Route path="index-15" element={<Homepage15 />} />
                <Route path="index-16" element={<Homepage16 />} />
                <Route path="index-17" element={<Homepage17 />} />
                // light pages
                <Route
                  path="index-white"
                  element={
                    <LightHomepagesLayout>
                      <HomepageLight1 />
                    </LightHomepagesLayout>
                  }
                />
                <Route
                  path="index-02-white"
                  element={
                    <LightHomepagesLayout>
                      <HomepageLight2 />
                    </LightHomepagesLayout>
                  }
                />
                <Route
                  path="index-03-white"
                  element={
                    <LightHomepagesLayout>
                      <HomepageLight3 />
                    </LightHomepagesLayout>
                  }
                />
                <Route
                  path="index-04-white"
                  element={
                    <LightHomepagesLayout>
                      <HomepageLight4 />
                    </LightHomepagesLayout>
                  }
                />
                <Route
                  path="index-05-white"
                  element={
                    <LightHomepagesLayout>
                      <HomepageLight5 />
                    </LightHomepagesLayout>
                  }
                />
                <Route
                  path="index-06-white"
                  element={
                    <LightHomepagesLayout>
                      <HomepageLight6 />
                    </LightHomepagesLayout>
                  }
                />
                <Route
                  path="index-07-white"
                  element={
                    <LightHomepagesLayout>
                      <HomepageLight7 />
                    </LightHomepagesLayout>
                  }
                />
                <Route
                  path="index-08-white"
                  element={
                    <LightHomepagesLayout>
                      <HomepageLight8 />
                    </LightHomepagesLayout>
                  }
                />
                <Route
                  path="index-09-white"
                  element={
                    <LightHomepagesLayout>
                      <HomepageLight9 />
                    </LightHomepagesLayout>
                  }
                />
                <Route
                  path="index-10-white"
                  element={
                    <LightHomepagesLayout>
                      <HomepageLight10 />
                    </LightHomepagesLayout>
                  }
                />
                <Route
                  path="index-11-white"
                  element={
                    <LightHomepagesLayout>
                      <HomepageLight11 />
                    </LightHomepagesLayout>
                  }
                />
                <Route
                  path="index-12-white"
                  element={
                    <LightHomepagesLayout>
                      <HomepageLight12 />
                    </LightHomepagesLayout>
                  }
                />
                <Route
                  path="index-13-white"
                  element={
                    <LightHomepagesLayout>
                      <HomepageLight13 />
                    </LightHomepagesLayout>
                  }
                />
                <Route
                  path="index-14-white"
                  element={
                    <LightHomepagesLayout>
                      <HomepageLight14 />
                    </LightHomepagesLayout>
                  }
                />
                <Route
                  path="index-15-white"
                  element={
                    <LightHomepagesLayout>
                      <HomepageLight15 />
                    </LightHomepagesLayout>
                  }
                />
                <Route
                  path="index-16-white"
                  element={
                    <LightHomepagesLayout>
                      <HomepageLight16 />
                    </LightHomepagesLayout>
                  }
                />
                <Route
                  path="index-17-white"
                  element={
                    <LightHomepagesLayout>
                      <HomepageLight17 />
                    </LightHomepagesLayout>
                  }
                />
              </Route>
            </Routes>

            <div className="modals-wrapper">
              <PortfolioModal />
              <BlogModal />
              <DemoModal />
              <DemoModalToggler />
              <Sidebar />
              <Chat />
            </div>
            <ScrollTop />
            <ToastContainer
              position="bottom-right"
              // autoClose={2000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
            <ScrollTopBehaviour />
            <GlobalEffectsProvider />
          </ContentProvider>
        </Suspense>
      </ErrorBoundary>
    </>
  );
}

export default App;
