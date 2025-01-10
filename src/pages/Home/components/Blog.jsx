import { useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import ArticleService from "../../../services/ArticleService";
import { Skeleton } from "primereact/skeleton";

export default function Blog() {
  // Use state for query params
  const [searchParams] = useState({
    title: "",
    page: 1,
    size: 3,
    sort: "total_likes", // for best cofee
    direction: "desc",
  });

  // Access query params
  const title = searchParams.title;
  const page = searchParams.page;
  const size = searchParams.size;
  const sort = searchParams.sort;
  const direction = searchParams.direction;

  // Use service and utils with useMemo -> prevent re-render
  const articleService = useMemo(() => ArticleService(), []);

  // Access the client
  // const queryClient = useQueryClient();

  // Queries
  const { data, isLoading } = useQuery({
    queryKey: ["articles", title, page, size, sort, direction],
    queryFn: async () => {
      return await articleService.getAllArticle({
        title,
        page,
        size,
        sort,
        direction,
      });
    },
  });

  return (
    <div className="mb-8">
      {/* Best Cofee Header */}
      <div className="flex justify-content-between align-items-center">
        <h1 className="color-tertiary">READ OUR BLOGS</h1>
        <div className="flex align-items-center">
          <a
            href="/blog"
            className="color-tertiary font-primary underline hover:text-yellow-600 cursor-pointer mr-4"
          >
            READ BLOG POSTS
          </a>
        </div>
      </div>

      {/* Loading View */}
      {isLoading && (
        <>
          <div className="grid">
            {/* Skeleton Card */}
            <div className="col p-0 w-full flex justify-content-center flex-column align-items-start">
              <Skeleton
                width="400px"
                height="300px"
                borderRadius="10px"
              ></Skeleton>
              <h3 className="text-left font-primary color-tertiary mb-0 ml-1">
                <Skeleton
                  width="400px"
                  height="20px"
                  borderRadius="10px"
                ></Skeleton>
              </h3>
              <h4 className="text-left font-primary color-secondary m-0 mt-2 ml-1">
                <Skeleton
                  width="400px"
                  height="80px"
                  borderRadius="10px"
                ></Skeleton>
              </h4>
            </div>

            {/* Skeleton Card */}
            <div className="col p-0 w-full flex justify-content-center flex-column align-items-start">
              <Skeleton
                width="400px"
                height="300px"
                borderRadius="10px"
              ></Skeleton>
              <h3 className="text-left font-primary color-tertiary mb-0 ml-1">
                <Skeleton
                  width="400px"
                  height="20px"
                  borderRadius="10px"
                ></Skeleton>
              </h3>
              <h4 className="text-left font-primary color-secondary m-0 mt-2 ml-1">
                <Skeleton
                  width="400px"
                  height="80px"
                  borderRadius="10px"
                ></Skeleton>
              </h4>
            </div>

            {/* Skeleton Card */}
            <div className="col p-0 w-full flex justify-content-center flex-column align-items-start">
              <Skeleton
                width="400px"
                height="300px"
                borderRadius="10px"
              ></Skeleton>
              <h3 className="text-left font-primary color-tertiary mb-0 ml-1">
                <Skeleton
                  width="400px"
                  height="20px"
                  borderRadius="10px"
                ></Skeleton>
              </h3>
              <h4 className="text-left font-primary color-secondary m-0 mt-2 ml-1">
                <Skeleton
                  width="400px"
                  height="80px"
                  borderRadius="10px"
                ></Skeleton>
              </h4>
            </div>
          </div>
        </>
      )}

      {/* Data View */}
      {!isLoading && (
        <>
          <div className="grid">
            {data.data.data?.map((article) => (
              <div
                key={article.id}
                className="col p-0 w-full h-full flex justify-content-center flex-column align-items-start"
              >
                <img
                  src="https://fakeimg.pl/400x300"
                  alt="best-cofee-img"
                  className="border-round"
                />
                <h3 className="text-left font-primary color-tertiary mb-0 ml-1">
                  {article.title}
                </h3>
                <p className="text-left text-sm font-primary color-tertiary m-0 mt-2 ml-1">
                  ${article.description}
                </p>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
