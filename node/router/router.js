const route = (pathname) => {
    console.log(`当前请求path为${pathname}`);
    switch (pathname) {
        case '/': 
            return {a:1};
            break;
        default: 
            return 'eeeeeeeee';
            break;
    }
}

exports.route = route;