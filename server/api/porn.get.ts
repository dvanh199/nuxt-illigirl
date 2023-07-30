import {
    image_search,
    image_search_generator,
} from "@mudbill/duckduckgo-images-api";

export default eventHandler(async (event) => {
    const { q } = getQuery(event);
    //@ts-ignore
    const results = await image_search({ query: q ? `Sexy Nude Porn ${q}` : "Sexy Nude Porn", moderate: false })
    //@ts-ignore
    const arr = [];
    results.slice(0,50).forEach((e:any) => {            
        try {            
            arr.push({
                image_token: e.image_token,
                thumbnail: e.thumbnail,
                title: e.title,
                url: `/photos/${btoa(e.title)}?h=${btoa(e.thumbnail)}`,
            })
        } catch (error) {
            
        }            
    });
    //@ts-ignore
    return arr   
})