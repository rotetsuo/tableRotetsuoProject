import TicketTableRow from "./TicketTableRow";
import tickets from '../../data/tickets.json';
import statusOptions from '../../data/statusOptions.json';
import { useState } from "react";
import RightPanel from "../ui/RightPanel";

export default function TicketTable( {filterStatus} ) {
    
    const [ticketList, setTicketList] = useState(tickets);

    const [selectedTicket, setSelectedTicket] = useState(null);

    const handleStatusChange = (id, newStatus) => {
        const updated = ticketList.map((ticket) =>
            ticket.id === id ? { ...ticket, status: newStatus } : ticket
        );
        setTicketList(updated);
    };

    const handleAddComment = (id, commentText) => {
        const updatedTickets = ticketList.map(ticket =>
            ticket.id === id
                ? { ...ticket, comments: [...(ticket.comments || []), commentText] }
                : ticket
        );
        setTicketList(updatedTickets);

        const updatedTicket = updatedTickets.find(t => t.id === id);
            setSelectedTicket(updatedTicket);
        };

    
    
    const filteredTickets = filterStatus === statusOptions[0].value
    ? ticketList
    : ticketList.filter(ticket => ticket.status === filterStatus);

    return (
        <div className="bg-white dark:bg-[#1f1f1f] grid ">
    
            <table className="table-fixed  text-left">
                <thead className="bg-white dark:bg-[#007aff]">
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
                            onOpen={(ticket => setSelectedTicket(ticket))}
                        />
                    ))}
                </tbody>
            </table>
            <RightPanel 
                open={!!selectedTicket}
                onClose={() => setSelectedTicket(null)}
                ticket={selectedTicket}
                onAddComment={(text) => handleAddComment(selectedTicket.id, text)}
            />
        </div>

    );
}