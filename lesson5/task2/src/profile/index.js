import { fetchUser } from './gateway';
import printProfile from './printProfile';

fetchUser('facebook').then(({ name, location }) =>
  printProfile({
    name,
    location,
  }),
);
