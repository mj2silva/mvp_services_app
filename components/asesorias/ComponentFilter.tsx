import { FC } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

type Props = {
  filterContent: string | Date,
}

const ComponentFilter: FC<Props> = ({ filterContent }:Props) => {
  if(filterContent){
    return (
      <>
        <div>
          <div className="datatable__filters-input">
            {filterContent}
            <button type="button" className="datatable__filter-button datatable__filter-button--delete">
              <FontAwesomeIcon icon={faTimes}  />
            </button>
          </div>
        </div>
      </>
    );
  }
  
  return (
    <></>
  ); 
}
export default ComponentFilter;