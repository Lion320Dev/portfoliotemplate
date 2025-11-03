import { useEffect, useRef, useState } from "react";

export default function IntroVideo() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [show, setShow] = useState(true); // Preserved for UI logic
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Listen to fullscreen changes
  useEffect(() => {
    const handleFullscreenChange = () => {
      const fullscreenElement =
        document.fullscreenElement ||
        (
          document as Document & {
            webkitFullscreenElement?: Element;
            mozFullScreenElement?: Element;
            msFullscreenElement?: Element;
          }
        ).webkitFullscreenElement ||
        (
          document as Document & {
            webkitFullscreenElement?: Element;
            mozFullScreenElement?: Element;
            msFullscreenElement?: Element;
          }
        ).mozFullScreenElement ||
        (
          document as Document & {
            webkitFullscreenElement?: Element;
            mozFullScreenElement?: Element;
            msFullscreenElement?: Element;
          }
        ).msFullscreenElement;

      setIsFullscreen(fullscreenElement === videoRef.current);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    document.addEventListener("webkitfullscreenchange", handleFullscreenChange);
    document.addEventListener("mozfullscreenchange", handleFullscreenChange);
    document.addEventListener("MSFullscreenChange", handleFullscreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
      document.removeEventListener(
        "webkitfullscreenchange",
        handleFullscreenChange
      );
      document.removeEventListener(
        "mozfullscreenchange",
        handleFullscreenChange
      );
      document.removeEventListener(
        "MSFullscreenChange",
        handleFullscreenChange
      );
    };
  }, []);

  // Toggle play/pause
  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    video.removeEventListener("play", () => setIsPlaying(true));
    video.removeEventListener("pause", () => setIsPlaying(false));

    video.addEventListener("play", () => setIsPlaying(true));
    video.addEventListener("pause", () => setIsPlaying(false));

    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  };

  // Toggle mute
  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  // Toggle fullscreen
  const toggleFullscreen = () => {
    const video = videoRef.current;
    if (!video) return;

    if (document.fullscreenElement) {
      document.exitFullscreen().catch((err) => {
        console.error("Exit fullscreen failed:", err);
      });
    } else {
      video.requestFullscreen?.().catch((err) => {
        console.error("Enter fullscreen failed:", err);
      });
    }
  };
  return (
    <>
      {show ? (
        <div className="intro-video-card-wrapper">
          <div className="background-overlay" />
          <div className="tmp-intro-video-card-wrapper position-right">
            <div className="tmp-video-inner">
              <div
                className={`tmp-video-progress-container ${
                  isPlaying ? "" : "playing"
                } `}
              >
                <video
                  className="tmp-video-element"
                  id="tmp-video-element"
                  poster="/assets/images/video/01.webp"
                  ref={videoRef}
                  muted
                  style={{ objectFit: isFullscreen ? "contain" : "cover" }}
                  autoPlay
                >
                  <source src="/assets/images/video/intro.mp4" />
                </video>

                <div className="tmp-video-controls">
                  <div
                    className="play-button"
                    title="Play/Pause"
                    onClick={togglePlay}
                  >
                    <i
                      className={`fa-solid ${
                        isPlaying ? "fa-pause" : "fa-play"
                      }`}
                    />
                  </div>

                  <div
                    className="sound-button"
                    title="Mute/Unmute"
                    onClick={toggleMute}
                  >
                    <i
                      className={`fa-solid ${
                        isMuted ? "fa-volume-xmark" : "fa-volume-high"
                      }`}
                    />
                  </div>

                  <div
                    className="expand-icon"
                    title="Fullscreen"
                    onClick={toggleFullscreen}
                  >
                    <i className="fa-solid fa-up-right-and-down-left-from-center" />
                  </div>
                </div>

                <div className="tmp-iv-top-wrapper">
                  <div className="tmp-iv-progress-bar">
                    <span className="buffer-bar" style={{ width: "100%" }} />
                    <span className="time-bar" style={{ width: "100%" }} />
                  </div>
                </div>
              </div>

              <div className="card-greeting">
                <p>Hello</p>
              </div>
            </div>

            <div className="tmp-iv-close-button" onClick={() => setShow(false)}>
              <audio id="tmp-close-button-audio" preload="auto">
                <source
                  src="/assets/images/video/intro.mp3"
                  type="audio/mpeg"
                />
                <source src="/assets/images/video/intro.mp3" type="audio/ogg" />
              </audio>
              <i className="fa-solid fa-xmark" />
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
