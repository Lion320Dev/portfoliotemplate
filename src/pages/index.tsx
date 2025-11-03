import Home from "./dark-homes/index-01";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title:
    "Home 01 || Personal Portfolio Reactjs Template | Freelancer & Developer Portfolio",
  description:
    "Personal Portfolio Reactjs Template | Freelancer & Developer Portfolio",
};
export default function page() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Home />
    </>
  );
}
