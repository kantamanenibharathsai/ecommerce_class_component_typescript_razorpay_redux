import React from "react";
import { useNavigate } from "react-router-dom";

const withRouter = (OriginalComponent: React.ComponentState) => {
    const ComponentWithRouter = (props: Object) => {
        const navigate = useNavigate();
        // const location = useLocation();
        return (
            <OriginalComponent {...props} navigate={navigate} />
        );
    };
    return ComponentWithRouter;
};

export default withRouter;