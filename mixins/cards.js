export default {
  props: {
    blog_post: Object
  },
  methods: {
    open(blog_post) {
      this.$router.push("/post/" + `${blog_post.id}`);
    },
    truncate(input) {
      return input.length > 25 ? `${input.substring(0, 30)}...` : input;
    }
  }
};
