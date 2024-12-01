import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from "./App.jsx";
import {Provider} from "react-redux";
import store from "./app/redux/store/index.js";
import KeyboardNavigation from "./app/common/keyboardNavigation/index.jsx";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <KeyboardNavigation>
            <Provider store={store}>
                <App/>
            </Provider>
        </KeyboardNavigation>
    </StrictMode>,
)
