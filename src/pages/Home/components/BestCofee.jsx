import { useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import BeanService from "../../../services/BeanService";
import { Button } from "primereact/button";
import { Skeleton } from "primereact/skeleton";

export default function BestCofee() {
  // Use state for query params
  const [searchParams, setSearchParams] = useState({
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
  const beanService = useMemo(() => BeanService(), []);

  // Access the client
  // const queryClient = useQueryClient();

  // Queries
  const { data, isLoading } = useQuery({
    queryKey: ["beans", title, page, size, sort, direction],
    queryFn: async () => {
      return await beanService.getAllBean({
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
        <h1 className="color-tertiary">SHOP BEST COFEE</h1>
        <div className="flex align-items-center">
          <a
            href="/blog"
            className="color-tertiary font-primary underline hover:text-yellow-600 cursor-pointer mr-4"
          >
            VIEW ALL
          </a>

          {/* Button Previous */}
          {page > 1 && !isLoading && (
            <Button
              icon="pi pi-chevron-left"
              aria-label="Filter"
              size="small"
              className="p-2 bg-gray-200 hover:bg-gray-900 hover:text-white border-none mr-2"
              style={{ color: "black" }}
              onClick={() =>
                setSearchParams({
                  name: name,
                  page: page - 1,
                  size: size,
                  sort: sort,
                  direction: direction,
                })
              }
            />
          )}

          {/* Button Next */}
          {page < data?.data?.last_page && !isLoading && (
            <Button
              icon="pi pi-chevron-right"
              aria-label="Filter"
              size="small"
              className="p-2 bg-gray-200 hover:bg-gray-900 hover:text-white border-none"
              style={{ color: "black" }}
              onClick={() =>
                setSearchParams({
                  name: name,
                  page: page + 1,
                  size: size,
                  sort: sort,
                  direction: direction,
                })
              }
            />
          )}
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
                height="500px"
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
                  width="100px"
                  height="20px"
                  borderRadius="10px"
                ></Skeleton>
              </h4>
            </div>

            {/* Skeleton Card */}
            <div className="col p-0 w-full flex justify-content-center flex-column align-items-start">
              <Skeleton
                width="400px"
                height="500px"
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
                  width="100px"
                  height="20px"
                  borderRadius="10px"
                ></Skeleton>
              </h4>
            </div>

            {/* Skeleton Card */}
            <div className="col p-0 w-full flex justify-content-center flex-column align-items-start">
              <Skeleton
                width="400px"
                height="500px"
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
                  width="100px"
                  height="20px"
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
            {data.data.data?.map((bean) => (
              <div
                key={bean.id}
                className="col p-0 w-full flex justify-content-center flex-column align-items-start"
              >
                <img
                  src="https://fakeimg.pl/400x500"
                  alt="best-cofee-img"
                  className="border-round"
                />
                <h3 className="text-left font-primary color-tertiary mb-0 ml-1">
                  {bean.title} - {bean.total_likes}{" "}
                  <i className="pi pi-star color-tertiary"></i>
                </h3>
                <h4 className="text-left font-primary color-secondary m-0 mt-2 ml-1">
                  ${bean.price}
                </h4>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
