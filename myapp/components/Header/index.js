import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
} from "@nextui-org/react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import LogoutButton from "../Buttons/LogoutButton";
import ThemeToogle from "../Buttons/ThemeToogle";

const Header = async () => {
  const session = await getServerSession(authOptions);
  return (
    <header>
      <Navbar isBordered>
        <NavbarContent>
          <NavbarBrand>
            <Link href="/dashboard"
              className="font-semibold text-lg"
            >
              FITNESSTRACKER
            </Link>
          </NavbarBrand>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem className="flex items-center">
            <ThemeToogle />
          </NavbarItem>
        </NavbarContent>
        
        {!!session && (
          <>
            <Link href="/dashboard/new"
              className="inline-block rounded-lg px-4 py-2 text-sm font-semibold text-white bg-primary"
            >
              Adicionar Exercício
            </Link>
            <LogoutButton />
          </>
        )}
        {!session && (
          <>
            <Link href="/login">LogIn</Link>
            <Link href="/login">SignUp</Link>
          </>
        )}
      </Navbar>
    </header>
  );
};

export default Header;
