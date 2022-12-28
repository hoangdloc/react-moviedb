import 'swiper/scss';

import { Fragment, lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import Banner from './components/banner/Banner';
import Main from './components/layout/Main';

const HomePage = lazy(() => import("./pages/HomePage"));
// const MoviePage = lazy(() => import("./pages/MoviePage"));
const MoviePageV2 = lazy(() => import("./pages/MoviePageV2"));
const MovieDetailsPage = lazy(() => import("./pages/MovieDetailsPage"));

function App() {
  return (
    <Fragment>
      <Suspense fallback={<></>}>
        <Routes>
          <Route element={<Main></Main>}>
            <Route
              path="/"
              element={
                <Fragment>
                  <Banner></Banner>
                  <HomePage></HomePage>
                </Fragment>
              }
            ></Route>
            <Route path="/movies" element={<MoviePageV2></MoviePageV2>}></Route>
            <Route
              path="/movie/:movieId"
              element={<MovieDetailsPage></MovieDetailsPage>}
            ></Route>
            <Route path='*' element={<>Not found</>}></Route>
          </Route>
        </Routes>
      </Suspense>
    </Fragment>
  );
}

export default App;
