import ScenarioModel from "../../oseg/engine/models/ScenarioModel";
import { BulkStateFunction } from "./BulkStateFunction";

interface BulkStateFunctionProps {
    setBulkStateFunction : (f : BulkStateFunction) => void;
    data : ScenarioModel;
}

export default BulkStateFunctionProps;