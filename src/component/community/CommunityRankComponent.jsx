import { useEffect, useState } from "react";
import {
  Block,
  ButtonFlex,
  ChoiceButton,
  HeadLine,
  HeadText,
  Heading,
  PostRankCategory,
  PostRankContent,
  PostRankFrame,
  PostRankLink,
  PostRankList,
  PostRankListItem,
  PostUpTime,
  PostUpTimeList,
  RoundedMd,
  Swiper,
  SwiperSlide,
  SwiperWrapper,
} from "../../style/CommunityPostStyle";
import CommunityAxiosApi from "../../axios/CommunityAxios";
import { useNavigate } from "react-router-dom";

const CommunityRankComponent = ({ categoryName }) => {
  const [ranking, setRanking] = useState([]);
  const [selectedRanking, setSelectedRanking] = useState("realtime");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRanking = async () => {
      const response = await CommunityAxiosApi.getRanking(selectedRanking);
      console.log(response.data);
      setRanking(response.data);
    };

    fetchRanking();
  }, [selectedRanking]);
  return (
    <>
      <Heading>
        <HeadText>{categoryName} 게시판</HeadText>
      </Heading>
      <HeadLine />
      <Block>
        <ButtonFlex>
          <ChoiceButton
            selected={selectedRanking === "realtime"}
            onClick={() => setSelectedRanking("realtime")}
          >
            실시간
          </ChoiceButton>
          <ChoiceButton
            selected={selectedRanking === "weekly"}
            onClick={() => setSelectedRanking("weekly")}
          >
            주간
          </ChoiceButton>
          <ChoiceButton
            selected={selectedRanking === "monthly"}
            onClick={() => setSelectedRanking("monthly")}
          >
            월간
          </ChoiceButton>
        </ButtonFlex>
        <PostUpTime>
          <PostUpTimeList>
            <Swiper>
              <SwiperWrapper>
                {ranking.map((post, index) => (
                  <SwiperSlide key={index}>
                    <RoundedMd>
                      <PostRankList>
                        <PostRankListItem
                          onClick={() =>
                            navigate(`/community/detail/${post.communityId}`)
                          }
                        >
                          <PostRankLink>{index + 1}</PostRankLink>
                          <PostRankCategory>
                            {post.categoryName} 게시판
                          </PostRankCategory>
                          <PostRankContent>
                            <PostRankFrame>{post.title}</PostRankFrame>
                          </PostRankContent>
                        </PostRankListItem>
                      </PostRankList>
                    </RoundedMd>
                  </SwiperSlide>
                ))}
              </SwiperWrapper>
            </Swiper>
          </PostUpTimeList>
        </PostUpTime>
      </Block>
    </>
  );
};
export default CommunityRankComponent;
