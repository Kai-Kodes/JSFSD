function f1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('f1')
            resolve()
        }, 4000);
    })
}

function f2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('f2')
            resolve()
        }, 1000);
    })
}