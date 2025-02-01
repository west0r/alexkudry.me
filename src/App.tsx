import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import { ROUTES } from './constants/routes';
import { RedirectHandler } from './RedirectHandler';
import NotFound from './NotFound';

function App() {
    return (
        <BrowserRouter>
            <RedirectHandler />
            <Routes>
                {Object.values(ROUTES).map(({ path, component: Component }) => (
                    <Route key={path} path={path} element={<Component />} />
                ))}
                <Route path="/404" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;