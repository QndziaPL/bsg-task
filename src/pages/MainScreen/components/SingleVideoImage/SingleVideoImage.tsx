import React, { VFC } from "react"
import { Entity } from "../../MainScreen"
import {
  PlayButton,
  PlayButtonContainer,
  SingleVideoImageStyled,
  VideoCoverImage,
  VideoTitle,
} from "./SingleVideoImage.styled"

interface Props {
  entity: Entity
  handleMoveToVideo: (id: number) => void
}

const placeholder =
  "https://blog.goldensubmarine.com/wp-content/uploads/nag%C5%82owek-gory.jpg"

const SingleVideoImage: VFC<Props> = ({ handleMoveToVideo, entity }) => {
  const coverImage =
    entity?.Images?.find(({ ImageTypeCode }) => ImageTypeCode === "FRAME")
      ?.Url ?? placeholder

  return (
    <SingleVideoImageStyled onClick={() => handleMoveToVideo(entity.Id)}>
      <VideoTitle>{entity.Title}</VideoTitle>
      <PlayButtonContainer>
        <PlayButton />
      </PlayButtonContainer>
      <VideoCoverImage src={coverImage} />
    </SingleVideoImageStyled>
  )
}

export default SingleVideoImage
