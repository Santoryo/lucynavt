export default async function getTwitchLive() {

  const query = {
    "query": `query { user(login: \"lucynavt\") { id login displayName description createdAt roles { isPartner } stream { id title type viewersCount createdAt game { name } } }}`
  }

  const data = await fetch('https://gql.twitch.tv/gql', 
    {
      method: "POST", 
      headers: {
        "Client-ID": "kimne78kx3ncx6brgo4mv6wki5h1ko"
      }, 
      body: JSON.stringify(query)
    })
  const live: ResponseData = await data.json();

  return live.data.user.stream;
};