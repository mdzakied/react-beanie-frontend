import axiosInstance from "../api/axiosInstance";

const BeanService = () => {
  const getAllBean = async (query) => {
    const { data } = await axiosInstance.get(`/beans`, {
      params: query,
    });
    return data;
  };

  return {
    getAllBean,
  };
};

export default BeanService;
