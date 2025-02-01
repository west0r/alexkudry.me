import { FC } from 'react';
import {AnyPageWrapper} from "../../templates/anyPageWrapper";
import styles from "./styles.module.scss";
import {Text} from "../../atoms/text";
import {strings} from "../../i18n/i18n.ts";
import {SimpleCardSmall} from "../../components/cards/simpleCardSmall";
import ArrowButton from "../../atoms/arrowButton";
import {MasonryLayoutWrapper} from "../../templates/masonryLayoutWrapper";
import {presets} from "../../constants/presets.ts";

export const LibraryPage: FC = () => {

    return (
        <AnyPageWrapper>
            <div className={styles.mainContainer}>
                <MasonryLayoutWrapper
                    desktopColumnsCount={3}
                    header={<Text text={strings.libraryPage.talksHeader} size={"h1"} color={"primary"}></Text>}
                    footer={<ArrowButton {...presets.calendlySignUp} />}
                >
                    {Object.values(strings.libraryPage.talks).map(({title, source, url}) => (
                        <SimpleCardSmall
                            label={source}
                            title={title}
                            onTitleClick={() => window.open(url)}
                        ></SimpleCardSmall>
                    ))}
                </MasonryLayoutWrapper>

                <MasonryLayoutWrapper
                    desktopColumnsCount={3}
                    header={<Text text={strings.libraryPage.articlesHeader} size={"h1"} color={"primary"}></Text>}
                    footer={<ArrowButton {...presets.calendlySignUp} />}
                >
                    {Object.values(strings.libraryPage.articles).map(({title, source, url}) => (
                        <SimpleCardSmall
                            label={source}
                            title={title}
                            onTitleClick={() => window.open(url)}
                        ></SimpleCardSmall>
                    ))}
                </MasonryLayoutWrapper>
            </div>
        </AnyPageWrapper>

    );
};