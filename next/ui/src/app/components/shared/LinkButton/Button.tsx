const Button: React.FC<{ link: string; className?: string; text: string }> = ({
  link,
  className = 'button',
  text,
}) => {
  return (
    <a href={link} className={className}>
      {text}
    </a>
  );
};

export default Button;
