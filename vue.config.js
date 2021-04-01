// vue.config.js 
module.exports = {
    outputDir: 'docs',
    publicPath: '/aha/',
    css: {
        loaderOptions: {
            sass: {
                data: `
                    @import "@/assets/scss/_mixins.scss";
                    @import "@/assets/scss/_base.scss";
                `
            }
        }
    }
}