import { useMemo, useState } from 'react';
import {
  Alert,
  AppBar,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Grid,
  Stack,
  TextField,
  Toolbar,
  Typography,
} from '@mui/material';
import ConstructionIcon from '@mui/icons-material/Construction';
import ParkIcon from '@mui/icons-material/Park';
import LayersIcon from '@mui/icons-material/Layers';
import BuildIcon from '@mui/icons-material/Build';
import ServiceCard from './components/ServiceCard';
import blueprintsImg from './assets/blueprints-optimized.webp';
import graniteImg from './assets/granite-optimized.webp';
import excavatorImg from './assets/excavator-optimized.webp';
import treeRemovalImg from './assets/tree-removal-optimized.webp';

function App() {
  const [submitted, setSubmitted] = useState(() => {
    const params = new URLSearchParams(window.location.search);
    return params.get('submitted') === 'true';
  });

  const handleQuoteSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData).toString(),
    });

    setSubmitted(true);

    const url = new URL(window.location.href);
    url.searchParams.set('submitted', 'true');
    window.history.replaceState({}, '', url.toString());

    form.reset();
  };

  const services = useMemo(
    () => [
      {
        title: 'Tree Removal',
        description:
          'Safe removal, cleanup, and hauling for residential and light commercial sites.',
        icon: <ParkIcon fontSize="large" />,
        image: treeRemovalImg,
      },
      {
        title: 'Floor Renovation',
        description: 'Demolition, surface prep, and install-ready flooring renovation support.',
        icon: <LayersIcon fontSize="large" />,
        image: graniteImg,
      },
      {
        title: 'Excavation',
        description: 'Precision digging, grading, and site prep for dependable project starts.',
        icon: <ConstructionIcon fontSize="large" />,
        image: excavatorImg,
      },
      {
        title: 'Other',
        description:
          'Have a different scope? Tell us what you need and we can build a custom plan.',
        icon: <BuildIcon fontSize="large" />,
        image: blueprintsImg,
      },
    ],
    [],
  );

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
      <AppBar position="static" color="transparent" elevation={0}>
        <Container maxWidth="lg">
          <Toolbar
            sx={{
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: { xs: 'wrap', md: 'nowrap' },
              rowGap: { xs: 1.25, md: 0 },
              columnGap: 2,
              px: 0,
              py: { xs: 2.5, sm: 3 },
            }}
          >
            <Stack spacing={0.1} justifyContent="center" alignSelf="center">
              <Typography
                fontWeight={800}
                sx={{
                  lineHeight: 1.08,
                  letterSpacing: 0.3,
                  fontSize: { xs: '1.25rem', sm: '1.6rem' },
                }}
              >
                Mammoth
              </Typography>
              <Typography
                fontWeight={700}
                sx={{
                  color: 'text.secondary',
                  lineHeight: 1.2,
                  letterSpacing: 0.8,
                  textTransform: 'uppercase',
                  fontSize: { xs: '0.78rem', sm: '0.92rem' },
                }}
              >
                Construction LLC
              </Typography>
            </Stack>
            <Button
              variant="contained"
              color="secondary"
              component="a"
              href="#quote-form"
              sx={{
                width: { xs: '100%', sm: 'auto' },
                alignSelf: 'center',
                mt: { xs: 2.25, md: 0 },
              }}
            >
              Request Estimate
            </Button>
          </Toolbar>
        </Container>
      </AppBar>

      <Container maxWidth="lg" sx={{ pt: { xs: 1.5, md: 6 }, pb: { xs: 6, md: 10 } }}>
        <Card
          elevation={0}
          sx={{
            borderRadius: 2,
            p: { xs: 3, md: 5 },
            background: 'linear-gradient(130deg, rgba(194,133,77,0.12), rgba(35,47,62,0.12))',
            border: '1px solid rgba(35, 47, 62, 0.12)',
          }}
        >
          <CardContent sx={{ p: 0 }}>
            <Stack spacing={2.5}>
              <Chip
                label="Greenwood, SC"
                color="primary"
                sx={{
                  width: 'fit-content',
                  fontWeight: 600,
                  bgcolor: '#F27A1A',
                  color: '#FFFFFF',
                  border: '1px solid rgba(189, 83, 0, 0.35)',
                  boxShadow: '0 2px 8px rgba(242, 122, 26, 0.28)',
                  '& .MuiChip-label': {
                    px: 1.4,
                  },
                }}
              />
              <Typography
                variant="h2"
                sx={{ maxWidth: 760, fontSize: { xs: '2rem', md: '2.6rem' } }}
              >
                From tree clearing to gravel moving, grading, and demolition.
              </Typography>
              <Typography variant="body1" sx={{ maxWidth: 760 }}>
                We prepare sites the right way for residential and light commercial projects across
                Greenwood, SC and surrounding areas.
              </Typography>
            </Stack>
          </CardContent>
        </Card>

        <Box
          sx={{
            mt: 2,
            display: 'grid',
            gap: 3,
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, minmax(0, 1fr))',
              lg: 'repeat(2, minmax(0, 1fr))',
            },
          }}
        >
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              icon={service.icon}
              backgroundImage={service.image}
            />
          ))}
        </Box>

        <Card
          id="quote-form"
          elevation={0}
          sx={{
            mt: 4,
            borderRadius: 2,
            p: { xs: 2, md: 3 },
            bgcolor: '#FFFFFF',
            border: '1px solid rgba(189, 83, 0, 0.24)',
            boxShadow: '0 12px 30px rgba(31, 40, 49, 0.12)',
            position: 'relative',
            overflow: 'hidden',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: 5,
              background: 'linear-gradient(90deg, #F27A1A 0%, #E99253 100%)',
            },
          }}
        >
          <CardContent>
            <Stack spacing={2}>
              <Typography variant="h5" fontWeight={700}>
                Request A Quote
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Fill out this form and our team will follow up by email.
              </Typography>

              {submitted ? (
                <Alert severity="success">Thank you. Your quote request has been submitted.</Alert>
              ) : null}

              <Box
                component="form"
                name="quote-request"
                method="POST"
                action="/"
                onSubmit={handleQuoteSubmit}
                data-netlify="true"
                netlify-honeypot="bot-field"
              >
                <input type="hidden" name="form-name" value="quote-request" />
                <input type="hidden" name="bot-field" />

                <Box
                  sx={{
                    display: 'grid',
                    gap: 2,
                    gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, minmax(0, 1fr))' },
                  }}
                >
                  <TextField label="Full Name" name="name" required fullWidth />
                  <TextField label="Email" name="email" type="email" required fullWidth />
                  <TextField label="Phone" name="phone" fullWidth />
                  <TextField label="Project Type" name="projectType" fullWidth />
                  <TextField
                    label="Project Address"
                    name="projectAddress"
                    fullWidth
                    sx={{ gridColumn: '1 / -1' }}
                  />
                  <TextField
                    label="Project Details"
                    name="details"
                    required
                    fullWidth
                    multiline
                    minRows={4}
                    sx={{ gridColumn: '1 / -1' }}
                  />
                  <Button
                    type="submit"
                    variant="contained"
                    color="secondary"
                    fullWidth
                    sx={{ gridColumn: '1 / -1' }}
                  >
                    Send Quote Request
                  </Button>
                </Box>
              </Box>
            </Stack>
          </CardContent>
        </Card>

        <Card
          elevation={0}
          sx={{
            mt: 3,
            borderRadius: 2,
            p: { xs: 2, md: 3 },
            bgcolor: '#FFFFFF',
            border: '1px solid rgba(189, 83, 0, 0.2)',
            boxShadow: '0 10px 24px rgba(31, 40, 49, 0.1)',
          }}
        >
          <CardContent>
            <Stack spacing={2.5} alignItems="center">
              <Typography variant="h5" fontWeight={700} textAlign="center">
                Contact Information
              </Typography>
              <Grid container spacing={2} sx={{ maxWidth: 860 }}>
                <Grid item xs={12} sm={6}>
                  <Box
                    sx={{
                      p: 2,
                      borderRadius: 2,
                      textAlign: { xs: 'left', sm: 'center' },
                      height: '100%',
                    }}
                  >
                    <Typography variant="body2" color="text.secondary">
                      Phone
                    </Typography>
                    <Typography variant="body1" fontWeight={600}>
                      (580) 821-6235
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Box
                    sx={{
                      p: 2,
                      borderRadius: 2,
                      textAlign: { xs: 'left', sm: 'center' },
                      height: '100%',
                    }}
                  >
                    <Typography variant="body2" color="text.secondary">
                      Email
                    </Typography>
                    <Typography
                      variant="body1"
                      fontWeight={600}
                      sx={{ overflowWrap: 'anywhere', wordBreak: 'break-word' }}
                    >
                      camalanhinkle@gmail.com
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Box
                    sx={{
                      p: 2,
                      borderRadius: 2,
                      textAlign: { xs: 'left', sm: 'center' },
                      height: '100%',
                    }}
                  >
                    <Typography variant="body2" color="text.secondary">
                      Service Area
                    </Typography>
                    <Typography variant="body1" fontWeight={600}>
                      Greenwood, SC
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Box
                    sx={{
                      p: 2,
                      borderRadius: 2,
                      textAlign: { xs: 'left', sm: 'center' },
                      height: '100%',
                    }}
                  >
                    <Typography variant="body2" color="text.secondary">
                      Business Hours
                    </Typography>
                    <Typography variant="body1" fontWeight={600}>
                      Mon-Fri, 8:00 AM - 5:00 PM
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Stack>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}

export default App;
