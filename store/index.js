import Vuex from "vuex";

const createStore = () => {
  return new Vuex.Store({
    state: {
      blog_posts: [
        {
          id: 1,
          title: "Naruto Will Remain Number One Shonen Anime Of All Time",
          title_image:
            "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=700&q=80",
          post_images: [

          ],
          tag: "Branding and Brochure"
        },
        {
          id: 2,
          title: "Goku Solos MCU Avengers",
          title_image:
            "https://images.unsplash.com/photo-1569694212256-aa50b814bdc9?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=683&q=80",
          post_images: [],
          tag: "Branding and Brochure"
        },
        {
          id: 3,
          title: "Shindeiru And The Anime Wonder",
          title_image:
            "https://images.unsplash.com/photo-1569350080887-dd38c27caad0?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=675&q=80",
          post_images: [],
          tag: "Branding and Brochure"
        },
        {
          id: 4,
          title: "Virgin Rice Hit Different",
          title_image:
            "https://images.unsplash.com/photo-1585128792020-803d29415281?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80",
          post_images: [],
          tag: "Branding and Brochure"
        },
        {
          id: 5,
          title: "Why Looper Is Overrated Bullshit",
          title_image:
            "https://images.unsplash.com/photo-1600359738432-965e50c4d89e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80",
          post_images: [],
          tag: "Branding and Brochure"
        },
        {
          id: 6,
          title: "Ichigo's Zanpakuto Is Op",
          title_image:
            "https://images.unsplash.com/photo-1521905844287-b50baaa33df3?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=715&q=80",
          post_images: [],
          tag: "Branding and Brochure"
        },
        {
          id: 7,
          title: "Madara Did Nothing Wrong",
          title_image:
            "https://images.unsplash.com/photo-1521567784523-aaf2bbe9b8c1?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1028&q=80",
          post_images: [],
          tag: "Branding and Brochure"
        },
        {
          id: 8,
          title: "This Shite Taste Funny",
          title_image:
            "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=700&q=80",
          post_images: [],
          tag: "Branding and Brochure"
        },
        {
          id: 9,
          title: "Intergalactic Robot Pussy",
          title_image:
            "https://images.unsplash.com/photo-1493307100940-ac5f30709573?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80",
          post_images: [],
          tag: "Branding and Brochure"
        },
        {
          id: 10,
          title: "You Got To The End Now Fuck Off",
          title_image:
            "https://images.unsplash.com/photo-1585790843713-5bb3cc112a75?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80",
          post_images: [],
          tag: "Branding and Brochure"
        },
        {
          id: 11,
          title: "Whoops! I Lied!",
          title_image:
            "https://images.unsplash.com/photo-1455849318743-b2233052fcff?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80",
          post_images: [],
          tag: "Branding and Brochure"
        }
      ]
    },
    mutations: {
      mutBlogPosts(state, data) {
        state.blog_posts = data;
      }
    },
    actions: {
      setblog_posts(vuexContext, data) {
        vuexContext.commit("mutBlogPosts", data);
      }
    },
    getters: {
      blog_posts(state) {
        return state.blog_posts;
      }
    }
  });
};

export default createStore;
