import { FC, useState } from "react"
import ComponentFilter from "../asesorias/ComponentFilter"

const ComponentFilterApplied: FC = () => {
  const [statusDate, setStatusDate] = useState<string>(new Date().toLocaleDateString());
  const [statusModality, setStatusModality] = useState<string>("Virtual");
  const [statusState, setStatusState] = useState<string>("Aceptada");
  return(
    <div className="datatable__filters-applied">
      <ComponentFilter filterContent={statusDate} />
      <ComponentFilter filterContent={statusModality} />
      <ComponentFilter filterContent={statusState} />
    </div>
  )
}

export default ComponentFilterApplied;