export const getProducts = async () => {
    const res = await fetch("/news.json")
    // console.log(res);
    return res
}
