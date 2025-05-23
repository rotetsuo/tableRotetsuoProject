import statusOptions from '../../data/statusOptions.json';
import { PencilIcon } from '@heroicons/react/20/solid';
import { useState } from 'react';

export default function TicketTableRow({ ticket, handleStatusChange, onOpen }) {
    const [isEditing, setIsEditing] = useState(false)
    return (
        <tr className="border-b border-gray-400"> 
            <td   className="p-4 ">
                {ticket.id}
            </td>
            <td onClick={() => onOpen(ticket)} className="p-4 hover:underline cursor-pointer">{ticket.title}</td>
            <td className="p-4 relative group">
                {isEditing ? (
                    <select
                        value={ticket.status}
                        onChange={(e) => {
                            handleStatusChange(ticket.id, e.target.value);
                            setIsEditing(false); // fecha edição depois de mudar
                        }}
                        onBlur={() => setIsEditing(false)} // fecha ao perder o foco
                        className="w-full bg-gray-100 dark:bg-gray-700 text-black dark:text-white px-2 py-1 rounded"
                        autoFocus
                    >
                        {statusOptions.map((opt) => (
                            <option key={opt.value} value={opt.value}>
                                {opt.label}
                            </option>
                        ))}
                    </select>
                ) : (
                    <>
                        {ticket.status}
                            <button
                                onClick={() => setIsEditing(true)}
                                    className="absolute right-1 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition"
                            >
                                <PencilIcon className="w-4 h-4 text-gray-400 hover:text-gray-600" />
                            </button>
                    </>
                )}
            </td>
            <td className="p-4">{ticket.lastUpdated}</td>
        </tr>         
    );
}