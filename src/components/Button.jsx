import React from "react";

const Button = ({ styles }) => (
    <button
        type="button"
        className={`font-poppins font-medium text-[18px] rounded-[10px] text-primary outline-none py-4 px-6 bg-blue-gradient ${styles}`}
    >
        Get Started
    </button>
);

export default Button;
