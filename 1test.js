let one = () => {
    return "one";
}

let two = async() => {
        setTimeout(() => {
            return "two"
    }, 2000)
}

let three = () => {
    return "three";
}

async function result(){
    let s1 = one();
    console.log(s1);
    let s2 =  two();
    console.log(s2);
    let s3 = three()
    console.log(s3);
}
result()