export default target => (...args ) =>{
    try {  return  Promise.resolve(  target(...args) )}
    catch {
        return false 
    }
}