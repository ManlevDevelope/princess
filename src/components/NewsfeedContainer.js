import CommentContainer from './CommentContainer';
import NewsfeedComponent from './NewsfeedComponent';
import { Container } from './styled';
import Layout from '../layouts';
import { useEffect } from 'react';

const NewsfeedContainer = () => {
  const data = {
    id: 1,
    name: 'Lorem',
    viewCnt: 200,
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esselibero Lorem ipsum dolor sit amet consectetur adipisicing elit.Esse libero',
    like: 200,
    comments: [
      {
        id: 0,
        newsfeed_id: 1,
        bundle_id: 0,
        bundle_order: null,
        thumb: '',
        name: 'sangschicom',
        reply:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, odit perspiciatis est atque pariatur accusantium esse dolorem omnis tenetur quo quibusdam veritatis adipisci error,',
      },
      {
        id: 2,
        newsfeed_id: 1,
        bundle_id: 1,
        bundle_order: null,
        thumb: '',
        name: '무무',
        reply: '아무무가 아무무',
      },
      {
        id: 3, // auto increment
        newsfeed_id: 1, // 뉴스피드 아이디
        bundle_id: 0, // 대댓글 그룹
        bundle_order: 0, // 대댓글 시퀀스
        thumb: '',
        name: '미나미노',
        reply: '하위열',
      },
      {
        id: 4,
        newsfeed_id: 1,
        bundle_id: 0,
        bundle_order: 1,
        thumb: '',
        name: 'sangschicom',
        reply: 'ㅇㅇ',
      },
    ],
  };
  useEffect(() => {
    // id한개로 comments, Newsfeed 한개
  }, []);
  return (
    <>
      <Container>
        <NewsfeedComponent
          data={{ ...data, commentCnt: data.comments.length }}
          wholeFeed={true}
        />
      </Container>
      <CommentContainer data={data.comments} />
    </>
  );
};

export default NewsfeedContainer;
