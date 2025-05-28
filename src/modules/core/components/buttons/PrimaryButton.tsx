import { ReactNode } from "react";

interface PrimaryButtonProps {
  children: ReactNode;
  onClick: () => void;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ children, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="btn btn-primary max-w-md"
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
