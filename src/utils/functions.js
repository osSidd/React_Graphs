export function debounce(fn, delay){
    let id
    return function(){
        let args = arguments
        clearTimeout(id)
        id = setTimeout(() => fn.apply(this, args), delay)
    }
}