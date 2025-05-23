import DropdownFilter from "./ui/DropdownFilter";
import filterStatusOptions from "../data/filterStatusOptions.json";

export default function TicketFilter( {filterStatus, onFilterChange} ) {
    return (
        <div>
            <h2 className="px-1">Filtro:</h2>

            <DropdownFilter 
                value={filterStatus}
                onChange={onFilterChange}
                options={filterStatusOptions.map((option) => option.label)}
            />

        </div>
        
    );
}