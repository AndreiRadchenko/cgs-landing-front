export interface IMenuProps {
  menu: string[];
  value?: string;
  setValue?: (value: string) => void;
  setIsDropped?: (value: boolean) => void;
}