import React, { Component } from "react";
import SidebarBrand from "./SidebarBrand";
import SidebarItem from "./SidebarItem";

export default class Sidebar extends Component {
  render() {
    return (
      <div className="fixed top-0 left-0 flex flex-col h-full w-64 shadow-lg">
        <SidebarBrand />
        <div className="flex-grow overflow-y-auto">
          <SidebarItem content="Home" biIcon="bi-house-fill" active={true} />
          <SidebarItem content="Produk" biIcon="bi-box" />
        </div>
      </div>
    );
  }
}
