import {FC} from 'react';
import {AnyPageWrapper} from "../../templates/anyPageWrapper";
import {Text} from "../../atoms/text";
import styles from "./styles.module.scss";
import {strings} from "../../i18n/i18n.ts";
import {PriceCard} from "../../components/cards/pricesCard";
import ArrowButton from "../../atoms/arrowButton";
import {presets} from "../../constants/presets.ts";

export const PricingPage: FC = () => {
    return (
        <AnyPageWrapper>
            <div className={styles.mainContainer}>
                <div className={styles.titleContainer}>
                    <Text text={strings.pricingPage.title} size={"h1"} color={"primary"}></Text>
                </div>

                <div className={styles.firstContainer}>

                    <div className={styles.companyContainer}>
                        <Text text={strings.pricingPage.companyTitle} size={"h1"} color={"secondary"}></Text>
                        <div className={styles.priceCardsContainer}>
                            <PriceCard prices={strings.pricingPage.companyPrices}></PriceCard>
                        </div>
                    </div>
                </div>

                <div className={styles.secondContainer}>
                    <Text text={strings.pricingPage.individualTitle} size={"h1"} color={"secondary"}></Text>

                    <div className={styles.priceCardsContainer}>
                        <PriceCard
                            prices={ strings.pricingPage.individualPrices }
                            children={<ArrowButton {...presets.calendlySignUp} />}
                        ></PriceCard>
                    </div>
                </div>
            </div>

        </AnyPageWrapper>
    );
};