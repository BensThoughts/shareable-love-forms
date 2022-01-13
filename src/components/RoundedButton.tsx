export default function RoundedButton({className, children, ...rest}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={`block border-2 border-secondary border-solid rounded-md px-2 py-1 ${className}`} {...rest}>
      {children}
    </button>
  );
}
