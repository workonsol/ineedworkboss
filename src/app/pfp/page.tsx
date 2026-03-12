import Navbar from "@/components/Navbar";
import PFPGenerator from "./PFPGenerator";

export const metadata = {
  title: "#OpenToWork PFP Generator | $WORK",
  description:
    "Upload your profile picture and get the LinkedIn #OpenToWork frame applied instantly. Free, private, client-side.",
};

export default function PFPPage() {
  return (
    <>
      <Navbar />
      <PFPGenerator />
    </>
  );
}
