import {
    image_search,
    image_search_generator,
} from "@mudbill/duckduckgo-images-api";

export default eventHandler(async (event) => {
    const { q } = getQuery(event);
    //@ts-ignore
    const results = await image_search({ query: q ? q : "Hot Girls Porn", moderate: false })
    //@ts-ignore
    const arr = [];
    results.slice(0,50).forEach((e:any) => {            
        try {
            
            const url = e.url.replace(/.html/gi,"")
            arr.push({
                image_token: e.image_token,
                thumbnail: e.thumbnail,
                title: e.title,
                url: "/porn/" + (url.split('/').slice(-1) != "" ? url.split('/').slice(-1)[0] : url.split('/').slice(-2)[0]),
            })
        } catch (error) {
            
        }            
    });
    //@ts-ignore
    return arr   
})