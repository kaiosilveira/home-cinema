import React from 'react';
import AppTitle from './app-title/AppTitle';
import SessionCard from './session-card/SessionCard';
import './App.css';

const sessions = [
    {
        id: 1,
        date:  new Date(2019, 1, 3),
        movie: {
            title: 'Fragmentado',
            sinopsis: 'Kevin possui 23 personalidades distintas e consegue alterná-las quimicamente em seu organismo apenas com a força do pensamento. Um dia, ele sequestra três adolescentes que encontra em um estacionamento. Vivendo em cativeiro, elas passam a conhecer as diferentes facetas de Kevin e precisam encontrar algum meio de escapar.'
        }
    },
    {
        id: 2,
        date:  new Date(),
        movie: {
            title: 'O Espetacular Homem-Aranha',
            sinopsis: 'Peter Parker está tentando saber mais sobre sua origem. Ele encontra uma pasta que pertenceu ao seu pai e quer descobrir por que seus pais desapareceram. Sua busca o leva a Oscorp e ao dr. Curt Connors, que tem como alterego o letal Lagarto.'
        }
    }
];

export default class App extends React.Component {

    render() {
        return (
            <section>
                <AppTitle/>

                <div>
                    <p>Próxima sessão:</p>
                    {this.renderNextSession(sessions)}
                </div>

                <div>
                    <p>Sessões anteriores:</p>
                    {this.renderPreviousSessions(sessions)}
                </div>

            </section>
        );
    }

    renderNextSession(sessions) {
        const session = sessions[sessions.length - 1];
        return (<SessionCard key={session.id} session={session}/>);
    }

    renderPreviousSessions(sessions) {
        return (sessions.slice(0, sessions.length - 1).map(session => {
            return (<SessionCard key={session.id} session={session}/>);
        }));
    }
}