type FormInputProps = {
  name: string;
  label: string;
  value: string | number | readonly string[] | undefined;
  type: string;
  handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const FormInput = ({ name, label, value, type, handleInput }: FormInputProps) => {
  return (
    <>
      <label htmlFor={name} className="label">
        {label}
      </label>

      <input
        name={name}
        type={type}
        className="form-input"
        value={value}
        onChange={(e) => handleInput(e)}
      />
    </>
  );
};
