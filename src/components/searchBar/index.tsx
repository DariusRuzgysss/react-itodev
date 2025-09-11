import { useEffect, useState } from 'react';
import TextField, { type TextFieldProps } from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import type { SearchBarProps } from './types';

const SearchBar = ({
  placeholder = 'Search...',
  onSearch,
  debounceTime = 1000,
  ...textFieldProps
}: SearchBarProps & TextFieldProps) => {
  const [value, setValue] = useState<string>('');

  const handleSearch = () => {
    onSearch(value.trim());
  };

  const handleClear = () => {
    setValue('');
    onSearch('');
  };

  useEffect(() => {
    const handler = setTimeout(() => {
      onSearch(value.trim());
    }, debounceTime);

    return () => {
      clearTimeout(handler);
    };
  }, [value, debounceTime, onSearch]);

  return (
    <TextField
      fullWidth
      variant="outlined"
      placeholder={placeholder}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          handleSearch();
        }
      }}
      slotProps={{
        input: {
          endAdornment: (
            <InputAdornment position="end">
              {value && (
                <IconButton onClick={handleClear} edge="end">
                  <ClearIcon />
                </IconButton>
              )}
              <IconButton edge="end">
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        },
      }}
      {...textFieldProps}
    />
  );
};

export default SearchBar;
