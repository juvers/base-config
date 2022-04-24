import { Grid, Stack } from '@mui/material';
import { Profile as UserProfile, } from '@@types/user';
import ProfileAbout from './ProfileAbout';


type Props = {
  myProfile: UserProfile;
};

export default function Profile({ myProfile }: Props) {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={4}>
        <Stack spacing={3}>
        
          <ProfileAbout profile={myProfile} />
       
        </Stack>
      </Grid>

      <Grid item xs={12} md={8}>
        <Stack spacing={3}>
      
        </Stack>
      </Grid>
    </Grid>
  );
}
