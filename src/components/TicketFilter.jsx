import DropdownFilter from "./ui/DropdownFilter";
import statusOptions from "../data/statusOptions.json";

export default function TicketFilter( {filterStatus, onFilterChange} ) {
    return (
        <div>
            <h2>Filters</h2>

            <DropdownFilter 
                value={filterStatus}
                onChange={onFilterChange}
                options={statusOptions.map((option) => option.label)}
            />

        </div>
        
    );
}