"use client";
import { Box, Container, Divider, Grid } from "@mui/material";
import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { inter } from "../../../../fonts/fonts";
export default function InformationSystems() {
  const [expanded, setExpanded] = React.useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <Box>
      <Container disableGutters maxWidth={"xl"}>
        <Box container sx={{ mt: { md: 10, xs: 5 } }}>
          <Accordion
            sx={{ boxShadow: "none", border: "none" }}
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              expandIcon={
                expanded === "panel1" ? (
                  <RemoveIcon
                    sx={{
                      color: "#ffffff",
                      borderRadius: "50%",
                      backgroundImage:
                        "linear-gradient(90deg, #7DB1FF -7.37%, #97E6FF 68.51%)",
                      width: { lg: 45, md: 40, xs: 30 },
                      padding: 0.7,
                      height: { lg: 45, md: 40, xs: 30 },
                    }}
                  />
                ) : (
                  <AddIcon
                    sx={{
                      color: "#ffffff",
                      borderRadius: "50%",
                      backgroundImage:
                        "linear-gradient(90deg, #7DB1FF -7.37%, #97E6FF 68.51%)",
                      width: { lg: 45, md: 40, xs: 30 },
                      padding: 0.7,
                      height: { lg: 45, md: 40, xs: 30 },
                    }}
                  />
                )
              }
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography
                sx={{
                  fontFamily: inter.style.fontFamily,
                  fontSize: { lg: "39px", md: "30px", xs: "14px" },
                  color: "#222D55",
                }}
              >
                Sécurité des systèmes d’information
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Grid container>
                <Grid item md={6} xs={12}>
                  <Typography
                    sx={{
                      fontFamily: inter.style.fontFamily,
                      fontSize: {
                        md: "14px",
                        xs: "12px",
                        width: { md: "70%", xs: "100%" },
                      },
                    }}
                  >
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Ratione, ex aspernatur! Quisquam illum, fuga ipsam facere
                    molestias dolores labore assumenda error deleniti nesciunt
                    doloribus natus reprehenderit distinctio voluptatum ipsa
                    cumque odit veniam hic atque iure quas consequatur. Neque
                    voluptate aspernatur voluptas. Voluptatibus similique iste
                    totam rem nesciunt facilis obcaecati beatae!
                  </Typography>
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>
          <Divider
            variant="middle"
            sx={{
              display: { md: "block", xs: "none" },
              bgcolor: "#222D55",
              mt: { md: 6, xs: 2 },
              opacity: "20%",
              borderBottomWidth: "1px",
            }}
          />
        </Box>
        <Box container sx={{ mt: { md: 10, xs: 5 } }}>
          <Accordion
            sx={{ boxShadow: "none", border: "none" }}
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <AccordionSummary
              expandIcon={
                expanded === "panel2" ? (
                  <RemoveIcon
                    sx={{
                      color: "#ffffff",
                      borderRadius: "50%",
                      backgroundImage:
                        "linear-gradient(90deg, #7DB1FF -7.37%, #97E6FF 68.51%)",
                      width: { lg: 45, md: 40, xs: 30 },
                      padding: 0.7,
                      height: { lg: 45, md: 40, xs: 30 },
                    }}
                  />
                ) : (
                  <AddIcon
                    sx={{
                      color: "#ffffff",
                      borderRadius: "50%",
                      backgroundImage:
                        "linear-gradient(90deg, #7DB1FF -7.37%, #97E6FF 68.51%)",
                      width: { lg: 45, md: 40, xs: 30 },
                      padding: 0.7,
                      height: { lg: 45, md: 40, xs: 30 },
                    }}
                  />
                )
              }
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography
                sx={{
                  fontFamily: inter.style.fontFamily,
                  fontSize: { lg: "39px", md: "30px", xs: "14px" },
                  color: "#222D55",
                }}
              >
                Confiance numérique
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Grid container>
                <Grid item md={6} xs={12}>
                  <Typography
                    sx={{
                      fontFamily: inter.style.fontFamily,
                      fontSize: {
                        md: "14px",
                        xs: "12px",
                        width: { md: "70%", xs: "100%" },
                      },
                    }}
                  >
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Ratione, ex aspernatur! Quisquam illum, fuga ipsam facere
                    molestias dolores labore assumenda error deleniti nesciunt
                    doloribus natus reprehenderit distinctio voluptatum ipsa
                    cumque odit veniam hic atque iure quas consequatur. Neque
                    voluptate aspernatur voluptas. Voluptatibus similique iste
                    totam rem nesciunt facilis obcaecati beatae!
                  </Typography>
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>
          <Divider
            variant="middle"
            sx={{
              display: { md: "block", xs: "none" },
              bgcolor: "#222D55",
              mt: { md: 6, xs: 2 },
              opacity: "20%",
              borderBottomWidth: "1px",
            }}
          />
        </Box>
        <Box container sx={{ mt: { md: 10, xs: 5 } }}>
          <Accordion
            sx={{ boxShadow: "none", border: "none" }}
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
          >
            <AccordionSummary
              expandIcon={
                expanded === "panel3" ? (
                  <RemoveIcon
                    sx={{
                      color: "#ffffff",
                      borderRadius: "50%",
                      backgroundImage:
                        "linear-gradient(90deg, #7DB1FF -7.37%, #97E6FF 68.51%)",
                      width: { lg: 45, md: 40, xs: 30 },
                      padding: 0.7,
                      height: { lg: 45, md: 40, xs: 30 },
                    }}
                  />
                ) : (
                  <AddIcon
                    sx={{
                      color: "#ffffff",
                      borderRadius: "50%",
                      backgroundImage:
                        "linear-gradient(90deg, #7DB1FF -7.37%, #97E6FF 68.51%)",
                      width: { lg: 45, md: 40, xs: 30 },
                      padding: 0.7,
                      height: { lg: 45, md: 40, xs: 30 },
                    }}
                  />
                )
              }
              aria-controls="panel3-content"
              id="panel3-header"
            >
              <Typography
                sx={{
                  fontFamily: inter.style.fontFamily,
                  fontSize: { lg: "39px", md: "30px", xs: "14px" },
                  color: "#222D55",
                }}
              >
                Notification d’un incident
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Grid container>
                <Grid item md={6} xs={12}>
                  <Typography
                    sx={{
                      fontFamily: inter.style.fontFamily,
                      fontSize: {
                        md: "14px",
                        xs: "12px",
                        width: { md: "70%", xs: "100%" },
                      },
                    }}
                  >
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Ratione, ex aspernatur! Quisquam illum, fuga ipsam facere
                    molestias dolores labore assumenda error deleniti nesciunt
                    doloribus natus reprehenderit distinctio voluptatum ipsa
                    cumque odit veniam hic atque iure quas consequatur. Neque
                    voluptate aspernatur voluptas. Voluptatibus similique iste
                    totam rem nesciunt facilis obcaecati beatae!
                  </Typography>
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>
          <Divider
            variant="middle"
            sx={{
              display: { md: "block", xs: "none" },
              bgcolor: "#222D55",
              mt: { md: 6, xs: 2 },
              opacity: "20%",
              borderBottomWidth: "1px",
            }}
          />
        </Box>
        <Box container sx={{ mt: { md: 10, xs: 5 } }}>
          <Accordion
            sx={{ boxShadow: "none", border: "none" }}
            expanded={expanded === "panel4"}
            onChange={handleChange("panel4")}
          >
            <AccordionSummary
              expandIcon={
                expanded === "panel4" ? (
                  <RemoveIcon
                    sx={{
                      color: "#ffffff",
                      borderRadius: "50%",
                      backgroundImage:
                        "linear-gradient(90deg, #7DB1FF -7.37%, #97E6FF 68.51%)",
                      width: { lg: 45, md: 40, xs: 30 },
                      padding: 0.7,
                      height: { lg: 45, md: 40, xs: 30 },
                    }}
                  />
                ) : (
                  <AddIcon
                    sx={{
                      color: "#ffffff",
                      borderRadius: "50%",
                      backgroundImage:
                        "linear-gradient(90deg, #7DB1FF -7.37%, #97E6FF 68.51%)",
                      width: { lg: 45, md: 40, xs: 30 },
                      padding: 0.7,
                      height: { lg: 45, md: 40, xs: 30 },
                    }}
                  />
                )
              }
              aria-controls="panel4-content"
              id="panel4-header"
            >
              <Typography
                sx={{
                  fontFamily: inter.style.fontFamily,
                  fontSize: { lg: "39px", md: "30px", xs: "14px" },
                  color: "#222D55",
                }}
              >
                Le cadre de certification de la cyber-sécurité européenne
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Grid container>
                <Grid item md={6} xs={12}>
                  <Typography
                    sx={{
                      fontFamily: inter.style.fontFamily,
                      fontSize: {
                        md: "14px",
                        xs: "12px",
                        width: { md: "70%", xs: "100%" },
                      },
                    }}
                  >
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Ratione, ex aspernatur! Quisquam illum, fuga ipsam facere
                    molestias dolores labore assumenda error deleniti nesciunt
                    doloribus natus reprehenderit distinctio voluptatum ipsa
                    cumque odit veniam hic atque iure quas consequatur. Neque
                    voluptate aspernatur voluptas. Voluptatibus similique iste
                    totam rem nesciunt facilis obcaecati beatae!
                  </Typography>
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>
          <Divider
            variant="middle"
            sx={{
              display: { md: "block", xs: "none" },
              bgcolor: "#222D55",
              mt: { md: 6, xs: 2 },
              opacity: "20%",
              borderBottomWidth: "1px",
            }}
          />
        </Box>
        <Box container sx={{ mt: { md: 10, xs: 5 } }}>
          <Accordion
            sx={{ boxShadow: "none", border: "none" }}
            expanded={expanded === "panel5"}
            onChange={handleChange("panel5")}
          >
            <AccordionSummary
              expandIcon={
                expanded === "panel5" ? (
                  <RemoveIcon
                    sx={{
                      color: "#ffffff",
                      borderRadius: "50%",
                      backgroundImage:
                        "linear-gradient(90deg, #7DB1FF -7.37%, #97E6FF 68.51%)",
                      width: { lg: 45, md: 40, xs: 30 },
                      padding: 0.7,
                      height: { lg: 45, md: 40, xs: 30 },
                    }}
                  />
                ) : (
                  <AddIcon
                    sx={{
                      color: "#ffffff",
                      borderRadius: "50%",
                      backgroundImage:
                        "linear-gradient(90deg, #7DB1FF -7.37%, #97E6FF 68.51%)",
                      width: { lg: 45, md: 40, xs: 30 },
                      padding: 0.7,
                      height: { lg: 45, md: 40, xs: 30 },
                    }}
                  />
                )
              }
              aria-controls="panel5-content"
              id="panel5-header"
            >
              <Typography
                sx={{
                  fontFamily: inter.style.fontFamily,
                  fontSize: { lg: "39px", md: "30px", xs: "14px" },
                  color: "#222D55",
                }}
              >
                Réponse aux incidents
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Grid container>
                <Grid item md={6} xs={12}>
                  <Typography
                    sx={{
                      fontFamily: inter.style.fontFamily,
                      fontSize: {
                        md: "14px",
                        xs: "12px",
                        width: { md: "70%", xs: "100%" },
                      },
                    }}
                  >
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Ratione, ex aspernatur! Quisquam illum, fuga ipsam facere
                    molestias dolores labore assumenda error deleniti nesciunt
                    doloribus natus reprehenderit distinctio voluptatum ipsa
                    cumque odit veniam hic atque iure quas consequatur. Neque
                    voluptate aspernatur voluptas. Voluptatibus similique iste
                    totam rem nesciunt facilis obcaecati beatae!
                  </Typography>
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>
          <Divider
            variant="middle"
            sx={{
              display: { md: "block", xs: "none" },
              bgcolor: "#222D55",
              mt: { md: 6, xs: 2 },
              opacity: "20%",
              borderBottomWidth: "1px",
            }}
          />
        </Box>
      </Container>
    </Box>
  );
}
