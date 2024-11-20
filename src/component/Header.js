import NavbarDesktop from "./header/NavbarDesktop";
import NavbarMobile from "./header/NavbarMobile";

export default function Header() {
  return (
    <header>
      <NavbarMobile />
      <NavbarDesktop />
    </header>
  );
}