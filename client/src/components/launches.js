import React, { useEffect } from "react";
import { useQuery, gql } from "@apollo/client";
import { LOAD_ALL_LAUNCHES } from "../grapghql/queries";

export default function GetUsers() {
  const { loading, error, data } = useQuery(LOAD_ALL_LAUNCHES);

  useEffect(() => {
    console.log("from api `data`-->>", data);
    console.log("from api `error`-->>", error);
    console.log("from api `loading`-->>", loading);
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <section>
      <div className="container">
        <h3 className="text-white">Get All Launches</h3>
        <div className="row">hi</div>
      </div>
    </section>
  );
}
