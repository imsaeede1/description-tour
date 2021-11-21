import React from "react";

const checkInput = ({ chechboxOptions, name, formik }) => {
  return (
    <div className={styles.formControl}>
      {chechboxOptions.map((item) => (
        <React.Fragment key={item.value}>
          <input
            type="checkbox"
            id={item.value}
            name={name}
            value={item.value}
            onChange={formik.handleChange}
            checked={formik.values[name].includes(item.value)}
            className={styles.inptsty}
          />
          <label htmlFor={item.value} className={styles.textLable}>
            {item.label}
          </label>
        </React.Fragment>
      ))}
    </div>
  );
};

export default checkInput;
