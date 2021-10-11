import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";

interface InputTextProps {
  icon?: any | undefined;
  required?: boolean;
  type: string;
  info?: string | undefined;
  placeholder: string;
  name: string;
  value: string;
  onChange?: (e: any) => void;
  style?: string;
}
const InputText: React.FC<InputTextProps> = ({
  icon,
  required,
  type,
  placeholder,
  info,
  onChange,
  value,
  name,
  style,
}) => {
  return (
    <div>
      <div className={`relative w-full h-10 mt-4 ${style} `}>
        {icon && (
          <label className="absolute flex items-center h-full mx-2 text-gray-300">
            <FontAwesomeIcon icon={icon} />
          </label>
        )}
        <input
          required={required}
          className={classNames(
            "w-full h-full rounded-md hover:bg-gray-100 px-4 placeholder-opacity-50 bg-transparent border border-gray-300 outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent placeholder-gray-700",
            { "pl-7": icon, "border-red-600": info }
          )}
          placeholder={placeholder}
          type={type}
          onChange={onChange}
          value={value}
          name={name}
        />
      </div>
      <span className="mt-2 text-sm text-red-600">{info}</span>
    </div>
  );
};

export default InputText;
