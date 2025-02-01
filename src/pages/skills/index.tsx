import {FC} from 'react';
import {AnyPageWrapper} from "../../templates/anyPageWrapper";
import {strings} from "../../i18n/i18n.ts";
import styles from './styles.module.scss';
import ArrowButton from "../../atoms/arrowButton";
import {MasonryLayoutWrapper} from "../../templates/masonryLayoutWrapper";
import {DatedCard} from "../../components/cards/datedCard";
import {Text} from "../../atoms/text";
import {presets} from "../../constants/presets.ts";
import {SimpleCardBig} from "../../components/cards/simpleCardBig";

export const SkillsPage: FC = () => {

    return (
        <AnyPageWrapper>
            <div className={styles.mainContainer}>

                <MasonryLayoutWrapper
                    desktopColumnsCount={2}
                    header={<Text text={strings.skillsPage.skillsHeader} size={"h1"} color={"primary"}></Text>}
                    footer={<ArrowButton {...presets.calendlySignUp} />}
                >
                    {Object.values(strings.content.skills).map(({title, description}) => (
                        <SimpleCardBig label={title} title={description}></SimpleCardBig>
                    ))}
                </MasonryLayoutWrapper>

                <MasonryLayoutWrapper
                    desktopColumnsCount={2}
                    header={<Text text={strings.skillsPage.educationHeader} size={"h1"} color={"primary"}></Text>}
                >
                    {Object.values(strings.content.educations).map(({school, name, date, url}) => (
                        <DatedCard
                            date={date}
                            title={school}
                            subtitle={name}
                            onSubtitleClick={() => window.open(url)}
                        ></DatedCard>
                    ))}
                </MasonryLayoutWrapper>

                <MasonryLayoutWrapper
                    desktopColumnsCount={3}
                    header={<Text text={strings.skillsPage.coursesHeader} size={"h1"} color={"secondary"}></Text>}
                    footer={<ArrowButton {...presets.calendlySignUp} />}
                >
                    {Object.values(strings.content.courses).map(({school, name, date, url}) => (
                        <DatedCard
                            date={date}
                            title={school}
                            subtitle={name}
                            onSubtitleClick={() => window.open(url)}
                        ></DatedCard>
                    ))}
                </MasonryLayoutWrapper>
            </div>
        </AnyPageWrapper>
    );
};