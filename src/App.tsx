import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import { ROUTES } from './constants/routes';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {Object.values(ROUTES).map(({ path, component: Component }) => (
                    <Route key={path} path={path} element={<Component />} />
                ))}
            </Routes>
        </BrowserRouter>
    );
}

export default App;