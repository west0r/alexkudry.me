import { useState } from 'react';
import './App.scss'
import {DualTextColumnsCard} from "./components/cards/dualTextColumnsCard";
import {InteractiveText} from "./atoms/interactiveText";
import {DatedCard} from "./components/cards/datedCard";
import {SimpleCardBig} from "./components/cards/simpleCardBig";
import {SimpleCardSmall} from "./components/cards/simpleCardSmall";
import {Footer} from "./components/global/footer";
import {Header} from "./components/global/header";

const footerLinks = [
    {
        label: 'Telegram',
        title: '@westor',
        href: 'https://t.me/westor',
    },
    {
        label: 'Telegram канал',
        title: "Workin' me softly",
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
                    text: "Записаться на консультацию",
                    onClick: () => {}
                }}
            >
                    <InteractiveText text="Алексей Кудрявцев" onClick={() => {}} />
                    <InteractiveText text="Навыки и образование" onClick={() => {}} />
                    <InteractiveText text="Цены" onClick={() => {}} />
                    <InteractiveText text="Статьи и выступления" onClick={() => {}} />
            </Header>

            <p>&nbsp;</p>
            <DualTextColumnsCard
                leftGroup={{
                    label: "Проблема",
                    title: "Неопределенность или тупик на карьерном пути. Непонятно куда, как и зачем развиваться"
                }}
                rightGroup={{
                    label: "Решение",
                    title: "Построим рабочий план развития исходя их твоих целей и ценностей"
                }}
            />
            <p>&nbsp;</p>
            <DualTextColumnsCard
                leftGroup={{
                    label: "Проблема",
                    title: "Неуверенность в своей профессиональности, синдром самозванца, синдром отличника, выгорание"
                }}
                rightGroup={{
                    label: "Решение",
                    title: "Будем работать с деструктивными паттернами без осуждения"
                }}
            />
            <p>&nbsp;</p>
            <DatedCard
                date="2011 - 2015 (~1500 часов)"
                title="Университет Синергия"
                subtitle="Менеджмент в социокультурной сфере — диплом специалиста"
                onSubtitleClick={() => window.open('https://mospolytech.ru')}
            />
            <p>&nbsp;</p>
            <DatedCard
                date="03.2024 (8 часов)"
                title="Kanban University"
                subtitle="Kanban system improvement — сертификат"
                onSubtitleClick={() => window.open('https://mospolytech.ru')}
            />
            <p>&nbsp;</p>
            <SimpleCardBig
                label="Методы КПТ"
                title="Использую элементы психотерапии для работы с негативными убеждениями, когнитивными ошибками и самосаботажем"
            />
            <p>&nbsp;</p>
            <SimpleCardBig
                label="Тайм-менеджмент"
                title="Применяю инструменты целеполагания и управления временем, чтобы управлять рабочей нагрузкой и повысить продуктивность"
            />
            <p>&nbsp;</p>
            <SimpleCardSmall
                label="Podlodka iOS Crew"
                title="Публичное собеседование / Алексей Кудрявцев"/>
            <p>&nbsp;</p>
            <SimpleCardSmall
                label="Mobius"
                title="Интервью 'Поменять профессию и начать с 0': Александр Фоминский, Львова Елена, Алексей Кудрявцев"/>
            <p>&nbsp;</p>

            <Footer links={footerLinks}/>
        </>
    )
}

export default App
