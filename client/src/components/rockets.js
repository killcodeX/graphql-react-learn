import React, { useEffect } from "react";
import { useQuery, gql } from "@apollo/client";
import { LOAD_ALL_ROCKETS } from "../grapghql/queries";

export default function GetRockets() {
  const { loading, error, data } = useQuery(LOAD_ALL_ROCKETS);

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
        <h3 className="text-white">Get All Rockets</h3>
        <div className="row">
          {data.rockets.map((launch) => {
            return (
              <div className="col-md-4" key={launch.flight_number}>
                <div className="card card-body mb-3">
                  <h5>{launch.mission_name}</h5>
                  <p>{launch.launch_year}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
