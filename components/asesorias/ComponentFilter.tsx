import { FC } from "react";

type Props = {
  filterContent: string | Date,
}

const ComponentFilter: FC<Props> = ({ filterContent }:Props) => {
  if(filterContent){
    return (
      <>
        <div>
            <span className="datatable__filters-input">{filterContent}</span>
        </div>
      </>
    );
  }
  return (
    <></>
  ); 
}
export default ComponentFilter;