import * as React from "react";
import Harvest from "../components/Harvest";
import Scoreboard from "../components/Scoreboard";

const indexPage = () => (
    <div>
        <Scoreboard title="Welcome" />
        <Harvest />
    </div>
)
export default indexPage