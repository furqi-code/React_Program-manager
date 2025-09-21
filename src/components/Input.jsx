export function Input({ id, type, ref, placeholder, defaultValue, className }) {
  return (
    <input
      className={className}
      placeholder={placeholder}
      defaultValue={defaultValue}
      id={id}
      type={type}
      ref={ref}
    />
  );
}
