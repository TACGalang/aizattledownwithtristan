import "./style.css";
import { Link } from "react-router-dom";
import { ReactNode } from "react";

enum ButtonStyles {
  btnPrimary,
  btnOutline,
}

enum ButtonSizes {
  btnMedium,
  btnLarge,
}

interface ButtonProps {
  type?: "submit" | "reset" | "button" | undefined;
  onClick: () => {};
  buttonStyle?: ButtonStyles;
  buttonSize?: ButtonSizes;
}

const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
}: ButtonProps & { children: ReactNode }) => {
  const buttonStyles =
    buttonStyle !== undefined ? buttonStyle : ButtonStyles.btnPrimary;
  const buttonSizeInput =
    buttonSize !== undefined ? buttonSize : ButtonSizes.btnMedium;

  return (
    <Link to={onClick} className="btn-mobile">
      <button
        className={`btn ${buttonStyles} ${buttonSizeInput}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
};

export default Button;
export { ButtonSizes, ButtonStyles };
