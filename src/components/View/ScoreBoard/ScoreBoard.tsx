import { Box, Container, Paper, styled, Tab, Tabs, Typography } from '@mui/material';
import ResultTable from '../../ResultTable/ResultTable.tsx';
import { SyntheticEvent, useEffect, useState } from 'react';
import { theme } from '../../../lib/theme.tsx';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import LoadingMockup from '../../LoadingMockup/LoadingMockup.tsx';
import { IPlayerProps, TabPanelProps } from '../../../lib/types.ts';

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
        <Container sx={{ m: 2 }}>
          <Paper
            sx={{
              p: 5,
              minHeight: '10rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 4
            }}
          >
            <Typography color={theme.palette.error.main}>
              Nie można załadować wyników. Spróbuj ponownie później...
            </Typography>
            <ErrorOutlineIcon sx={{ color: theme.palette.error.main, fontSize: 100 }} />
          </Paper>
        </Container>
      )}
    </>
  );
};

export default ScoreBoard;
