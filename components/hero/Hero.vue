<template>
  <div class="hero is-medium is-bold">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          Daily Cart
        </h1>
        <h2 class="subtitle">
          Your one stop place to shop computers, lens, drones and other gadgets in never before seen prices.
        </h2>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.hero {
  background: linear-gradient(135deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
  height: 40vh;
  margin-bottom: 40px;
}
@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
h1,
h2 {
  color: rgb(0, 0, 0);
}
.title {
  text-align: center;
  font-weight: bold;
}
.subtitle {
  text-align: center;
}
</style>
