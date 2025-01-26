import { ScenarioModel } from "../../oseg/engine/models/ScenarioModel";
import { BulkStateFunction } from "./BulkStateFunction";

interface BulkStateFunctionProps {
    inUse : boolean;
    setBulkStateFunction : (f : BulkStateFunction) => void;
    data : ScenarioModel;
}

export default BulkStateFunctionProps;