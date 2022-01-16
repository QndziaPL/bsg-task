import React, { useContext, useEffect, useState } from "react"
import { post } from "../../api/utils"
import SingleVideoImage from "./components/SingleVideoImage/SingleVideoImage"
import { MainScreenStyled, VideoListContainer } from "./MainScreen.styled"
import { useNavigate } from "react-router-dom"
import { SinglePageContainer } from "../../App.styled"
import { Col, Divider, Row } from "antd"
import { UserContext } from "../../context/UserContext"

export interface EntityImage {
  Height: number
  Id: number
  ImageTypeCode: string
  MediaId: number
  PlatformCode: string
  Url: string
  Width: number
}

export interface Entity {
  AvailableFrom: string
  Description: string
  Duration: number
  Guid: string
  Id: number
  Images: EntityImage[]
  IsTrialContentAvailable: boolean
  MediaAgeRestrictionImageUrl: string
  MediaAgeRestrictionValueMin: number
  MediaTypeCode: string
  MediaTypeDisplayName: string
  Products: { Id: number }[]
  Title: string
  Year: number
}

const MainScreen = () => {
  const [entities, setEntities] = useState<Entity[]>([])
  const { refreshUserData } = useContext(UserContext)
  const navigate = useNavigate()
  useEffect(() => {
    refreshUserData()
    fetchItems().then((res) => setEntities(res.Entities))
  }, [])

  const fetchItems = () =>
    post(`Media/GetMediaList`, {
      MediaListId: 3,
      IncludeCategories: false,
      IncludeImages: true,
      IncludeMedia: false,
      PageNumber: 1,
      PageSize: 15,
    })

  const handleMoveToVideo = (id: number) => {
    navigate(`/video/${id}`)
  }

  return (
    <SinglePageContainer>
      <MainScreenStyled>
        <VideoListContainer>
          <h5
            style={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: "1.5em",
              marginBottom: 0,
            }}
          >
            List of videos
          </h5>
          <Divider />
          <Row justify={"center"}>
            {entities?.map((entity) => (
              <Col xs={24} lg={12}>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <SingleVideoImage
                    key={entity.Id}
                    handleMoveToVideo={handleMoveToVideo}
                    entity={entity}
                  />
                </div>
              </Col>
            ))}
          </Row>
        </VideoListContainer>
      </MainScreenStyled>
    </SinglePageContainer>
  )
}

export default MainScreen
