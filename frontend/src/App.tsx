import {BrowserRouter, Route, Routes} from "react-router-dom";
import React, {Suspense} from "react";

import Tip from "./Tip";
import Test from "./Test";
import Counter from "./Counter";


function App() {

    return (
        <div>
            <Suspense fallback={"Loading..."}>
                <BrowserRouter>
                    <Routes>
                        <Route path={'/*'} element={<Tip />}/>
                        <Route path={'/test'} element={<Test />}/>
                        <Route path={'/counter'} element={<Counter />}/>
                    </Routes>
                </BrowserRouter>
            </Suspense>
        </div>
    );
}

export default App;
