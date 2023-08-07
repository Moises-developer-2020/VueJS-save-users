<template>
  <div class="hello">
    <div class="effect">
      <h1 data-shadow="Moises Iglesias">{{ msg }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Moises Iglesias'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .effect {
    margin: 200px auto;
    perspective: 1000px;
    perspective-origin: 50% -200px;
  }
  h1 {
    text-align: center;
    text-transform: uppercase;
    font-size: 5em;
    letter-spacing: 0.1em;
    color: #EEE;
    animation: rotate 2s ease-in-out alternate infinite;
  }
  h1:before {
    content: attr(data-shadow);
    color: transparent;
    text-shadow: 0 0 15px #111;
    position: absolute;
    z-index: -1;
    margin: -0.1em 0 0 0;
    animation: skew 2s ease-in-out alternate infinite;
    transform-origin: bottom;
  }
  @keyframes rotate {
    from {
      transform: rotateY(-10deg);
      text-shadow:  1px -1px #CCC,
                    2px -1px #BBB,
                    3px -2px #AAA,
                    4px -2px #999,
                    5px -3px #888,
                    6px -3px #777;
    }
    to {
      transform: rotateY(10deg);
      text-shadow:  -1px -1px #CCC,
                    -2px -1px #BBB,
                    -3px -2px #AAA,
                    -4px -2px #999,
                    -5px -3px #888,
                    -6px -3px #777;
    }
  }
  @keyframes skew {
    from {
      transform: scaleY(0.3) skewX(-15deg);
    }
    to {
      transform: scaleY(0.3) skewX(-20deg);
    }
  }
</style>
