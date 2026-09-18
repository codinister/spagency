import YouTube, { type YouTubeProps } from 'react-youtube';
import getYouTubeID from 'get-youtube-id';

type YouTubeBoxProps = {
  url: string;
};

const Youtubebox = ({ url }: YouTubeBoxProps): React.JSX.Element | null => {
  const videoId = getYouTubeID(url);

  const onPlayerReady: YouTubeProps['onReady'] = (event) => {
    event.target.playVideo();
    event.target.mute();
  };

  const onPlayerEnd: YouTubeProps['onEnd'] = (event) => {
    event.target.playVideo();
  };

  const opts: YouTubeProps['opts'] = {
    height: '310',
    width: '100%',
    playerVars: {
      autoplay: 0,
      controls: 1,
      disablekb: 1,
      fs: 0,
      rel: 0,
      loop: 1,
      start: 1,
    },
  };

  if (!url || !videoId) {
    return null;
  }

  return (
    <div className="youtubebox">
      <YouTube
        videoId={videoId}
        opts={opts}
        onReady={onPlayerReady}
        onEnd={onPlayerEnd}
      />
    </div>
  );
};

export default Youtubebox;