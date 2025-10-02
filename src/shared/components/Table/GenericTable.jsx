import React from "react";
import styles from "./Table.module.css";

const GenericTable = ({ data = [], columns, actions = [], keyField = "id" }) => {
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
                  {actions.map((action, idx) => {
                    const variantClass =
                      action.variant && typeof styles[action.variant] === "string"
                        ? styles[action.variant]
                        : styles.defaultAction || "";
                    const safeCls = typeof variantClass === "string" ? variantClass : "";

                    return (
                      <button
                        key={idx}
                        onClick={() => action.onClick(item, data, (newItems) => {
                          // legacy support: if action expects setItems callback
                          if (typeof newItems === "function") newItems();
                        })}
                        className={safeCls}
                        type="button"
                      >
                        {action.label}
                      </button>
                    );
                  })}
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
