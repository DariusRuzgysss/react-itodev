export type SearchBarProps = {
  placeholder?: string;
  onSearch: (value: string) => void;
  debounceTime?: number;
};
