import { useMemo } from 'react';
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
import EngineeringIcon from '@mui/icons-material/Engineering';
import DomainIcon from '@mui/icons-material/Domain';
import ServiceCard from './components/ServiceCard';

function App() {
  const submitted = useMemo(() => {
    const params = new URLSearchParams(window.location.search);
    return params.get('submitted') === 'true';
  }, []);

  const services = useMemo(
    () => [
      {
        title: 'Commercial Builds',
        description:
          'Ground-up construction and tenant improvements with reliable delivery timelines.',
        icon: <DomainIcon fontSize="large" />,
      },
      {
        title: 'Heavy Civil',
        description: 'Infrastructure-grade concrete, grading, and utility work built to last.',
        icon: <ConstructionIcon fontSize="large" />,
      },
      {
        title: 'Design-Build Teams',
        description: 'Integrated engineering and field teams that reduce rework and control costs.',
        icon: <EngineeringIcon fontSize="large" />,
      },
    ],
    [],
  );

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Stack direction="row" spacing={1.2} alignItems="center">
            <ConstructionIcon sx={{ color: 'primary.main' }} />
            <Typography variant="h6" fontWeight={700}>
              Mammoth Construction LLC
            </Typography>
          </Stack>
          <Button variant="contained" color="secondary" component="a" href="#quote-form">
            Request Estimate
          </Button>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" sx={{ pt: 6, pb: 10 }}>
        <Card
          elevation={0}
          sx={{
            borderRadius: 4,
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
                sx={{ width: 'fit-content', fontWeight: 600 }}
              />
              <Typography variant="h2" sx={{ maxWidth: 760 }}>
                Strong foundations. Predictable delivery. Safer jobsites.
              </Typography>
              <Typography variant="body1" sx={{ maxWidth: 760 }}>
                Mammoth Construction LLC, based in Greenwood, SC, partners with owners and
                developers to build commercial and civil projects with clarity, craftsmanship, and
                schedule discipline.
              </Typography>
            </Stack>
          </CardContent>
        </Card>

        <Grid container spacing={3} sx={{ mt: 2 }}>
          {services.map((service) => (
            <Grid key={service.title} item xs={12} md={4}>
              <ServiceCard
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            </Grid>
          ))}
        </Grid>

        <Card id="quote-form" elevation={0} sx={{ mt: 4, borderRadius: 3, p: { xs: 2, md: 3 } }}>
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
                action="/?submitted=true#quote-form"
                data-netlify="true"
                netlify-honeypot="bot-field"
              >
                <input type="hidden" name="form-name" value="quote-request" />
                <input type="hidden" name="bot-field" />

                <Stack spacing={2}>
                  <TextField label="Full Name" name="name" required fullWidth />
                  <TextField label="Email" name="email" type="email" required fullWidth />
                  <TextField label="Phone" name="phone" fullWidth />
                  <TextField label="Project Address" name="projectAddress" fullWidth />
                  <TextField label="Project Type" name="projectType" fullWidth />
                  <TextField
                    label="Project Details"
                    name="details"
                    required
                    fullWidth
                    multiline
                    minRows={4}
                  />
                  <Button type="submit" variant="contained" color="secondary">
                    Send Quote Request
                  </Button>
                </Stack>
              </Box>
            </Stack>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}

export default App;
