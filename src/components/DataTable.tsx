import React, { FunctionComponent } from 'react';
import '../styles/DataTable.module.scss';

const DataTable: FunctionComponent<{ content: { name: string; value: string | number }[] }> = ({ content }) => {
    return (
        <table>
            <tbody>
                {content.map((row, index) => (
                    <tr key={index}>
                        <td>{row.name}</td>
                        <td>{row.value}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default DataTable;
