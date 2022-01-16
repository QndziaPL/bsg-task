import React, { useContext, useEffect, useState } from "react"
import VideoJS from "../../videoJs/VideoJS"
import { post } from "../../api/utils"
import { useNavigate, useParams } from "react-router-dom"
import { UserContext } from "../../context/UserContext"
import { Col, Row } from "antd"
import { SinglePageContainer } from "../../App.styled"
import { CaretLeftFilled } from "@ant-design/icons"
import { privateRoutes } from "../../routes/routes"
import { BackButton, DescriptionStyled } from "./PlayerScreen.styled"

export interface SingleVideo {
  MediaId: number
  Title: string
  Description: string
  MediaTypeCode: string
  MediaTypeDisplayName: string
  StreamId: number
  Provider: string
  ContentUrl: string
}

const PlayerScreen = () => {
  const [video, setVideo] = useState<SingleVideo>()
  const [error, setError] = useState<string | null>(null)
  const { Id: userId } = useContext(UserContext)
  const { id } = useParams()
  const navigate = useNavigate()
  const fetchSingleVideo = () => {
    post(`Media/GetMediaPlayInfo`, {
      MediaId: Number(id),
      StreamType: userId > 0 ? "MAIN" : "TRIAL",
    })
      .then(setVideo)
      .catch((err) => setError(err.response.data.Message))
  }

  useEffect(() => {
    fetchSingleVideo()
  }, [])

  const playerRef = React.useRef(null)

  const videoJsOptions = {
    autoplay: true,
    controls: true,
    responsive: true,
    fluid: true,
    sources: [
      {
        src: video?.ContentUrl,
        type: "application/x-mpegURL",
      },
    ],
  }

  const handlePlayerReady = (player) => {
    playerRef.current = player

    player.on("waiting", () => {
      console.log("player is waiting")
    })

    player.on("dispose", () => {
      console.log("player will dispose")
    })
  }

  return (
    <SinglePageContainer
      extra={
        <BackButton onClick={() => navigate(privateRoutes.MAIN_SCREEN)}>
          <CaretLeftFilled />
          <span>Back to list</span>
        </BackButton>
      }
    >
      <Row>
        <Col xs={2} md={5} />
        <Col xs={20} md={14}>
          {video && (
            <>
              <h2>{video.Title}</h2>
              <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
              <DescriptionStyled>{video.Description}</DescriptionStyled>
            </>
          )}
          {error && (
            <h2 style={{ color: "red", textAlign: "center" }}>{error}</h2>
          )}
        </Col>
        <Col xs={2} md={5} />
      </Row>
    </SinglePageContainer>
  )
}

export default PlayerScreen
