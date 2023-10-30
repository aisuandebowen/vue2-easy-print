<script>
export default {
  props: {
    renderContent: Function,
    header: {
      type: Object,
      default() {
        return {
          height: "0px",
        };
      },
    },
    footer: {
      type: Object,
      default() {
        return {
          height: "0px",
        };
      },
    },
  },
  components: {
    Content: {
      render() {
        const { headerStyle, footerStyle } = this.$parent.$props;
        const headerHeight = headerStyle?.height || "0px";
        const footerHeight = footerStyle?.height || "0px";

        return (
          <div>
            <table>
              <thead>
                <tr>
                  <td>
                    <div class="header-space" style={"height:" + headerHeight}>
                      &nbsp;
                    </div>
                  </td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div class="content" ref="content"></div>
                  </td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td>
                    <div class="footer-space" style={"height:" + footerHeight}>
                      &nbsp;
                    </div>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        );
      },
      mounted() {
        const dom = this.$parent.$props.renderContent();
        this.$refs.content.appendChild(dom);
      },
    },
  },
  render() {
    const { header, footer } = this.$props;

    function setStyle(style) {
      return {
        position: "fixed",
        top: 0,
        ...style,
      };
    }

    return (
      <div id={"vue2-easy-print"}>
        <Content></Content>
        <div class="header" style={setStyle(header?.style)}>
          {header.render?.call(this.$parent)}
        </div>
        <div class="footer" style={setStyle(footer?.style)}>
          {footer.render?.call(this.$parent)}
        </div>
      </div>
    );
  },
};
</script>
