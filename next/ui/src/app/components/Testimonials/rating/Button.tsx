const Button: React.FC<{ link: string; small?: boolean }> = ({
  link,
  small = false,
}) => {
  return (
    <a
      href={link}
      className={small ? 'rating__button--small' : 'rating__button'}
    >
      Read More
    </a>
  );
};

export default Button;
