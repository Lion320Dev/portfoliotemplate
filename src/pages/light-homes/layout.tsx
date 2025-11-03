import ModalWrapperClassToggler from "@/components/common/ModalWrapperClassToggler";

export default function LightHomepagesLayout({ children }) {
  return (
    <>
      <ModalWrapperClassToggler classes={["tmp-white-version"]} />
      {children}
    </>
  );
}
