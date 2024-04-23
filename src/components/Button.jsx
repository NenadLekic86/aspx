import React from 'react'

const Button = props => {
  const btnEnableDisable = !props.isDisabled ? "btn-enable" : "btn-disabled";

  return (
    <button
      id={props.id}
      className={`btn-main uppercase flex flex-row items-center px-[23px] py-[10px] ${btnEnableDisable}`}
      onClick={props.clickHandler}
      type={props.type}
      disabled={props.isDisabled}
    >
      {props.value}
    </button>
  );
};

Button.defaultProps = {
  type: "button",

  disabled: false
};

export default Button