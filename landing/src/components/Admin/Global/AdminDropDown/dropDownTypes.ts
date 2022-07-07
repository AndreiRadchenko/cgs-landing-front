export interface IMenuProps {
  className?: string;
  menu?: string[];
  value?: string;
  setValue?: (value: string) => void;
  setIsDropped?: React.Dispatch<React.SetStateAction<boolean>>;
  text?: string;
  isDropped?: boolean;
}
