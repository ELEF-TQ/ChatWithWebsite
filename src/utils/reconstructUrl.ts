export function reconstructUrl({url} : {url:string[]})  {
    const decodedComponents = url.map((component)=> decodeURIComponent(component))
    return decodedComponents.join("/");

}