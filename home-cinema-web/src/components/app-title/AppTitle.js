import React from 'react';
import './AppTitle.css';

function AppTitle(props) {
    return (
        <div className="title-group">
            <h1 className="title">Cinema em casa!</h1>
            <p className="subtitle">Confira nossa programação e permaneça conectado para acompanhar as próximas sessões!</p>
        </div>
    );
}

export default AppTitle;