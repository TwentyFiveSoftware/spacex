import React from 'react';
import './DataTable.module.scss';

interface Props {
    content: {
        name: string;
        value: string | number | null;
    }[];
}

const DataTable: React.FC<Props> = ({ content }: Props) => {
    return (
        <table>
            <tbody>
                {content.map((row, i) => (
                    <tr key={i}>
                        <td>{row.name}</td>
                        <td>{row.value ?? '---'}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default DataTable;
