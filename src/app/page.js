import { Container } from "@mui/material";
import CaribbeanAgency from "../Components/HomeScreen/CaribbeanAgency/page";
import MajorActivity from "../Components/HomeScreen/MajorActivity/page";
import OurNews from "../Components/HomeScreen/OurNews/page";
import Partenaires from "../Components/HomeScreen/Partenaires/page";

export default function Home() {
  return (
    <>
        <CaribbeanAgency />
        <Partenaires />
        <MajorActivity />
        <OurNews />
    </>
  );
}
