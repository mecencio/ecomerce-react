export const fetchBase = (prod) =>{ 
    return new Promise((result, reject) => {
        setTimeout(() => {
            result(prod)
        }, 2000);
    })
};