
export default function getParams(){
    return document.location.href.split("/").filter(x=>x.length > 0)
}
