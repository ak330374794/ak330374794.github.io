<template>
  <main>
    <div class="csstest123">
      <div class="csstest">
        <div class="box">
          <div class="curcle"></div>
          <div class="curcle"></div>
        </div>
        <div class="box">
          <div class="curcle"></div>
        </div>
        <div class="box">
          <div class="curcle"></div>
          <div class="curcle"></div>
        </div>
      </div>
    </div>
  </main>
</template>
<style>
.csstest123 {
  width: 1000px;
  height: 1000px;
  background: #000;
}
.csstest {
  width: 200px;
  height: 200px;
  background: #fff;
}

.box {
  display: flex;
  width: 100%;
  justify-content: space-between;
}
.box:nth-child(2n) {
  justify-content: center;
}
.curcle {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: #000;
}
</style>
