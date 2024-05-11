 import './App.css';
 import {Provider} from "react-redux";
import store from "./data/store/store";
import {RouterProvider} from "react-router-dom";

function App() {
    return (
        <>
            <Provider store={store}>
                {/*<RouterProvider>*/}

                {/*</RouterProvider>*/}
            </Provider>
        </>
    );
}

export default App;
