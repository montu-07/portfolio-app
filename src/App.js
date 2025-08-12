// App.jsx
import React, { useRef, useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Box,
  Stack,
  TextField,
  Paper,
  Chip,
  Snackbar,
  Alert
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { motion } from "framer-motion";
import {
  SiReact,
  SiMui,
  SiNodedotjs,
  SiMysql,
  SiRedux,
  SiTailwindcss,
  SiJavascript,
  SiHtml5
} from "react-icons/si";
import { Email, Phone, LocationOn, GitHub, LinkedIn } from "@mui/icons-material";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import emailjs from "emailjs-com";

/*
  IMPORTANT: EmailJS setup
  - Create free account at https://www.emailjs.com/
  - Add an email service & template.
  - Replace the placeholders below with your EmailJS values.
*/
const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY";

/* Theme */
const theme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#2196f3" },
    secondary: { main: "#00e5ff" },
    background: { default: "#0a1929", paper: "#0f2130" }
  },
  typography: { fontFamily: "Poppins, sans-serif" }
});

/* Data */
const skillsData = [
  { name: "React.js", icon: <SiReact size={34} color="#61DBFB" /> },
  { name: "Material UI", icon: <SiMui size={34} color="#007FFF" /> },
  { name: "Node.js", icon: <SiNodedotjs size={34} color="#68A063" /> },
  { name: "MySQL", icon: <SiMysql size={34} color="#00758F" /> },
  { name: "Redux", icon: <SiRedux size={34} color="#764ABC" /> },
  { name: "Tailwind", icon: <SiTailwindcss size={34} color="#38B2AC" /> },
  { name: "JavaScript", icon: <SiJavascript size={34} color="#F7DF1E" /> },
  { name: "HTML5", icon: <SiHtml5 size={34} color="#E34F26" /> }
];

const projects = [
  {
    title: "Clothing E-Commerce",
    desc: "React + Redux frontend, Node.js backend, MySQL DB, CSV bulk upload and admin panel.",
    img: "https://images.unsplash.com/photo-1521334884684-d80222895322?auto=format&fit=crop&w=1200&q=60",
    link: "#"
  },
  {
    title: "Course Creation Platform",
    desc: "Multi-mode course editor with responsive UI and CSV templates for content upload.",
    img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=60",
    link: "#"
  },
  {
    title: "Elastic Advanced Search",
    desc: "Search suggestion engine with realtime UX improvements and minimal cursor disruption.",
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=60",
    link: "#"
  }
];

export default function App() {
  const contactRef = useRef();
  const [snack, setSnack] = useState({ open: false, severity: "success", message: "" });

  const handleCloseSnack = () => setSnack((s) => ({ ...s, open: false }));

  // Contact form state (simple)
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const sendEmail = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setSnack({ open: true, severity: "warning", message: "Please complete all fields." });
      return;
    }

    // EmailJS - remember to set your IDs
    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      setSnack({ open: true, severity: "info", message: "EmailJS not configured — replace placeholders in code." });
      return;
    }

    try {
      const res = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        { from_name: form.name, from_email: form.email, message: form.message },
        EMAILJS_PUBLIC_KEY
      );
      setSnack({ open: true, severity: "success", message: "Message sent — thank you!" });
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      setSnack({ open: true, severity: "error", message: "Failed to send — try later." });
    }
  };

  /* Motion variants for sections (stagger) */
  const containerV = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };
  const itemV = { hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ minHeight: "100vh", bgcolor: "background.default", color: "white" }}>
        <AppBar position="sticky" color="transparent" elevation={0}>
          <Toolbar sx={{ justifyContent: "space-between" }}>
            <Typography variant="h6" fontWeight="700">Montu Prajapati</Typography>
            <Stack direction="row" spacing={2}>
              <Button color="primary" href="#about">About</Button>
              <Button color="primary" href="#skills">Skills</Button>
              <Button color="primary" href="#projects">Projects</Button>
              <Button color="primary" href="#contact">Contact</Button>
            </Stack>
          </Toolbar>
        </AppBar>

        {/* HERO */}
        <Box id="about" sx={{ py: 10, textAlign: "center", background: "linear-gradient(180deg,#00122b,#001e3c)" }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Typography
              variant="h3"
              fontWeight={800}
              sx={{
                background: "linear-gradient(90deg,#00e5ff,#0099cc)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textShadow: "0 0 18px rgba(0,229,255,0.12)"
              }}
            >
              Hi, I'm Montu Prajapati
            </Typography>

            <Typography variant="h6" sx={{ color: "#dbeefd", mt: 2, mb: 2 }}>
              Full-Stack Developer • React & Node.js
            </Typography>

            <Typography variant="body1" sx={{ color: "#bdefff", maxWidth: 720, mx: "auto", lineHeight: 1.6 }}>
              I build fast, modern and user-friendly web apps with a passion for clean code and great design.
            </Typography>
          </motion.div>
        </Box>

        {/* SKILLS */}
        <Container id="skills" sx={{ py: 8 }}>
          <Typography variant="h4" fontWeight={700} align="center" sx={{ mb: 4 }}>Skills</Typography>

          <motion.div variants={containerV} initial="hidden" animate="show">
            <Grid container spacing={3} justifyContent="center">
              {skillsData.map((s, i) => (
                <Grid item xs={6} sm={4} md={3} key={i}>
                  <motion.div variants={itemV} whileHover={{ scale: 1.04 }} transition={{ type: "spring", stiffness: 200 }}>
                    <Paper
                      elevation={3}
                      sx={{
                        p: 3,
                        borderRadius: 3,
                        textAlign: "center",
                        background: "linear-gradient(135deg, rgba(255,255,255,0.03), rgba(255,255,255,0.02))",
                        border: "1px solid rgba(0,229,255,0.15)",
                        "&:hover": {
                          transform: "translateY(-5px)",
                          boxShadow: "0 8px 25px rgba(0,229,255,0.15)"
                        },
                        backdropFilter: "blur(6px)"
                      }}
                    >
                      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", mb: 1 }}>{s.icon}</Box>
                      <Typography variant="subtitle1">{s.name}</Typography>
                    </Paper>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </Container>

        {/* PROJECTS */}
        <Container id="projects" sx={{ py: 8 }}>
          <Typography variant="h4" fontWeight={700} sx={{ mb: 4 }}>Projects</Typography>
          <Grid container spacing={4}>
            {projects.map((p, idx) => (
              <Grid item xs={12} sm={6} md={4} key={idx}>
                <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.25 }}>
                  <Card sx={{ height: "100%", display: "flex", flexDirection: "column", background: "background.paper" ,border: "1px solid rgba(0,229,255,0.15)",
                        "&:hover": {
                          transform: "translateY(-5px)",
                          boxShadow: "0 8px 25px rgba(0,229,255,0.15)"
                        },}}>
                    <CardMedia component="img" height="160" image={p.img} alt={p.title} />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography variant="h6" gutterBottom>{p.title}</Typography>
                      <Typography variant="body2" color="text.secondary">{p.desc}</Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small" href={p.link} target="_blank" endIcon={<GitHub />}>View</Button>
                    </CardActions>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>

        {/* CONTACT */}
        <Container id="contact" sx={{ py: 10 }} ref={contactRef}>
          <Typography variant="h4" fontWeight={700} align="center" sx={{ mb: 5, color: "#00e5ff", textShadow: "0 0 6px rgba(0,229,255,0.12)" }}>
            Get In Touch
          </Typography>

          <Grid container spacing={5} alignItems="stretch">
            {/* contact info (left) */}
            <Grid item xs={12}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Stack
                  direction={{ xs: "column", md: "row" }}
                  spacing={3}
                  justifyContent="center"
                  alignItems="center"
                >
                  {[
                    { icon: <MdEmail size={26} color="#00e5ff" />, title: "Email", detail: "montuprajapati487@gmail.com" },
                    { icon: <MdPhone size={26} color="#00e5ff" />, title: "Phone", detail: "+91 78770 24644" },
                    { icon: <MdLocationOn size={26} color="#00e5ff" />, title: "Location", detail: "Gujrat, India" }
                  ].map((it, i) => (
                    <Paper
                      key={i}
                      elevation={3}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 2,
                        p: 2,
                        borderRadius: 3,
                        background: "linear-gradient(135deg, rgba(0,229,255,0.06), rgba(0,229,255,0.02))",
                        border: "1px solid rgba(0,229,255,0.15)",
                        "&:hover": {
                          transform: "translateY(-5px)",
                          boxShadow: "0 8px 25px rgba(0,229,255,0.15)"
                        },
                        transition: "all 0.3s ease"
                      }}
                    >
                      <Box
                        sx={{
                          width: 50,
                          height: 50,
                          borderRadius: "50%",
                          display: "grid",
                          placeItems: "center",
                          background: "rgba(0,229,255,0.12)"
                        }}
                      >
                        {it.icon}
                      </Box>
                      <Box>
                        <Typography fontWeight={700} color="#fff">
                          {it.title}
                        </Typography>
                        <Typography color="#bcd7df" variant="body2">
                          {it.detail}
                        </Typography>
                      </Box>
                    </Paper>
                  ))}
                </Stack>
              </motion.div>
            </Grid>


            {/* form (right) */}
            <Grid item xs={12} md={8}>
              <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                <Paper sx={{ p: 3.5, borderRadius: 3, position: "relative", overflow: "hidden", background: "linear-gradient(135deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01))", border: "1px solid rgba(0,229,255,0.06)" }}>
                  {/* subtle animated border (CSS in JS) */}
                  <Box sx={{
                    position: "absolute", inset: 0, pointerEvents: "none",
                    background: "linear-gradient(90deg, transparent, rgba(0,229,255,0.02), transparent)",
                    mixBlendMode: "screen", opacity: 0.6
                  }} />

                  <form onSubmit={sendEmail}>
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          name="name"
                          label="Your Name"
                          value={form.name}
                          onChange={onChange}
                          fullWidth
                          variant="outlined"
                          InputLabelProps={{ style: { color: "#bcd7df" } }}
                          sx={{ "& .MuiOutlinedInput-root": { color: "#fff", "& fieldset": { borderColor: "rgba(0,229,255,0.06)" } } }}
                        />
                      </Grid>

                      <Grid item xs={12} sm={6}>
                        <TextField
                          name="email"
                          label="Email Address"
                          value={form.email}
                          onChange={onChange}
                          fullWidth
                          variant="outlined"
                          InputLabelProps={{ style: { color: "#bcd7df" } }}
                          sx={{ "& .MuiOutlinedInput-root": { color: "#fff", "& fieldset": { borderColor: "rgba(0,229,255,0.06)" } } }}
                        />
                      </Grid>

                      <Grid item xs={12}>
                        <TextField
                          name="message"
                          label="Your Message"
                          value={form.message}
                          onChange={onChange}
                          fullWidth
                          multiline
                          maxRows={10} // optional: set a max height
                          variant="outlined"
                          InputLabelProps={{ style: { color: "#bcd7df" } }}
                          sx={{
                            "& .MuiOutlinedInput-root": {
                              color: "#fff",
                              "& fieldset": {
                                borderColor: "rgba(0,229,255,0.06)"
                              }
                            }
                          }}
                        />
                      </Grid>

                      <Grid item xs={12}>
                        <Button
                          type="submit"
                          size="large"
                          variant="contained"
                          sx={{
                            background: "linear-gradient(90deg,#00e5ff,#0099cc)",
                            color: "#001e3c",
                            fontWeight: 700,
                            "&:hover": { background: "linear-gradient(90deg,#0099cc,#00e5ff)" }
                          }}
                        >
                          Send Message
                        </Button>
                      </Grid>
                    </Grid>
                  </form>
                </Paper>
              </motion.div>
            </Grid>
          </Grid>
        </Container>

        {/* FOOTER */}
        <Box component="footer" textAlign="center" py={4} sx={{ bgcolor: "#001e3c" }}>
          <Container maxWidth="md">
            <Stack direction="row" justifyContent="center" spacing={2} mb={1}>
              <Button href="https://github.com/montu-07" startIcon={<GitHub />} color="inherit">GitHub</Button>
              <Button href="https://www.linkedin.com/in/montu-prajapati" startIcon={<LinkedIn />} color="inherit">LinkedIn</Button>
            </Stack>
            <Typography variant="body2" color="text.secondary">© {new Date().getFullYear()} Montu Prajapati • Built with ❤️ using React & MUI</Typography>
          </Container>
        </Box>

        <Snackbar open={snack.open} autoHideDuration={4000} onClose={handleCloseSnack} anchorOrigin={{ vertical: "bottom", horizontal: "center" }}>
          <Alert onClose={handleCloseSnack} severity={snack.severity} sx={{ width: "100%" }}>{snack.message}</Alert>
        </Snackbar>
      </Box>
    </ThemeProvider>
  );
}
