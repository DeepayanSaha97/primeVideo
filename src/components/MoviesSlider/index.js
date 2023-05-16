// Write your code here

import Slider from 'react-slick'
import MovieItem from '../MovieItem'

const MoviesSlider = props => {
  const {actionMovieDetails, comedyMovieDetails} = props

  const settings = {
    slidesToShow: 4,
    slidesToScroll: 1,
  }

  return (
    <>
      <h1 className="slider-label">Action Movies</h1>
      <Slider {...settings}>
        {actionMovieDetails.map(eachMovie => (
          <MovieItem key={eachMovie.id} movieDetails={eachMovie} />
        ))}
      </Slider>
      <h1 className="slider-label">Comedy Movies</h1>
      <Slider {...settings}>
        {comedyMovieDetails.map(eachMovie => (
          <MovieItem key={eachMovie.id} movieDetails={eachMovie} />
        ))}
      </Slider>
    </>
  )
}

export default MoviesSlider
