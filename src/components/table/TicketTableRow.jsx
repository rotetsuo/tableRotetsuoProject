export default function TicketTableRow({ ticket }) {
    return (
        <tr className="border-b border-gray-400"> 
            <td className="p-4">{ticket.id}</td>
            <td className="p-4">{ticket.title}</td>
            <td className="p-4">{ticket.status}</td>
            <td className="p-4">{ticket.lastUpdated}</td>
        </tr>         
    );
}