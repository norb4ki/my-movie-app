import React from 'react';
import {Outlet} from "react-router-dom";

const MainLayout = () => {
    return (
        <>
here is main layout
            <Outlet/>
        </>
    );
};

export default MainLayout;