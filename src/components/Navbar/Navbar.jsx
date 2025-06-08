'use client';
import styles from "./Navbar.module.scss";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import logoHeader from "../../images/logo-header.png";
import toast from "react-hot-toast";
import { useState, useEffect, useRef } from 'react';
import {
    LogOut,
    Wallet,
    Settings,
    User,
    HelpCircle
} from 'lucide-react';

import IconBinance from "../../images/IconBinance.png";
import IconBrave from "../../images/IconBrave.png";
import IconCoinbase from "../../images/IconCoinbase.png";
import IconMetamask from "../../images/IconMetamask.png";
import IconOKWallet from "../../images/IconOKWallet.png";
import IconOpera from "../../images/IconOpera.png";
import IconTrust from "../../images/IconTrust.png";
import IconWalletConnect from "../../images/IconWalletConnect.png";
import IconQR from "../../images/IconQR.png";

import { IoMenu, IoClose } from "react-icons/io5";
import { useRouter } from "next/navigation";

const Navbar = () => {
    const router = useRouter();
    const pathname = usePathname();
    const sidebarRef = useRef(null);
    const [user, setUser] = useState(null);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [showWalletPopup, setShowWalletPopup] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [walletConnected, setWalletConnected] = useState(false);


    const handleWalletSelect = (walletName) => {
        setWalletConnected(true);
        setShowWalletPopup(false);
        localStorage.setItem("selectedWallet", walletName);
    };

    useEffect(() => {
        const savedWallet = localStorage.getItem("selectedWallet");
        if (savedWallet) {
            setWalletConnected(true);
        }
    }, []);



    useEffect(() => {
        const syncAuth = () => {
            const storedUser = localStorage.getItem("userData");
            setUser(storedUser ? JSON.parse(storedUser) : null);
            setIsLoggedIn(localStorage.getItem("isLoggedIn") === "true");
        };

        syncAuth();

        window.addEventListener("auth-changed", syncAuth);

        return () => window.removeEventListener("auth-changed", syncAuth);
    }, []);


    const handleLogout = () => {
        localStorage.removeItem("isLoggedIn");
        toast.success("Logged out");
        setUser(null);
        setIsLoggedIn(null);
        router.push("/login");
    };

    const navItems = [
        { href: "/", label: "Home" },
        { href: "/projects", label: "Projects" },
        { href: "/business-model", label: "Business Model" },
        { href: "/legal", label: "Legal & Security" },
        { href: "/team", label: "Team" },
        { href: "/contact", label: "Contact" },
    ];

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 992) {
                setIsOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);



    return (
        <nav className={styles.navbar}>
            <Link href="/" className={styles.logo}>
                <img src={logoHeader.src} alt="Brickchain Logo" />
            </Link>

            <button className={styles.hamburger} onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <IoClose size={24} /> : <IoMenu size={24} />}
            </button>

            <div className={styles.rightSection}>
                <ul className={styles.menu}>
                    {navItems.map((item) => (
                        <li key={item.href}>
                            <Link
                                href={item.href}
                                className={`${pathname === item.href ? styles.active : ""}`}
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>


                {isLoggedIn
                    ?
                    <div className={styles.userMenu}>
                        {!walletConnected && (
                            <button
                                className={styles.connectWallet}
                                onClick={() => setShowWalletPopup(!showWalletPopup)}
                            >
                                Connect Wallet
                            </button>
                        )}

                        <div onClick={() => setDropdownOpen(!dropdownOpen)} style={{ display: "flex", gap: "8px", justifyContent: "center", alignItems: "center" }}>
                            <div className={styles.userAvatar} >
                                <img src="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250" alt="User Avatar" />
                            </div>
                            <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 6.5L8 10.5L12 6.5" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>

                        {showWalletPopup && (
                            <div className={styles.walletPopup}>
                                <div className={styles.walletHeader}>
                                    <h3>Connect Wallet</h3>
                                    <p>Start by connecting with one of the wallets below. Be sure to store your private keys or seed phrase securely. Never share them with anyone.</p>
                                </div>
                                <div className={styles.walletGrid}>
                                    <button onClick={() => handleWalletSelect("Binance")}>
                                        <img src={IconBinance.src} alt="Binance" />
                                        <span>Binance</span>
                                    </button>
                                    <button onClick={() => handleWalletSelect("Brave")}>
                                        <img src={IconBrave.src} alt="Brave" />
                                        <span>Brave</span>
                                    </button>
                                    <button onClick={() => handleWalletSelect("Coinbase")}>
                                        <img src={IconCoinbase.src} alt="Coinbase" />
                                        <span>Coinbase</span>
                                    </button>
                                    <button onClick={() => handleWalletSelect("Metamask")}>
                                        <img src={IconMetamask.src} alt="Metamask" />
                                        <span>Metamask</span>
                                    </button>
                                    <button onClick={() => handleWalletSelect("OKX Wallet")}>
                                        <img src={IconOKWallet.src} alt="OKX Wallet" />
                                        <span>OKX Wallet</span>
                                    </button>
                                    <button onClick={() => handleWalletSelect("Opera")}>
                                        <img src={IconOpera.src} alt="Opera" />
                                        <span>Opera</span>
                                    </button>
                                    <button onClick={() => handleWalletSelect("Trust")}>
                                        <img src={IconTrust.src} alt="Trust" />
                                        <span>Trust</span>
                                    </button>
                                    <button onClick={() => handleWalletSelect("Wallet Connect")}>
                                        <img src={IconWalletConnect.src} alt="Wallet Connect" />
                                        <span>Wallet Connect</span>
                                    </button>
                                    <button onClick={() => handleWalletSelect("Scan QR")}>
                                        <img src={IconQR.src} alt="Scan QR" />
                                        <span>Scan QR</span>
                                    </button>
                                </div>
                            </div>
                        )}


                        {dropdownOpen && (
                            <div className={styles.dropdown}>
                                <div className={styles.userName}>{user?.fullName || "Anonymous"}</div>
                                <hr />
                                <button className={styles.dropdownItem}>
                                    <Wallet size={18} /> Connect Wallet
                                </button>
                                <button className={styles.dropdownItem}>
                                    <Settings size={18} /> Settings
                                </button>
                                <button className={styles.dropdownItem}>
                                    <User size={18} /> Profile
                                </button>
                                <button className={styles.dropdownItem}>
                                    <HelpCircle size={18} /> Support
                                </button>
                                <button onClick={handleLogout} className={styles.dropdownItem}>
                                    <LogOut size={18} /> Logout
                                </button>
                            </div>
                        )}

                    </div>
                    :
                    <div className={styles.authButtons}>
                        <Link href="/login" className={styles.signIn}>Sign in</Link>
                        <Link href="/register" className={styles.register}>Register</Link>
                    </div>
                }

            </div>

            <div ref={sidebarRef} className={`${styles.sidebar} ${isOpen ? styles.open : ""}`}>
                <ul>
                    {navItems.map((item) => (
                        <li key={item.href}>
                            <Link
                                href={item.href}
                                className={`${pathname === item.href ? styles.active : ""}`}
                                onClick={() => setIsOpen(false)}
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
                <div className={styles.sidebarAuth}>
                    {isLoggedIn ? (
                        <div className={styles.sidebarUserBox}>
                            <div className={styles.userAvatar}>
                                <img
                                    src="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250"
                                    alt="User Avatar"
                                />
                            </div>
                            <div className={styles.sidebarUserInfo}>
                                <div className={styles.userName}>{user?.fullName || "Anonymous"}</div>
                                <div className={styles.userEmail}>{user?.email}</div>
                            </div>
                            <button onClick={handleLogout} className={styles.logoutBtn}>Logout</button>
                        </div>
                    ) : (
                        <>
                            <Link href="/login" onClick={() => setIsOpen(false)}>Sign in</Link>
                            <Link href="/register" onClick={() => setIsOpen(false)}>Register</Link>
                        </>
                    )}
                </div>

            </div>
        </nav>
    );
};

export default Navbar;
