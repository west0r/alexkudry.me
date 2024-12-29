import { useState } from 'react';
import './App.scss'
import { DualTextColumnsCard } from "./components/cards/dualTextColumnsCard";
import { InteractiveText } from "./atoms/interactiveText";
import { DatedCard } from "./components/cards/datedCard";
import { SimpleCardBig } from "./components/cards/simpleCardBig";
import { SimpleCardSmall } from "./components/cards/simpleCardSmall";
import { Footer } from "./components/global/footer";
import { Header } from "./components/global/header";
import { strings } from './i18n/i18n';

const footerLinks = [
    {
        label: strings.footer.telegram.label,
        title: '@westor',
        href: 'https://t.me/westor',
    },
    {
        label: strings.footer.telegram.label,
        title: strings.footer.telegram.channel,
        href: 'https://t.me/workinsoftly',
    },
];

function App() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <Header
                isMenuOpen={isMenuOpen}
                onMenuToggle={() => setIsMenuOpen(!isMenuOpen)}
                signUpButtonProps={{
                    text: strings.header.signUp,
                    onClick: () => {}
                }}
            >
                <InteractiveText text={strings.header.menu.about} onClick={() => {}} />
                <InteractiveText text={strings.header.menu.skills} onClick={() => {}} />
                <InteractiveText text={strings.header.menu.pricing} onClick={() => {}} />
                <InteractiveText text={strings.header.menu.articles} onClick={() => {}} />
            </Header>

            {/*<p>&nbsp;</p>*/}
            {/*<DualTextColumnsCard*/}
            {/*    leftGroup={{*/}
            {/*        label: "Проблема",*/}
            {/*        title: strings.problems.career.problem*/}
            {/*    }}*/}
            {/*    rightGroup={{*/}
            {/*        label: "Решение",*/}
            {/*        title: strings.problems.career.solution*/}
            {/*    }}*/}
            {/*/>*/}
            {/*<p>&nbsp;</p>*/}
            {/*<DualTextColumnsCard*/}
            {/*    leftGroup={{*/}
            {/*        label: "Проблема",*/}
            {/*        title: strings.problems.confidence.problem*/}
            {/*    }}*/}
            {/*    rightGroup={{*/}
            {/*        label: "Решение",*/}
            {/*        title: strings.problems.confidence.solution*/}
            {/*    }}*/}
            {/*/>*/}
            {/*<p>&nbsp;</p>*/}
            {/*<DatedCard*/}
            {/*    date={strings.education.synergy.duration}*/}
            {/*    title={strings.education.synergy.title}*/}
            {/*    subtitle={strings.education.synergy.degree}*/}
            {/*    onSubtitleClick={() => window.open('https://mospolytech.ru')}*/}
            {/*/>*/}
            {/*<p>&nbsp;</p>*/}
            {/*<DatedCard*/}
            {/*    date={strings.education.kanban.duration}*/}
            {/*    title={strings.education.kanban.title}*/}
            {/*    subtitle={strings.education.kanban.certificate}*/}
            {/*    onSubtitleClick={() => window.open('https://mospolytech.ru')}*/}
            {/*/>*/}
            {/*<p>&nbsp;</p>*/}
            {/*<SimpleCardBig*/}
            {/*    label={strings.skills.cbt.label}*/}
            {/*    title={strings.skills.cbt.description}*/}
            {/*/>*/}
            {/*<p>&nbsp;</p>*/}
            {/*<SimpleCardBig*/}
            {/*    label={strings.skills.timeManagement.label}*/}
            {/*    title={strings.skills.timeManagement.description}*/}
            {/*/>*/}
            {/*<p>&nbsp;</p>*/}
            {/*<SimpleCardSmall*/}
            {/*    label={strings.articles.podlodka.label}*/}
            {/*    title={strings.articles.podlodka.title}*/}
            {/*/>*/}
            {/*<p>&nbsp;</p>*/}
            {/*<SimpleCardSmall*/}
            {/*    label={strings.articles.mobius.label}*/}
            {/*    title={strings.articles.mobius.title}*/}
            {/*/>*/}
            {/*<p>&nbsp;</p>*/}

            <Footer links={footerLinks}/>
        </>
    )
}

export default App