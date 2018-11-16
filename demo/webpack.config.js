const path=require("path")

module.exports = {
    entry:{
        main:path.join(__dirname,"./demo.js")
    },
    output:{
        path:path.join(__dirname,"./")
    },
    mode:"development",
    devtool:"sourcemap"
}