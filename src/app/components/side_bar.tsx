import { Paper, Space, NavLink, Image } from "@mantine/core";
import React from "react";
import { AiOutlineStock } from "react-icons/ai";
import { BiPurchaseTag, BiSolidReport } from "react-icons/bi";
import { FaPeopleCarry } from "react-icons/fa";
import { IoMdLogOut } from "react-icons/io";
import { IoSettingsSharp } from "react-icons/io5";
import { MdDashboard } from "react-icons/md";

function SideBar() {
  return (
    <Paper
      h={"600"}
      shadow="md"
      style={{
        marginTop: "10",
        width: "15%",
        maxWidth: "15%",
        backgroundColor: "white",
        color: "black",
        alignContent: "flex-start",
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}
    >
      <Image
        radius="md"
        h={40}
        w="auto"
        fit="contain"
        alt="logo"
        src="https://echi-management.vercel.app/_next/image?url=%2FecwaLogo.jpg&w=256&q=75"
      />
      <Space h="lg" />
      <NavLink
        href="#required-for-focus"
        label="Dashboard"
        leftSection={<MdDashboard size={16} stroke="1.5" />}
      />
      <Space h={"md"} />
      <NavLink
        href="#required-for-focus"
        label="Purchase"
        leftSection={<BiPurchaseTag size={16} stroke="1.5" />}
      />
      <Space h={"md"} />
      <NavLink
        href="#required-for-focus"
        label="Product"
        leftSection={<MdDashboard size={16} stroke="1.5" />}
      />
      <Space h={"md"} />
      <NavLink
        href="#required-for-focus"
        label="Reports"
        leftSection={<BiSolidReport size={16} stroke="1.5" />}
      />
      <Space h={"md"} />
      <NavLink
        href="#required-for-focus"
        label="Stock"
        leftSection={<AiOutlineStock size={16} stroke="1.5" />}
      />{" "}
      <Space h={"md"} />
      <NavLink
        href="#required-for-focus"
        label="Suppliers"
        leftSection={<FaPeopleCarry size={16} stroke="1.5" />}
      />{" "}
      <Space h={"md"} />
      <NavLink
        href="#required-for-focus"
        label="Settings"
        leftSection={<IoSettingsSharp size={16} stroke="1.5" />}
      />{" "}
      <Space h={"xl"} />
      <NavLink
        href="#required-for-focus"
        label="logout"
        leftSection={<IoMdLogOut size={16} stroke="1.5" />}
      />
    </Paper>
  );
}

export default SideBar;
