import React from 'react';
import styles from './Table.module.css'

const GenericTable = ({ data, columns, actions = [], keyField = 'id' }) => {
  return (
    <div>
      <table className={styles.table}>
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={col.key}>{col.label}</th>
            ))}
            {actions.length > 0 && <th>Acciones</th>}
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item[keyField]}>
              {columns.map((col) => (
                <td key={col.key}>
                  {col.render ? col.render(item, data) : item[col.key]}
                </td>
              ))}
              {actions.length > 0 && (
                <td className={styles.acciones}>
                  {actions.map((action, idx) => (
                    <button
                      key={idx}
                      onClick={() => action.onClick(item, data, () => {})}
                      className={styles[action.label.toLowerCase()]}
                    >
                      {action.label}
                    </button>
                  ))}
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GenericTable;
