"use client";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const MenuItems = ({ active, setActive, setMobileIsOpen }: any) => {
  const generateLink = (i: any) => {
    switch (i) {
      case 0:
        return "/";
      case 1:
        return "/created-nfts";
      case 2:
        return "/my-nfts";
      default:
        return "/";
    }
  };

  return (
    <ul className="flex flex-col mt-3 lg:flex-row lg:mt-0 items-center gap-5">
      {["Explore NFTs", "Listed NFTs", "My NFTs"].map((item, i) => {
        return (
          <li
            key={i}
            onClick={() => {
              setActive(item);
              // setMobileIsOpen(false);
            }}
          >
            <Link
              href={generateLink(i)}
              className={active === item ? "text-white" : "text-gray-400"}
            >
              {item}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default function Navbar() {
  const [active, setActive] = useState("Explore NFTs");
  const [hasConnected, setHasConnected] = useState(false);
  const [mobileIsOpen, setMobileIsOpen] = useState(false);
  const router = useRouter();

  return (
    <nav className="fixed w-full flex justify-between p-[15px] bg-[#121517] border-b border-[#333]">
      <Link href="/">
        <div className="flex items-center gap-3">
          <Image src="/img/logo.png" width={40} height={40} alt="logo" />
          <p className="text-white font-semibold">NFT Market Place</p>
        </div>
      </Link>

      <div className="hidden lg:flex items-center gap-5">
        <MenuItems active={active} setActive={setActive} />

        <Button
          onClick={() => {
            if (hasConnected) {
              setActive("");
              router.push("/create-nft");
            }
            // Ajouter le else pour la connection metamask
          }}
        >
          {hasConnected ? "Create NFT" : "Connect Wallet"}
        </Button>
      </div>

      {/* MOBILE NAV */}
      <div className="lg:hidden relative flex items-center gap-5">
        {mobileIsOpen ? (
          <Image
            src="/img/cross.png"
            height={30}
            width={30}
            alt="close"
            onClick={() => setMobileIsOpen(false)}
          />
        ) : (
          <Image
            src="/img/menu.png"
            height={35}
            width={35}
            alt="menu"
            onClick={() => setMobileIsOpen(true)}
          />
        )}
      </div>
      {mobileIsOpen && (
        <div className="lg:hidden absolute flex flex-col items-center justify-center gap-4 w-full h-screen top-[70px] left-0 right-0 bottom-0 bg-black">
          <MenuItems
            active={active}
            setActive={setActive}
            setMobileIsOpen={setMobileIsOpen}
          />
          <div className="">
            <Button
              onClick={() => {
                if (hasConnected) {
                  setActive("");
                  router.push("/create-nft");
                }
                // Ajouter le else pour la connection metamask
              }}
            >
              {hasConnected ? "Create NFT" : "Connect Wallet"}
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
