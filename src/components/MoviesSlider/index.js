// Write your code here
import ReactPlayer from 'react-player'
import Slider from 'react-slick'
import Popup from 'reactjs-popup'
import MovieItem from '../MovieItem'

const MoviesSlider = props => {
  const {moviesList, actionMovieDetails, comedyMovieDetails} = props

  const settings = {
    slidesToShow: 4,
    slidesToScroll: 1,
  }

  const playingMovie = id => {
    moviesList.map(each =>
      each.id === id ? (<Popup
    trigger={<button className="button"> Open Modal </button>}
    modal
    nested
  >
    {close => (
      <div className="modal"></div>) : null,
    )
  }

  return (
    <div className="slider-con">
      <Slider {...settings}>
        {actionMovieDetails.map(eachMovie => (
          <MovieItem
            key={eachMovie.id}
            movieDetails={eachMovie}
            onPlayMovie={playingMovie}
          />
        ))}
        {comedyMovieDetails.map(eachMovie => (
          <MovieItem
            key={eachMovie.id}
            movieDetails={eachMovie}
            onPlayMovie={playingMovie}
          />
        ))}
      </Slider>
    </div>
  )
}

export default MoviesSlider
