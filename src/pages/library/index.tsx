import { FC } from 'react';
import {AnyPageWrapper} from "../../templates/anyPageWrapper";
import styles from "./styles.module.scss";
import {Text} from "../../atoms/text";
import {strings} from "../../i18n/i18n.ts";
import {SimpleCardSmall} from "../../components/cards/simpleCardSmall";
import ArrowButton from "../../atoms/arrowButton";
import {LINKS} from "../../constants/strings.ts";

export const LibraryPage: FC = () => {
    return (
        <AnyPageWrapper>
            <Text text={strings.libraryPage.talksHeader} size={"h1"} color={"primary"}></Text>

            <div className={styles.contentContainer}>
                {Object.values(strings.libraryPage.talks).map(({title, source, url}) => (
                    <SimpleCardSmall
                        label={source}
                        title={title}
                        onTitleClick={() => window.open(url)}
                    ></SimpleCardSmall>
                ))}
            </div>

            <div className={styles.signUpContainer}>
                <ArrowButton text={strings.header.signUp} onClick={() => window.open(LINKS.CALENDLY)}/>
            </div>

            <div className={styles.articlesHeader}>
                <Text text={strings.libraryPage.articlesHeader} size={"h1"} color={"primary"}></Text>
            </div>

            <div className={styles.contentContainer}>
                {Object.values(strings.libraryPage.articles).map(({title, source, url}) => (
                    <SimpleCardSmall
                        label={source}
                        title={title}
                        onTitleClick={() => window.open(url)}
                    ></SimpleCardSmall>
                ))}
            </div>

            <div className={styles.signUpContainer}>
                <ArrowButton text={strings.header.signUp} onClick={() => window.open(LINKS.CALENDLY)}/>
            </div>
        </AnyPageWrapper>

    );
};