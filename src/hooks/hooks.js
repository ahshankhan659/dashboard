    import React, { useContext } from "react";
    import { MyContext } from "../Context/Context";

    function useData() {
    return useContext(MyContext);
    }

    export default useData;
