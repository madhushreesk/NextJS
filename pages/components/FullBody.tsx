import React from 'react'
import styles from '../../styles/fullBody.module.css'


const FullBody = () => {
    return (
        <div>
            <div className={styles.mainDivContainer}>
                <div className={styles.firstContainer}>
                    Full body checkup
                    <div className={styles.essentialText}>Essential</div>
                    <div className={styles.getTestedparameters}>Get tested for 92 parameters</div>
                    <div className={styles.offerPriceBox}>
                        <div className={styles.offerPricetext}>OFFER PRICE</div>
                    </div>
                    <div className={styles.priceBox}>
                        <div className={styles.mrpPrice}>₹ 1299</div>
                        <div className={styles.rupeeSymbol}>₹</div>
                        <div className={styles.scratchPrice}> 6499</div>
                    </div>

                </div>
                <div className={styles.secondConatiner}>
                    <div className={styles.bookNowContainer}>
                        <div className={styles.greenBorder}>Flat <b>₹100</b> off on your first order</div>
                        <div className={styles.bookNowFormSection}>
                            <div className={styles.namelabelAndStar}>Name
                                <div className={styles.requiredStar}>*</div></div>
                            <input className={styles.nameInputField} type="text" placeholder="Enter our full name" />
                            <div className={styles.namelabelAndStar}>Phone Number
                                <div className={styles.requiredStar}>*</div></div>
                            <input className={styles.nameInputField} type="text" placeholder="Enter your phone number" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default FullBody
