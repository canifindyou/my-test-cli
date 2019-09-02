
 
 function  readFile(name,fn) {
    let xhr = new XMLHttpRequest()
    xhr.open("GET", name, false);
    xhr.send(null);
    return JSON.parse(xhr.responseText);
}
export default{

      readFile

}

