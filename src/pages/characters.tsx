import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Routes } from '@/utils/constants';

import { useState } from 'react';
import { EmptyScreen, SearchBar } from '../components';
import { useCharacters } from '@/hooks/api/useCharacters';

// characters dont return id of each record so i cant pass id to each character details instead of that i just pass an index but its not right
// just want to show that it works but not correctly
const Characters = () => {
  const navigate = useNavigate();

  const { data: characters } = useCharacters();

  const [filteredData, setFilteredData] = useState(characters);

  const onSearch = (value: string) => {
    if (!value) {
      setFilteredData(characters);
    } else {
      const lower = value.toLowerCase();
      setFilteredData(
        characters.filter((item) => item.name.toLowerCase().includes(lower))
      );
    }
  };

  if (!characters.length) {
    return <EmptyScreen />;
  }

  return (
    <Box p={4}>
      <SearchBar onSearch={onSearch} />
      <TableContainer
        aria-label="Character table"
        component={Paper}
        style={{ marginTop: 20 }}
      >
        <Table size="small" aria-label="characters table">
          <TableHead>
            <TableRow>
              <TableCell
                aria-label="Character row of number"
                align="left"
                sx={{ fontWeight: 600 }}
              >
                Number
              </TableCell>
              <TableCell
                aria-label="Character row of name"
                align="left"
                sx={{ fontWeight: 600 }}
              >
                Name
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData.map((row, index) => {
              const rowNumber = index + 1;
              return (
                <TableRow
                  key={index}
                  onClick={() => navigate(Routes.CharacterDetails(index + 1))}
                  sx={{
                    cursor: 'pointer',
                    '&:hover': {
                      bgcolor: 'primary.light',
                      transition: 'all 0.3s ease',
                    },
                  }}
                >
                  <TableCell
                    aria-label={`Character number ${rowNumber}`}
                    component="th"
                    scope="row"
                  >
                    {rowNumber}
                  </TableCell>
                  <TableCell
                    aria-label={`Character name is ${row.name}`}
                    align="left"
                  >
                    {row.name}
                  </TableCell>
                </TableRow>
              );
            })}
            <TableRow>
              {!filteredData.length ? (
                <TableCell colSpan={12}>
                  <EmptyScreen />
                </TableCell>
              ) : (
                <TableCell colSpan={12} sx={{ p: 0 }} />
              )}
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Characters;
