import { useState } from "react";
import styles from "./FilterSidebar.module.scss";

export default function FilterSidebar({ onChange }) {
    const [options, setOptions] = useState({
        available: true,
        firstHand: true,
    });

    const [keywords, setKeywords] = useState(["Apartment", "Villa", "Commercial"]);
    const [sharePrice, setSharePrice] = useState([0, 100000]);
    const [unitPrice, setUnitPrice] = useState([0, 5000]);
    const [size, setSize] = useState([0, 500]);
    const [unitTypes, setUnitTypes] = useState([
        { type: "Studio", checked: true },
        { type: "1+1", checked: true },
        { type: "2+1", checked: true },
        { type: "2+2", checked: true },
        { type: "3+1", checked: true },
        { type: "4+1", checked: true },
        { type: "4+2", checked: true },
        { type: "5+1", checked: true },
    ]);


    const notifyChange = (changes) => {
        onChange({
            keywords,
            options,
            sharePrice,
            unitPrice,
            size,
            unitTypes,
            ...changes,
        });
    };


    const toggleOption = (option) => {
        setOptions(prev => {
            const updated = {
                ...prev,
                [option]: !prev[option],
            };
            notifyChange({ options: updated });
            return updated;
        });
    };

    const handleRemoveKeyword = (keyword) => {
        setKeywords(prev => {
            const updated = prev.filter(item => item !== keyword);
            notifyChange({ keywords: updated });
            return updated;
        });
    };

    const handleSharePriceChange = (e, index) => {
        const value = e.target.valueAsNumber;
        const newPrices = [...sharePrice];
        newPrices[index] = value;
        if (newPrices[0] > newPrices[1]) {
            if (index === 0) {
                newPrices[1] = newPrices[0];
            } else {
                newPrices[0] = newPrices[1];
            }
        }
        setSharePrice(newPrices);
        notifyChange({ sharePrice: newPrices });
    };

    const handleUnitPriceChange = (e, index) => {
        const value = e.target.valueAsNumber;
        const newPrices = [...unitPrice];
        newPrices[index] = value;

        if (newPrices[0] > newPrices[1]) {
            if (index === 0) {
                newPrices[1] = newPrices[0];
            } else {
                newPrices[0] = newPrices[1];
            }
        }
        setUnitPrice(newPrices);
        notifyChange({ unitPrice: newPrices });
    };

    const handleSizeChange = (e, index) => {
        const value = e.target.valueAsNumber;
        const newSize = [...size];
        newSize[index] = value;

        if (newSize[0] > newSize[1]) {
            if (index === 0) {
                newSize[1] = newSize[0];
            } else {
                newSize[0] = newSize[1];
            }
        }
        setSize(newSize);
        notifyChange({ size: newSize });
    };

    const toggleUnitType = (index) => {
        setUnitTypes(prev =>
            prev.map((item, idx) =>
                idx === index ? { ...item, checked: !item.checked } : item
            )
        );
    };


    return (
        <div className={styles.sidebar}>
            <div className={styles.section}>
                <h4 className={styles.sectionTitle}>Keywords</h4>
                <div className={styles.tags}>
                    {keywords.map((keyword, idx) => (
                        <div key={idx} className={styles.tag}>
                            {keyword}
                            <button
                                className={styles.removeBtn}
                                onClick={() => handleRemoveKeyword(keyword)}
                            >
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 4L4 12M4 4L12 12" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            <div className={styles.section}>
                <h4 className={styles.sectionTitle}>Options</h4>
                <label className={styles.checkboxWrapper}>
                    <input
                        type="checkbox"
                        checked={options.available}
                        onChange={() => toggleOption('available')}
                        className={styles.checkbox}
                    />
                    <div className={styles.labelText}>
                        <span>Available</span>
                        <small>Tokens available</small>
                    </div>
                </label>

                <label className={styles.checkboxWrapper}>
                    <input
                        type="checkbox"
                        checked={options.firstHand}
                        onChange={() => toggleOption('firstHand')}
                        className={styles.checkbox}
                    />
                    <div className={styles.labelText}>
                        <span>1st Hand</span>
                        <small>Only first time sales</small>
                    </div>
                </label>
            </div>

            <div className={styles.section}>
                <div className={styles.sliderHeader}>
                    <h4 className={styles.sectionTitle}>Share price</h4>
                    <span className={styles.rangeValue}>${sharePrice[0]} - ${sharePrice[1]}</span>
                </div>
                <div className={styles.doubleSlider}>
                    <input
                        type="range"
                        min="0"
                        max="100000"
                        value={sharePrice[0]}
                        onChange={(e) => handleSharePriceChange(e, 0)}
                        className={styles.slider}
                    />
                    <input
                        type="range"
                        min="0"
                        max="100000"
                        value={sharePrice[1]}
                        onChange={(e) => handleSharePriceChange(e, 1)}
                        className={styles.slider}
                    />
                </div>
            </div>

            {/* Unit Price */}
            <div className={styles.section}>
                <div className={styles.sliderHeader}>
                    <h4 className={styles.sectionTitle}>Unit price from</h4>
                    <span className={styles.rangeValue}>${unitPrice[0]} - ${unitPrice[1]}k</span>
                </div>
                <div className={styles.doubleSlider}>
                    <input
                        type="range"
                        min="0"
                        max="5000"
                        value={unitPrice[0]}
                        onChange={(e) => handleUnitPriceChange(e, 0)}
                        className={styles.slider}
                    />
                    <input
                        type="range"
                        min="0"
                        max="5000"
                        value={unitPrice[1]}
                        onChange={(e) => handleUnitPriceChange(e, 1)}
                        className={styles.slider}
                    />
                </div>
            </div>

            {/* Size */}
            <div className={styles.section}>
                <div className={styles.sliderHeader}>
                    <h4 className={styles.sectionTitle}>Size</h4>
                    <span className={styles.rangeValue}>{size[0]} - {size[1]}m²</span>
                </div>
                <div className={styles.doubleSlider}>
                    <input
                        type="range"
                        min="0"
                        max="500"
                        value={size[0]}
                        onChange={(e) => handleSizeChange(e, 0)}
                        className={styles.slider}
                    />
                    <input
                        type="range"
                        min="0"
                        max="500"
                        value={size[1]}
                        onChange={(e) => handleSizeChange(e, 1)}
                        className={styles.slider}
                    />
                </div>
            </div>


            <div className={styles.section}>
                <h4 className={styles.sectionTitle}>Unit Types</h4>
                {unitTypes.map((item, idx) => (
                    <label key={idx} className={styles.checkboxWrapper}>
                        <input
                            type="checkbox"
                            checked={item.checked}
                            onChange={() => toggleUnitType(idx)}
                            className={styles.checkbox}
                        />
                        <div className={styles.labelText}>
                            <span>{item.type}</span>
                        </div>
                    </label>
                ))}
            </div>
        </div>
    );
}
