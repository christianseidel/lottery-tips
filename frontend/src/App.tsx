import {BrowserRouter, Route, Routes} from "react-router-dom";
import React, {Suspense} from "react";

import TipOfLotto from "./TipOfLotto";
import Test from "./Test";
import Counter from "./Counter";
import TipOfEuroJackpot from "./TipOfEuroJackpot";


function App() {

    return (
        <div>
            <Suspense fallback={"Loading..."}>
                <BrowserRouter>
                    <Routes>
                        <Route path={'/*'} element={<TipOfLotto />}/>
                        <Route path={'/test'} element={<Test />}/>
                        <Route path={'/counter'} element={<Counter />}/>
                        <Route path={'/lotto'} element={<TipOfLotto />}/>
                        <Route path={'/eurojackpot'} element={<TipOfEuroJackpot />}/>
                    </Routes>
                </BrowserRouter>
            </Suspense>
        </div>
    );
}

export default App;
