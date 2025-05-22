import TicketTableRow from "./TicketTableRow";

export default function TicketTable() {
    return (
        <main className="grid">
            <table className="table-fixed  text-left">
                <thead className="bg-gray-50 dark:bg-gray-700">
                    <tr>
                        <th className="w-25 p-4">ID</th>
                        <th className="w-25 p-4">Titulo</th>
                        <th className="w-25 p-4">Status</th>
                        <th className="w-25 p-4">Última Atualização</th>
                    </tr>
                </thead>
                <tbody>
                    <TicketTableRow/>
                    <TicketTableRow/>
                    <TicketTableRow/>
                </tbody>
            </table>
        </main>
    );
}