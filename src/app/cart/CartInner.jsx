"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";
import styles from "./Cart.module.scss";
import Image from "next/image";
import project2 from "../../images/projects-project-2.png";
import toast from "react-hot-toast";
import ProjectsSliderSec from "../../components/ProjectsSliderSec/ProjectsSliderSec";

export default function CartInner() {
    const searchParams = useSearchParams();
    const router = useRouter();

    const title = searchParams.get("title");
    const unitType = searchParams.get("unitType");
    const unitPrice = Number(searchParams.get("unitPrice"));
    const share = searchParams.get("share");

    const sharePercentage = share ? parseInt(share.replace("%", "")) : 0;
    const subtotal = unitPrice && sharePercentage ? ((unitPrice * 1_000_000) * (sharePercentage / 100)) : 0;

    const [selectedUnit, setSelectedUnit] = useState(unitType ? { type: unitType, price: unitPrice } : null);
    const [selectedShare, setSelectedShare] = useState(share || null);
    const [openUnit, setOpenUnit] = useState(false);
    const [openShare, setOpenShare] = useState(false);

    const fakeUnitOptions = [
        { type: "1+1", price: 0.5 },
        { type: "2+1", price: 0.7 },
        { type: "3+1", price: 0.9 },
        { type: "4+1", price: 1.2 },
    ];
    const fakeShareOptions = ["10%", "20%", "30%"];

    const formatCurrency = (amount) => {
        return `$${(amount / 1000).toFixed(0)}k`;
    };

    const handleUnitSelect = (unit) => {
        setSelectedUnit(unit);
        setOpenUnit(false);
    };

    const handleShareSelect = (share) => {
        setSelectedShare(share);
        setOpenShare(false);
    };

    const handlePurchase = () => {
        if (!selectedUnit || !selectedShare) {
            toast.error("Please select unit and share first!");
            return;
        }

        toast.success("Purchase successful!");

        setTimeout(() => {
            router.push(`/wallet?title=${encodeURIComponent(title)}&unitType=${selectedUnit.type}&unitPrice=${selectedUnit.price}&share=${selectedShare}`);
        }, 1000);
    };

    if (!title) {
        return <div style={{ padding: "24px", color: "white" }}>No item in the cart.</div>;
    }

    return (
        <div className={styles.cartPage}>
            <h1 className={styles.heading}>Cart</h1>
            <hr className={styles.separator} />

            <h2 className={styles.subheading}>Cart Items</h2>

            <div className={styles.cartHeader}>
                <div className={styles.emptyCell}></div>
                <div>Unit</div>
                <div>Price</div>
                <div>Share</div>
                <div>Subtotal</div>
            </div>
            <hr className={styles.separator} />


            <div className={styles.cartItem}>
                {/* Image + Title */}
                <div className={styles.productArea}>
                    <Image src={project2} alt={title} width={80} height={80} className={styles.image} />
                    <div className={styles.dropdown}>
                        {title}
                    </div>
                </div>

                {/* Unit */}
                <div className={styles.selectArea}>
                    <div className={styles.dropdown} onClick={() => setOpenUnit(!openUnit)}>
                        <div className={styles.dropdownHeader}>
                            {selectedUnit ? selectedUnit.type : "Select unit"}
                            <span>{openUnit ? <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15 12.5L10 7.5L5 12.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg> : <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 6L8 10L12 6" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>}</span>
                        </div>
                        {openUnit && (
                            <div className={styles.dropdownList}>
                                {fakeUnitOptions.map((unit, idx) => (
                                    <div
                                        key={idx}
                                        className={styles.dropdownItem}
                                        onClick={() => handleUnitSelect(unit)}
                                    >
                                        {unit.type}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                {/* Price */}
                <div className={styles.priceArea}>
                    {selectedUnit ? `$${selectedUnit.price} Mio` : "-"}
                </div>

                {/* Share */}
                <div className={styles.selectArea}>
                    <div className={styles.dropdown} onClick={() => setOpenShare(!openShare)}>
                        <div className={styles.dropdownHeader}>
                            {selectedShare || "Select share"}
                            <span>{openShare ? <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15 12.5L10 7.5L5 12.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg> : <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 6L8 10L12 6" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>}</span>
                        </div>
                        {openShare && (
                            <div className={styles.dropdownList}>
                                {fakeShareOptions.map((shareOption, idx) => (
                                    <div
                                        key={idx}
                                        className={styles.dropdownItem}
                                        onClick={() => handleShareSelect(shareOption)}
                                    >
                                        {shareOption}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                {/* Subtotal */}
                <div className={styles.subtotalArea}>
                    {selectedUnit && selectedShare ? formatCurrency((selectedUnit.price * 1_000_000) * (parseInt(selectedShare.replace("%", "")) / 100)) : "-"}
                </div>
            </div>
            <hr className={styles.separator} />

            {/* Total */}
            <div className={styles.totalArea}>
                <div className={styles.totalLine}>
                    <span>Subtotal:</span>
                    <span>{formatCurrency(subtotal)}</span>
                </div>
                <div className={styles.totalLine}>
                    <span>Grand total:</span>
                    <span>{formatCurrency(subtotal)}</span>
                </div>
                <button className={styles.purchaseButton} onClick={handlePurchase}>Purchase</button>
            </div>
            <ProjectsSliderSec />
        </div>
    );
}
