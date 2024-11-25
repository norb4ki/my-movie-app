import React from 'react';
import {Outlet} from "react-router-dom";

const MainLayout = () => {
    return (
        <div>
here is main layout
            <Outlet/>
        </div>
    );
};

export default MainLayout;