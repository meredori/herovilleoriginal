import * as React from "react";
import ScoreboardContainer from "../containers/ScoreboardContainer"
import {Stockpile} from '../store/stockpile/types'
import Harvest from "./Harvest";

interface ScoreboardProps {
    title: string
  }

const Scoreboard = ({title}:ScoreboardProps) => (
    <div>
    <span>{title}</span>
    <ScoreboardContainer>
    {(data) => (
      <div>
    <div>Resources:{data.stockpile.resources} Gold: {data.stockpile.gold}</div>
      </div>

    )}
    </ScoreboardContainer>

    </div>
)
export default Scoreboard