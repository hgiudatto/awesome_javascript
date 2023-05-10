const listAllBlogs = (blogList) => {
  return new Promise((resolve, reject) => {
    const list = blogList.map((blog) =>
      console.log(`Title: ${blog.title} - Author: ${blog.author}`)
    );

    list
      ? resolve(blogList)
      : reject("Cannot list blogs, please try again later.");
  });
};

module.exports = { listAllBlogs };
