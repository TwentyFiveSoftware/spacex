import React from 'react';
import './DataTable.module.scss';

const DataTable: React.FC<{ content: { name: string; value: string | number | null }[] }> = ({ content }) => {
    return (
        <table>
            <tbody>
                {content.map((row, index) => (
                    <tr key={index}>
                        <td>{row.name}</td>
                        <td>{row.value ?? '---'}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default DataTable;
