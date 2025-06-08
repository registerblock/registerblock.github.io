"use client";


import Image from "next/image";
import styles from "./Wallet.module.scss";
import ProjectsSliderSec from "../../components/ProjectsSliderSec/ProjectsSliderSec";
import project2 from "../../images/projects-project-2.png";
import { useSearchParams } from "next/navigation";

export default function WalletInner() {

    const searchParams = useSearchParams();

    const title = searchParams.get("title");
    const unitType = searchParams.get("unitType");
    const unitPrice = searchParams.get("unitPrice");
    const share = searchParams.get("share");

    const purchasePrice = unitPrice ? Number(unitPrice) * 1_000_000 : 0;
    const currentPrice = purchasePrice * 1.2;
    const sharePercentage = share ? parseInt(share.replace("%", "")) : 0;
    const shareValue = (currentPrice * sharePercentage) / 100;
    const nftProfit = currentPrice - purchasePrice;
    const totalProfit = nftProfit + 3950;

    return (
        <div className={styles.walletPage}>
            <h1 className={styles.heading}>Wallet</h1>
            <hr className={styles.separator} />

            {/* NFT Kartı */}
            <div className={styles.nftCard}>
                {/* Sol */}
                <div className={styles.left}>
                    <Image src={project2} alt={title || "Project"} width={100} height={100} className={styles.image} />
                    <div className={styles.projectDropdown}>
                        {title} - ISTP101
                    </div>
                </div>

                {/* Sağ */}
                <div className={styles.right}>
                    {/* Üst Bilgi */}
                    <div className={styles.topInfo}>
                        <div><span className={styles.label}>Unit</span><span>{unitType || "-"}</span></div>
                        <div><span className={styles.label}>Purchase Price</span><span>${purchasePrice.toLocaleString()}</span></div>
                        <div><span className={styles.label}>Current Price</span><span>${currentPrice.toLocaleString()}</span></div>
                        <div><span className={styles.label}>Share</span><span>{share || "-"}</span></div>
                        <div><span className={styles.label}>Share Value</span><span>${shareValue.toLocaleString()}</span></div>
                        <div><span className={styles.label}>NFT Code</span><span>ISTP101/7</span></div>
                        <div className={styles.resel}>
                            <button className={styles.resellButton}>Resell</button>
                        </div>
                    </div>

                    <hr className={styles.subSeparator} />

                    {/* Alt Bilgi */}
                    <div className={styles.bottomInfo}>
                        <div><span className={styles.label}>NFT Profit</span><span className={styles.greenText}>${nftProfit.toLocaleString()}</span></div>
                        <div><span className={styles.label}>2026 Div</span><span>$1,000</span></div>
                        <div><span className={styles.label}>2027 Div</span><span>$1,200</span></div>
                        <div><span className={styles.label}>2028 Div</span><span>$1,750</span></div>
                        <div><span className={styles.label}>Total Div</span><span>$3,950</span></div>
                        <div><span className={styles.label}>Total Profit/Loss</span><span className={styles.greenText}>${totalProfit.toLocaleString()}</span></div>
                    </div>
                </div>
            </div>


            <hr className={styles.separator} />

            {/* Alt Özet */}
            <div className={styles.summaryArea}>
                <p>Total dividends paid: <b>$3,950</b></p>
                <p>NFT grand total: <b>${shareValue.toLocaleString()}</b></p>
            </div>


            <hr className={styles.separator} />


            <ProjectsSliderSec />
        </div>
    );
}
