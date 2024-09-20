import { Box, Container, styled, Tab, Tabs } from '@mui/material';
import ResultTable from '../../ResultTable/ResultTable.tsx';
import { SyntheticEvent, useEffect, useState } from 'react';
import LoadingMockup from '../../LoadingMockup/LoadingMockup.tsx';
import { IPlayerProps, TabPanelProps } from '../../../lib/types.ts';
import Error from '../../Error/Error.tsx';

const StyledTab = styled(Tab)(({ theme }) => ({
  '&.Mui-selected': { color: theme.palette.primary.contrastText }
}));

const ScoreBoard = () => {
  const [value, setValue] = useState(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);
  const [data, setData] = useState<IPlayerProps[]>([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(`${import.meta.env.VITE_API_URL}/api/score`)
      .then((response) => {
        if (response && response.status !== 200) {
          setIsError(true);
        }

        return response.json();
      })
      .then((data) => {
        setData(data);
        setIsLoading(false);
      });
  }, []);

  const players = data.sort((a, b) => b.score - a.score);

  const sortedPlayers = players.sort((a, b) => {
    if (a.score < b.score) {
      return 1;
    } else if (a.score > b.score) {
      return -1;
    }

    return a.time - b.time;
  });

  const handleChange = (_e: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
      <div role='tabpanel' hidden={value !== index} {...other}>
        {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
      </div>
    );
  }

  return (
    <>
      {!isError && data ? (
        <Container sx={{ my: 5 }} maxWidth='md'>
          <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs value={value} onChange={handleChange} aria-label='basic tabs example'>
                <StyledTab label='Open' />
                <StyledTab label='Łatwy' />
                <StyledTab label='Normalny' />
                <StyledTab label='Trudny' />
              </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
              {isLoading ? (
                <LoadingMockup isOpen />
              ) : (
                <ResultTable playersList={sortedPlayers} isOpen />
              )}
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
              {isLoading ? (
                <LoadingMockup />
              ) : (
                <ResultTable
                  playersList={sortedPlayers.filter((player) => player.level === 'Easy')}
                />
              )}
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
              {isLoading ? (
                <LoadingMockup />
              ) : (
                <ResultTable
                  playersList={sortedPlayers.filter((player) => player.level === 'Normal')}
                />
              )}
            </CustomTabPanel>
            <CustomTabPanel value={value} index={3}>
              {isLoading ? (
                <LoadingMockup />
              ) : (
                <ResultTable
                  playersList={sortedPlayers.filter((player) => player.level === 'Hard')}
                />
              )}
            </CustomTabPanel>
          </Box>
        </Container>
      ) : (
        <Error>Nie można załadować wyników. Spróbuj ponownie później...</Error>
      )}
    </>
  );
};

export default ScoreBoard;
