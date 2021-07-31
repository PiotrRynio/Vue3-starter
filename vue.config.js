module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: ` @import "@/components/atoms/styles/_index.scss";`,
      },
    },
  },
};
