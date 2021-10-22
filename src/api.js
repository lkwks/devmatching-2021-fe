import cache from "./cache.js";

const API_ENDPOINT =
  "https://zl3m4qq0l9.execute-api.ap-northeast-2.amazonaws.com/dev";
  

const request = async url => 
{
    try 
    {   
        const result = await fetch(url);
        if (result.ok)
            return await result.json();     
        else
        {
            if (result.status >= 500)
                throw `서버 에러: ${result.status}`;
            if (result.status >= 400)
                throw `클라이언트 에러: ${result.status}`;
            if (result.status >= 300)
                throw `리다이렉트 에러: ${result.status}`;
            throw result.status;
        }
    } 
    catch (e) 
    {
        if (e.message) throw e.message;
        else throw e;
    }   
};    


const api = {
  fetchDir: async nodeId => 
  {
      try
      {
          const cacheData = cache.get(nodeId + "dir");
          if (cacheData)
            return {isError: false, data: cacheData};

          const url = nodeId === "null" ? API_ENDPOINT: `${API_ENDPOINT}/${nodeId}`;
          const result = await request(url);
          result.forEach(elem => cache.set(elem.id, {name:elem.name, parentId: elem.parent===null ? "null":elem.parent.id}));
          cache.set(nodeId + "dir", result);
          return {isError: false, data: result};
      }
      catch(e)
      {
          return {isError: true, data: e};
      }
  },
};

export default api