import * as React from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/routes';
import {Provider} from "react-redux";
import {store} from "./reducers/store/store";

export default function App() {
    return (
        <Provider store={store}>
        <RouterProvider router={router} />
        </Provider>
    )
}

