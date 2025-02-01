import { FC } from 'react';
import {AnyPageWrapper} from "../../templates/anyPageWrapper";
import {Text} from "../../atoms/text";
import styles from './styles.module.scss';
import {AboutCard} from "../../components/cards/aboutCard";
import {DualTextColumnsCard} from "../../components/cards/dualTextColumnsCard";
import {strings} from "../../i18n/i18n.ts";
import { LINKS } from '../../constants/strings.ts'
import ArrowButton from "../../atoms/arrowButton";
import {presets} from "../../constants/presets.ts";

export const AboutPage: FC = () => {

    return (
        <AnyPageWrapper>
            <div className={styles.mainContainer}>
                <div className={styles.mainText}>
                    <Text text={strings.aboutPage.name} size={"h1"} color={"secondary"}></Text>
                    <Text text={strings.aboutPage.job} size={"h1"} color={"primary"}></Text>
                </div>

                <AboutCard
                    title={strings.aboutPage.aboutTitle}
                    imageUrl={LINKS.AVATAR}
                    description={strings.aboutPage.aboutDescription}
                    facts={strings.content.facts}>
                </AboutCard>

                <div className={styles.requests}>
                    <div className={styles.requestsTitle}>
                        <Text text={strings.aboutPage.requestsTitle} size={"h1"} color={"primary"}></Text>
                    </div>

                    <div className={styles.signUp}>
                        <ArrowButton {...presets.calendlySignUp} />
                    </div>

                    <div className={styles.requestsCards}>
                        {Object.values(strings.content.requests).map(({problem, resolution}) => (
                            <DualTextColumnsCard
                                leftGroup={{label: strings.aboutPage.problem, title: problem}}
                                rightGroup={{label: strings.aboutPage.resolution, title: resolution}}
                            ></DualTextColumnsCard>
                        ))}
                    </div>
                </div>

            </div>
        </AnyPageWrapper>
    );
};