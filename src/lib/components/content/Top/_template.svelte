<div id="intro">
  <slot name="intro" />
</div>

<style lang="scss">
  #intro {
    font-size: 1.1em;
    padding: 20px 40px;

    @media only screen and (max-width: 540px) {
      font-size: 1em;
      padding: 10px 15px;
    }
  }
</style>
