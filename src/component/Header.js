import NavbarDesktop from "./header/NavbarDesktop";

export default function Header() {
  return (
    <header>
      <NavbarMobile />
      <NavbarDesktop />
    </header>
  );
}