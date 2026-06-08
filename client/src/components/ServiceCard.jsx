import { Card, CardContent, Stack, Typography } from '@mui/material';

function ServiceCard({ title, description, icon }) {
  return (
    <Card
      elevation={0}
      sx={{
        height: '100%',
        borderRadius: 3,
        border: '1px solid rgba(35, 47, 62, 0.14)',
        transition: 'transform 150ms ease, box-shadow 150ms ease',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: '0 10px 30px rgba(35,47,62,0.14)',
        },
      }}
    >
      <CardContent>
        <Stack spacing={1.5}>
          <Typography color="primary.main">{icon}</Typography>
          <Typography variant="h6">{title}</Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
}

export default ServiceCard;
