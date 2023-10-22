<script>
export default {
  props: {
    renderContent: Function,
    header: {
      type: String,
      default: "0px",
    },
    headerRender: {
      type: Function,
    },
    footer: {
      type: String,
      default: "0px",
    },
    footerRender: {
      type: Function,
    },
  },
  components: {
    Content: {
      render() {
        const { header } = this.$parent.$props;
        return (
          <div>
            <table>
              <thead>
                <tr>
                  <td>
                    <div class="header-space" style={"height:" + header}>
                      &nbsp;
                    </div>
                  </td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div
                      class="content"
                      ref="content"
                    ></div>
                  </td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td>
                    <div class="footer-space">&nbsp;</div>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        );
      },
      // mounted() {
      //   const dom = this.$parent.$props.renderContent();
      //   this.$refs.content.appendChild(dom.cloneNode(true));
      // },
    },
  },
  render() {
    const { headerRender, footerRender } = this.$props;
    return (
      <div class={"vue2-easy-print"}>
        <Content></Content>
        <div class="header">{headerRender?.call(this.$parent)}</div>
        <div class="footer">{footerRender?.call(this.$parent)}</div>
      </div>
    );
  },
};
</script>

<style>
.header {
  position: fixed;
  top: 0;
}
.footer {
  position: fixed;
  bottom: 0;
}
</style>
