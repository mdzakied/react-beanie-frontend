import axiosInstance from "../api/axiosInstance";

const CommentService = () => {
  const getAllComment = async (query) => {
    const { data } = await axiosInstance.get(`/Comments`, {
      params: query,
    });
    return data;
  };

  return {
    getAllComment,
  };
};

export default CommentService;
