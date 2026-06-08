import { Box, Card, CardContent, Stack, Typography } from '@mui/material';

function ServiceCard({ title, description, icon, backgroundImage }) {
  return (
    <Card
      elevation={0}
      sx={{
        width: '100%',
        height: '100%',
        minHeight: { xs: 240, sm: 260 },
        borderRadius: 2,
        border: '1px solid rgba(35, 47, 62, 0.18)',
        overflow: 'hidden',
        position: 'relative',
        backgroundColor: '#FFFFFF',
        transition: 'transform 150ms ease, box-shadow 150ms ease',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: '0 10px 30px rgba(35,47,62,0.14)',
        },
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          zIndex: 0,
        }}
      />

      <CardContent
        sx={{
          height: '100%',
          display: 'flex',
          p: 0,
          '&:last-child': { pb: 0 },
          position: 'relative',
          zIndex: 1,
        }}
      >
        <Box sx={{ height: '100%', width: '100%', display: 'flex', alignItems: 'flex-end' }}>
          <Box
            sx={{
              width: '100%',
              bgcolor: '#FFFFFF',
              px: 2,
              pt: 2,
              pb: 2,
              boxShadow: '0 -1px 0 #FFFFFF',
            }}
          >
            <Stack spacing={1.15}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.1 }}>
                <Typography
                  sx={{
                    color: '#1E2935',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    '& svg': {
                      color: '#F27A1A',
                      fontSize: '1.8rem',
                    },
                  }}
                >
                  {icon}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    color: '#1E2935',
                    fontSize: { xs: '1.15rem', sm: '1.25rem' },
                    lineHeight: 1.25,
                  }}
                >
                  {title}
                </Typography>
              </Box>
              <Typography
                variant="body2"
                sx={{
                  color: '#1E2935',
                  fontSize: { xs: '0.98rem', sm: '1rem' },
                  lineHeight: 1.45,
                  fontWeight: 500,
                }}
              >
                {description}
              </Typography>
            </Stack>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}

export default ServiceCard;
