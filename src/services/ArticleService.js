import axiosInstance from "../api/axiosInstance";

const ArticleService = () => {
  const getAllArticle = async (query) => {
    const { data } = await axiosInstance.get(`/articles`, {
      params: query,
    });
    return data;
  };

  return {
    getAllArticle,
  };
};

export default ArticleService;
