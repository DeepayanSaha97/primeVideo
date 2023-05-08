// Write your code here

const MovieItem = args => {
  const {movieDetails, onPlayMovie} = args
  const {id, thumbnailUrl} = movieDetails

  const onClickThumbnail = () => {
    onPlayMovie(id)
  }

  return (
    <li className="movie-item">
      <button className="movie-btn" type="button" onClick={onClickThumbnail}>
        <img src={thumbnailUrl} alt="thumbnail" />
      </button>
    </li>
  )
}

export default MovieItem
