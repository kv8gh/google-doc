import {parseAsString,useQueryState} from "nuqs";

export function useSearchParam(){
    return useQueryState(
        'search',
        parseAsString.withDefault("").withOptions({clearOnDefault:true})
    )
}

// nuqs is used for query handling , ?name=karan or it will make ?  not ?name= 

// in this key means the name with which we are quering , parseAsString mtlb treat it as a string not number and clearondefault mtlb empty hone pe url clean kr do