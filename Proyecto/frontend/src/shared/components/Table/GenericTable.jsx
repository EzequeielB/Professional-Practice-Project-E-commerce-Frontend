import React from "react";
import styles from "./Table.module.css";

const GenericTable = ({
  data = [],
  columns,
  actions = [],
  keyField = "id",
}) => {
  if (!Array.isArray(data) || data.length === 0) {
    return <div>No hay registros.</div>;
  }

  return (
    <div>
      <table className={styles.table}>
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={col.key} scope="col">
                {col.label}
              </th>
            ))}
            {actions.length > 0 && <th scope="col">Acciones</th>}
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item[keyField]}>
              {columns.map((col) => (
                <td key={col.key}>
                  {col.render ? col.render(item) : item[col.key]}
                </td>
              ))}
              {actions.length > 0 && (
                <td className={styles.acciones}>
                  {actions.map((action, idx) => (
                    <button
                      key={idx}
                      onClick={() => action.onClick(item)}
                      className={styles[action.variant] || styles.defaultAction}
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
