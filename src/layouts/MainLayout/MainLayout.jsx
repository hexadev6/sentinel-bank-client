import { Outlet } from "react-router-dom";


const MainLayout = () => {
    return (
        <div>
            {/* navbar goes here */}
            
            <Outlet/>

            {/* tab goes here */}
        </div>
    );
};

export default MainLayout;