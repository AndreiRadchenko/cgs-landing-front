export interface IMenuProps {
  menu?: string[];
  value?: string;
  setValue?: (value: string) => void;
  setIsDropped?: React.Dispatch<React.SetStateAction<boolean>>;
  text?: string;
  isDropped?: boolean;
  className?: string;
}
