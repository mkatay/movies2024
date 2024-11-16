import React from "react";
import { useQuery} from "@tanstack/react-query"
import { getData } from "../utils";
import { SingleContent } from "../components/SingleContent";
//import { ContentPagination } from "./ContentPagination";
import { useState } from "react";

import { deepPurple } from '@mui/material/colors';
import { ContentPagination } from "../components/ContentPagination";

const bgcolor= deepPurple[600];

export const Content = ({url,type,name}) => {
  const [page, setPage] = useState(1);
  const { data,isLoading, isError,error } = useQuery({queryKey:[name, url + "&page=" + page],queryFn:getData});
console.log(url);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error occurred while fetching data! {error.message}</div>;
  }
  console.log(data.results,data.total_pages);

  return (
    <div style={{backgroundColor:bgcolor}}>
      <div className="content">
        {data.results.map((obj) => (
            <SingleContent key={obj.id} {...obj} />
          ))}
        <ContentPagination page={page} setPage={setPage} numOfPage={data.total_pages>500? 500 : data.total_pages} />
      </div>
    </div>
  );
};