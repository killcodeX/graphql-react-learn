import React, { useEffect } from 'react';
import { useQuery, gql } from '@apollo/client';
import { LOAD_ALL_USERS } from "../grapghql/queries";

export default function GetUsers() {
    const { loading, error, data } = useQuery(LOAD_ALL_USERS);

    useEffect(() => {
        console.log(data);
    }, [data]);

    return (
        <div>
            
        </div>
    )
}
