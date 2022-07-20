export type MediaType = [
    {
        title: {
            romaji: string,
            english: string,
            native: string
        },
        coverImage: {medium: string},
        siteUrl: string
    }
]

export interface ResponseType  {
    Page?: {
        media: MediaType
    }
}

const graphqlQuery = async ( variables: Object): Promise<ResponseType> =>{
    const query = `
    query ($search: String) 
    {
        Page (page: 1, perPage: 50) 
        {
            media(search: $search, type: ANIME){
                title{
                    romaji
                    english
                    native
                }

                coverImage{
                    medium
                }

                siteUrl
            }
        }
    }`

    const response = await fetch(
        "https://graphql.anilist.co", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                query: query,
                variables: variables,
            }),
        }
    )
    
    const data = await response.json()
    return data['data']
}

export default graphqlQuery
