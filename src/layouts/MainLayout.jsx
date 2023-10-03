import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <div className="2xl:container mx-auto font-poppins">
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;