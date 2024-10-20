// eslint-disable-next-line react/prop-types
export default function Input({ type, name, value, placeholder, id, setter }) {
  return (
    <>
      <label htmlFor={name}>{name}</label>
      <input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        id={id}
        onChange={(e) => setter(e.target.value)}
      />
    </>
  );
}
