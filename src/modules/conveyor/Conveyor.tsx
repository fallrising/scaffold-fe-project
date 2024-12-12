// src/modules/conveyor/Conveyor.tsx
import InfiniteScroll from "src/shared/components/ui/infiniteScroll";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Conveyor.css";

const Conveyor = () => {
    return (
        <div className="content-box">
            <div className="infinite-scroll-container">
                <InfiniteScroll />
            </div>
            {/* Single ToastContainer for the entire component */}
            <ToastContainer position="bottom-right" autoClose={3000} />
        </div>
    );
};

export default Conveyor;
