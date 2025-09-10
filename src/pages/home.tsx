import { ListItems } from '../utils/constants';
import { Card } from '../components';
import Grid from '@mui/material/Grid';

const Home = () => {
  return (
    <Grid container spacing={3} p={3}>
      {ListItems.map((item) => (
        <Grid key={item.path} size={{ xs: 12, sm: 6, md: 6, lg: 6 }}>
          <Card title={item.title} path={item.path} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Home;
