import {render, fireEvent} from ‘testing-library/react’
import Post from './post'

const testPost = {
      post_id: 0,
      user_id:0,
      user:  {
          id: 99,
          name: "test",
          user_name: "test",
          password: "test",
          profile_pic: "https://newprofilepic2.photo-cdn.net//assets/images/article/profile.jpg",
          online: false,
          gaming_now : false,
          level: 0,
          favorite_games: [],
          friends: []
        },
      likes :8,
      shares :3,
      game_id :2,
      game_name : null,
      game:   {
        id: 1,
        title: "test game name",
        developer:  "test dev",
        release_date: "test release date",
        thumbnail: "/src/imagens/imagensGames/pubgImage.jpg",
        description: "test game description",
        steam_profile: "",
        tags: ""
      },
      review :true,
      review_stars :3,
      title:"Test title ",
      date:"29/08/2032",
      imgPost:"",
      content:"This is a Test",
      comments:[]
}

describe('Post', ()=>{
  it('renderiza seu titulo correntamente', ( ) => {
    const {getByText, getByLabelText, getByTestId} = render(<Post/>);
    const content = getByTestId('post-content');
    
    expect(content).toHaveTextContent('Test title')
  })
})
