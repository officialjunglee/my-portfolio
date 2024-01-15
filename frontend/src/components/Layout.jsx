import Navbar from "./Navbar";

// Layout.js

const Layout = ({ children }) => {
    return (
        <div>
            <Navbar />
            <div className="container mx-auto p-4">{children}</div>
        </div>
    );
};

export default Layout;
