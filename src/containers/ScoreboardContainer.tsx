import * as React from "react";
import { useDispatch, useSelector } from 'react-redux'
import { ApplicationState } from '../store'
import { Stockpile } from '../store/stockpile'

interface ScoreboardProps { 
    stockpile: Stockpile
}

interface ScoreboardRenderProps {
    render?: (props: ScoreboardProps) => React.ReactElement
    children?: (props: ScoreboardProps) => React.ReactElement
}

const ScoreboardContainer: React.FC<ScoreboardRenderProps> = ({ render, children }) => {

    const { data } = useSelector((state: ApplicationState) => state.stockpile)
    const dispatch = useDispatch()
    if (render) {
      return render({stockpile: data})
    } 
    if (children) {
        return children({stockpile: data})
      } 
    return null
}
export default ScoreboardContainer