import React from 'react';
import './SessionCard.css';

const daysOfWeek = [
    'Domingo',
    'Segunda-feira',
    'Terça-feira',
    'Quarta-feira',
    'Quinta-feira',
    'Sexta-feira',
    'Sábado'
];

const months = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro'
];

function SessionMovieInfo(props) {
    return (
        <div className="session-movie-info">
            <h2 className="movie-title">{props.movie.title}</h2>
            <p className="sinopsis">{props.movie.sinopsis}</p>
        </div>
    );
}

export class SessionDate extends React.Component {

    render() {
        return (
            <div className="session-date">
                <span>{this.getFormattedDate(this.props.date)}</span>
            </div>
        );
    }

    getFormattedDate(date) {
        return `
        ${this.getFormattedDay(date.getDay())},
        ${date.getDate()}
        de
        ${this.getFormattedMonth(date.getMonth())}
        de
        ${date.getFullYear()}
        `;
    }

    getFormattedDay(dayOfWeek) {
        return daysOfWeek[dayOfWeek];
    }

    getFormattedMonth(monthIndex) {
        return months[monthIndex];
    }

}

class SessionCard extends React.Component {
    render() {
        return (
            <div className="session-card">
                <SessionDate date={this.props.session.date}/>
                <SessionMovieInfo movie={this.props.session.movie}/>
            </div>
        );
    }
}

export default SessionCard;