import React from 'react'
import PropTypes from 'prop-types'

import { ButtonWithYear } from './ButtonWithYear'

export class Page extends React.Component {
	onBtnClick = e => {
		const year = Number(e.currentTarget.textContent)
		this.props.getPhotos(year)
	}

	render() {
		const { year, photos, isFetching, name } = this.props
		const years = [2019, 2018, 2017, 2016, 2015, 2014]

		return (
			<div className="ib page">
				<p>
					<div className="buttonsPanel">
						<div className="yearsPanel">
							{years.map(item => (
								<ButtonWithYear
									key={item}
									year={item}
									onBtnClick={this.onBtnClick}
								/>
							))}
						</div>
						{!Boolean(name) ? (
							<button className="btn" onClick={this.props.handleLogin}>
								Войти
							</button>
						) : null}
					</div>
				</p>
				<h3>{year} год</h3>
				{isFetching ? (
					<p>Загрузка...</p>
				) : (
					<p>У тебя {Number(photos.length)} фото</p>
				)}
				<div className="images">
					{photos.map(photo => (
						<img src={photo.sizes[0].url} alt="Фото" />
					))}
				</div>
			</div>
		)
	}
}
Page.propTypes = {
	year: PropTypes.number.isRequired,
	photos: PropTypes.array.isRequired,
	getPhotos: PropTypes.func.isRequired,
	isFetching: PropTypes.bool.isRequired,
}
