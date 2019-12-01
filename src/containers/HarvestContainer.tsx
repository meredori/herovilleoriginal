import * as React from "react";
import { useDispatch, useSelector } from 'react-redux'
import { ApplicationState } from '../store'
import { Stockpile } from '../store/stockpile'

interface HarvestProps { 
    stockpile: Stockpile
}

interface HarvestRenderProps {
    render?: (props: HarvestProps) => React.ReactElement
    children?: (props: HarvestProps) => React.ReactElement
}

const HarvestContainer: React.FC<HarvestRenderProps> = ({ render, children }) => {

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
export default HarvestContainer