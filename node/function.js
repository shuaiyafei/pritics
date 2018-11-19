const say = (word) => {
    console.log(word)
}

const exe = (fn, para) => {
    fn(para);
}

exe(say, 'hello');

exe((para) => { setTimeout( () => { console.log(para)}, 1000)}, 55555);

((i) => {
    console.error(i);
})('eeeeeeeeee');