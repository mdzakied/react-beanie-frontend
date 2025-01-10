import { useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import CommentService from "../../../services/CommentService";
import { Button } from "primereact/button";
import { Skeleton } from "primereact/skeleton";

export default function Comment() {
  // Use state for query params
  const [searchParams, setSearchParams] = useState({
    name: "",
    page: 1,
    size: 1,
    sort: "created_at", // for newest
    direction: "desc",
  });

  // Access query params
  const name = searchParams.name;
  const page = searchParams.page;
  const size = searchParams.size;
  const sort = searchParams.sort;
  const direction = searchParams.direction;

  // Use service and utils with useMemo -> prevent re-render
  const commentService = useMemo(() => CommentService(), []);

  // Access the client
  // const queryClient = useQueryClient();

  // Queries
  const { data, isLoading } = useQuery({
    queryKey: ["comments", name, page, size, sort, direction],
    queryFn: async () => {
      return await commentService.getAllComment({
        name,
        page,
        size,
        sort,
        direction,
      });
    },
  });

  return (
    <div className="card flex justify-content-center text-center my-6">
      {/* Loading View */}
      {isLoading && (
        <>
          <div className="w-full flex justify-content-center flex-column align-items-center">
            <Skeleton className="w-8" height="100px"></Skeleton>
            <Skeleton className="w-3 mt-2" height="30px"></Skeleton>
          </div>
        </>
      )}

      {/* Data View */}
      {!isLoading && (
        <>
          {/* Button Previous */}
          {page > 1 && (
            <Button
              icon="pi pi-chevron-left"
              aria-label="Filter"
              size="small"
              className="bg-gray-200 hover:bg-gray-900 hover:text-white border-none btn-comm-custom my-auto border-circle"
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

          {/* Comment */}
          <div className="w-full">
            {data?.data?.data?.map((comment) => (
              <>
                <p
                  key={comment.id}
                  className="mx-auto w-8 text-xl font-italic line-height-3"
                >
                  {comment.comment}
                </p>
                <p>
                  <b>{comment.name}</b>
                </p>
              </>
            ))}
          </div>

          {/* Button Next */}
          {page < data?.data?.last_page && (
            <Button
              icon="pi pi-chevron-right"
              aria-label="Filter"
              size="small"
              className="bg-gray-200 hover:bg-gray-900 hover:text-white border-none btn-comm-custom my-auto border-circle"
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
        </>
      )}
    </div>
  );
}
