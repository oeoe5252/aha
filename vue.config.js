// vue.config.js 
module.exports = {
    // The directory where the production build files will be generated in when running vue-cli-service build
    // the target directory will be removed before building (can be disabled by passing --no-clean when building)
    outputDir: 'docs',
    // This allows the built bundle to be deployed under any public path
    // Limitations of relative publicPath
    // - You are using HTML5 history.pushState routing;
    // - You are using the pages option to build a multi-paged app.
    publicPath: '/aha/',
    css: {
        loaderOptions: {
            scss: {
                data: `
                    @import "@/assets/scss/_mixins.scss";
                    @import "@/assets/scss/_base.scss";
                `
            }
        }
    },
    // pages: {
    //     // entry - 진입점을 정한다. 당연히 main.js가 진입점이된다.
    //     // template - 빌드할 template을 정한다.
    //     // filename - 빌드한 결과물의 파일 이름을 정한다.
    //     index: {
    //         // entry for the page
    //         entry: 'src/pages/index/main.js',
    //         // the source template
    //         template: 'public/index.html',
    //         // output as dist/index.html
    //         filename: 'index.html',
    //     },
    //     styleGuide: {
    //         entry: 'src/pages/styleGuide/main.js',
    //         template: 'public/styleGuide.html',
    //         filename: 'styleGuide.html',
    //     }
    // }
}