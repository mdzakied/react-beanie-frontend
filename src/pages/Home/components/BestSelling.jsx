import { useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import BeanService from "../../../services/BeanService";
import { Avatar } from "primereact/avatar";
import { Skeleton } from "primereact/skeleton";

export default function BestSelling() {
  // Use state for query params
  const [searchParams] = useState({
    title: "",
    page: 1,
    size: 5,
    sort: "total_sales", // for best selling
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
    <div className="mt-8">
      {/* Best Cofee Header */}
      <div className="flex justify-content-start align-items-center">
        <h1 className="color-tertiary">BEST SELLING</h1>
      </div>

      {/* Loading View */}
      {isLoading && (
        <div className="my-2">

          {/* Card Product */}
          <div className="flex justify-content-start pl-0 p-3">
            <div className="flex align-items-center w-full">
              <div className="flex align-items-center">
                <Skeleton shape="circle" size="4rem" />
              </div>
              <div className="flex flex-column ml-3">
                <Skeleton width="15rem" height="1.5rem" />
                <Skeleton width="25rem" height="2rem" className="mt-2" />
              </div>
              <div className="ml-auto mb-auto">
                <Skeleton width="5rem" height="1.5rem" />
              </div>
            </div>
          </div>

          {/* Card Product */}
          <div className="flex justify-content-start pl-0 p-3">
            <div className="flex align-items-center w-full">
              <div className="flex align-items-center">
                <Skeleton shape="circle" size="4rem" />
              </div>
              <div className="flex flex-column ml-3">
                <Skeleton width="15rem" height="1.5rem" />
                <Skeleton width="25rem" height="2rem" className="mt-2" />
              </div>
              <div className="ml-auto mb-auto">
                <Skeleton width="5rem" height="1.5rem" />
              </div>
            </div>
          </div>

          {/* Card Product */}
          <div className="flex justify-content-start pl-0 p-3">
            <div className="flex align-items-center w-full">
              <div className="flex align-items-center">
                <Skeleton shape="circle" size="4rem" />
              </div>
              <div className="flex flex-column ml-3">
                <Skeleton width="15rem" height="1.5rem" />
                <Skeleton width="25rem" height="2rem" className="mt-2" />
              </div>
              <div className="ml-auto mb-auto">
                <Skeleton width="5rem" height="1.5rem" />
              </div>
            </div>
          </div>

          {/* Card Product */}
          <div className="flex justify-content-start pl-0 p-3">
            <div className="flex align-items-center w-full">
              <div className="flex align-items-center">
                <Skeleton shape="circle" size="4rem" />
              </div>
              <div className="flex flex-column ml-3">
                <Skeleton width="15rem" height="1.5rem" />
                <Skeleton width="25rem" height="2rem" className="mt-2" />
              </div>
              <div className="ml-auto mb-auto">
                <Skeleton width="5rem" height="1.5rem" />
              </div>
            </div>
          </div>

          {/* Card Product */}
          <div className="flex justify-content-start pl-0 p-3">
            <div className="flex align-items-center w-full">
              <div className="flex align-items-center">
                <Skeleton shape="circle" size="4rem" />
              </div>
              <div className="flex flex-column ml-3">
                <Skeleton width="15rem" height="1.5rem" />
                <Skeleton width="25rem" height="2rem" className="mt-2" />
              </div>
              <div className="ml-auto mb-auto">
                <Skeleton width="5rem" height="1.5rem" />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Data View */}
      {!isLoading && (
        <>
          <div className="my-2 shadow-4 p-3">
            {data.data.data?.map((bean) => (
              // Card Product
              <div key={bean.id} className="flex justify-content-start pl-0 p-3">
                <div className="flex align-items-center w-full">

                  {/* Avatar */}
                  <div className="flex align-items-center">
                    <Avatar label="B" size="xlarge" shape="circle" />
                  </div>

                  {/* Card Content */}
                  <div className="flex flex-column ml-3">
                    <h3 className="color-tertiary text-sm font-primary m-0">
                      {bean.title} - {bean.total_sales}{" "}
                      <i className="pi pi-cart-arrow-down color-tertiary text-sm"></i>
                    </h3>
                    <p className="text-xs font-primary m-0 mr-4">
                      {bean.subtitle}
                    </p>
                  </div>

                  {/* Card Price */}
                  <div className="ml-auto mb-auto">
                    <h3 className="color-tertiary font-primary text-sm m-0 ">
                      ${bean.price}
                    </h3>
                  </div>
                </div>
              </div>
            ))}

            {/* View More */}
            <div className="mt-2 ml-2">
              <a
                href="/shop"
                className="color-tertiary font-primary underline hover:text-yellow-600 cursor-pointer"
              >
                VIEW ALL
              </a>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
