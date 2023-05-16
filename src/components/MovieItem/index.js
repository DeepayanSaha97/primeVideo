// Write your code here
import Popup from 'reactjs-popup'
import {IoMdClose} from 'react-icons/io'
import ReactPlayer from 'react-player'
import './index.css'

const MovieItem = args => {
  const {movieDetails} = args
  const {thumbnailUrl, videoUrl} = movieDetails

  const onPlayMovie = () => (
    <div className="popup-container">
      <Popup
        modal
        trigger={<img src={thumbnailUrl} alt="thumbnail" />}
        className="popup-content"
      >
        {close => (
          <>
            <button
              className="close-icon-con"
              data-testid="closeButton"
              onClick={() => close()}
            >
              <IoMdClose />
            </button>
            <ReactPlayer url={videoUrl} />
          </>
        )}
      </Popup>
    </div>
  )

  return (
    <li className="movie-item">
      <button className="movie-btn" type="button" onClick={onPlayMovie}>
        <img src={thumbnailUrl} alt="thumbnail" />
      </button>
    </li>
  )
}

export default MovieItem
