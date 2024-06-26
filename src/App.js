import './App.css';
import {Provider} from "react-redux";
import store from "./data/store/store";
import {RouterProvider} from "react-router-dom";
import router from "./router";
import 'react-toastify/dist/ReactToastify.css';

function App() {
    return (
        <>
            <Provider store={store}>
                <RouterProvider router={router}/>
            </Provider>
        </>
    );
}

export default App;
