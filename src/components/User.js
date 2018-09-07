import React from 'react'
import PropTypes from 'prop-types'

export class User extends React.Component {
	render() {
		const { name, error, isFetching } = this.props
		if (error) {
			return <p>Во время запроса проищошла ошибка, обновите страницу</p>
		}
		if (isFetching) {
			return <p>Загружаю...</p>
		}
		if (name) {
			return (
				<div>
					<p>Привет, {name}</p>
				</div>
			)
		} else {
			return (
				<button className="btn" onClick={this.props.handleLogin}>
					Войти
				</button>
			)
		}
	}
}

User.propTypes = {
	name: PropTypes.string.isRequired,
	isFetching: PropTypes.bool.isRequired,
	error: PropTypes.string.isRequired,
	handleLogin: PropTypes.func.isRequired,
}
