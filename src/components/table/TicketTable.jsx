import TicketTableRow from "./TicketTableRow";
import tickets from '../../data/tickets.json';
import statusOptions from '../../data/statusOptions.json';
import { useState } from "react";

export default function TicketTable( {filterStatus} ) {
    
    const [ticketList, setTicketList] = useState(tickets);

    const handleStatusChange = (id, newStatus) => {
        const updated = ticketList.map((ticket) =>
            ticket.id === id ? { ...ticket, status: newStatus } : ticket
        );
        setTicketList(updated);
    };

    
    const filteredTickets = filterStatus === statusOptions[0].value
    ? ticketList
    : ticketList.filter(ticket => ticket.status === filterStatus);

    return (
        <div className="bg-white dark:bg-gray-800 grid ">
    
            <table className="table-fixed  text-left">
                <thead className="bg-white dark:bg-gray-700">
                    <tr>
                        <th className="w-25 p-4">ID</th>
                        <th className="w-25 p-4">Titulo</th>
                        <th className="w-25 p-4">Status</th>
                        <th className="w-25 p-4">Última Atualização</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredTickets.map((ticket) => (
                        <TicketTableRow 
                            key={ticket.id} 
                            ticket={ticket}
                            handleStatusChange={handleStatusChange}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
}