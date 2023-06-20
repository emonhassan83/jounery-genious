import Container from "../Container";
import Logo from "./Logo";
import MenuDropdown from "./MenuDropdown";
import NavButton from "./NavButton";

const Navbar = () => {
    return (
        <div className="w-full  z-10 shadow-sm bg-[#feeddc]">
        <div className="py-4 border-b-[1px]">
          <Container>
            <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
              <Logo/>
              <NavButton/>
              <MenuDropdown/>
            </div>
          </Container>
        </div>
      </div>
    );
};

export default Navbar;