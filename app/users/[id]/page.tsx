import { getUserDetails } from "@/services/user";
import { Box, Divider, Typography } from "@mui/material";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function generateMetadata({ params }: { params: any }) {
  const id = (await params).id;
  const user = await getUserDetails(id);
  return {
    title: user.name,
    description: user.email,
  };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function UserDetails({ params }: { params: any }) {
  const id = (await params).id;
  const user = await getUserDetails(id);
  console.log(id, user);
  return (
    <Box sx={{ margin: "20px" }}>
      <div>
        <Typography variant="h5">Personal Info</Typography>
        <div>Name: {user?.name}</div>
        <div>Email: {user?.email}</div>
        <div>Phone: {user?.phone}</div>
      </div>
      <Divider sx={{ marginBlock: "10px" }} />
      <div>
        <Typography variant="h5">Company</Typography>
        <div>Name: {user?.company?.name}</div>
        <div>Catch Phrase : {user?.company?.catchPhrase}</div>
      </div>
      <Divider sx={{ marginBlock: "10px" }} />
      <div>
        <Typography variant="h5">Address</Typography>
        <div>City: {user?.address?.city}</div>
        <div>Street: {user?.address?.street}</div>
        <div>PIN: {user?.address?.zipcode}</div>
      </div>
    </Box>
  );
}

export default UserDetails;
