import DropdownFilter from "./ui/DropdownFilter";

export default function TicketFilter( {filterStatus, onFilterChange} ) {
    const options = ['Todos', 'Aberto', 'Em Progresso', 'Concluído'];
    return (
        <div>
            <h2>Filters</h2>

            <DropdownFilter 
                value={filterStatus}
                onChange={onFilterChange}
                options={options}
            />

        </div>
        
    );
}