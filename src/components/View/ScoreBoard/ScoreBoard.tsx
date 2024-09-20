import { Box, Container, Tab, Tabs } from '@mui/material';
import { generatePlayers } from '../../../lib/data.ts';
import ResultTable from '../../ResultTable/ResultTable.tsx';
import { ReactNode, SyntheticEvent, useState } from 'react';

interface TabPanelProps {
  children?: ReactNode;
  index: number;
  value: number;
}

const ScoreBoard = () => {
  const players = generatePlayers().sort((a, b) => b.score - a.score);
  const [value, setValue] = useState(0);

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
    <Container sx={{ my: 5 }} maxWidth='md'>
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label='basic tabs example'>
            <Tab label='Open' />
            <Tab label='Łatwy' />
            <Tab label='Normalny' />
            <Tab label='Trudny' />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <ResultTable playersList={players} />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <ResultTable playersList={players.filter((player) => player.level === 'Easy')} />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <ResultTable playersList={players.filter((player) => player.level === 'Normal')} />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={3}>
          <ResultTable playersList={players.filter((player) => player.level === 'Hard')} />
        </CustomTabPanel>
      </Box>
    </Container>
  );
};

export default ScoreBoard;
