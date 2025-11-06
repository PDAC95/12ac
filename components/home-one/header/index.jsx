"use client";
import DesktopNav from "@/components/common/navigation/desktop-nav/DesktopNav";
/* eslint-disable for-direction */
import Dropdown from "@/components/common/navigation/desktop-nav/Dropdown";
import DropdownItem from "@/components/common/navigation/desktop-nav/DropdownItem";
import NavItem from "@/components/common/navigation/desktop-nav/NavItem";
import MobileNavbar from "@/components/common/navigation/mobile-nav/MobileNavbar";
import { menuItemsData } from "@/components/common/navigation/mobile-nav/menuItemsData";
import HeaderButton from "./HeaderButton";
import HeaderLogo from "./HeaderLogo";

function Header() {
	return (
		<header className="site-header aximo-header-section aximo-header1 dark-bg" id="sticky-menu">
			<div className="container">
				<nav className="navbar site-navbar">
					<HeaderLogo />
					<div className="menu-block-wrapper">
						<DesktopNav>
							<NavItem url="/">Home</NavItem>
							<NavItem url="about-us">About Us</NavItem>
							<NavItem dropdown title="Services">
								<Dropdown>
									<DropdownItem url="service">All Services</DropdownItem>
									<DropdownItem url="service/ai-automation">AI Integration & Automation</DropdownItem>
									<DropdownItem url="service/custom-software">Custom Software Development</DropdownItem>
									<DropdownItem url="service/ecommerce">E-commerce Development</DropdownItem>
									<DropdownItem url="service/mobile-apps">Mobile App Development</DropdownItem>
									<DropdownItem url="service/web-development">Web Development</DropdownItem>
									<DropdownItem url="service/digital-marketing">Digital Marketing & SEO</DropdownItem>
									<DropdownItem url="service/dedicated-teams">Dedicated Development Teams</DropdownItem>
									<DropdownItem url="service/branding">Brand Strategy & Design</DropdownItem>
								</Dropdown>
							</NavItem>
							<NavItem url="how-we-work">How We Work</NavItem>
							<NavItem url="blog">Blog</NavItem>
							<NavItem url="contact-us">Contact</NavItem>
						</DesktopNav>
					</div>
					<HeaderButton />

					<MobileNavbar menuItemsData={menuItemsData} title="AC95" />
				</nav>
			</div>
		</header>
	);
}

export default Header;
