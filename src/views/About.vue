<template>
  <div class="about">
    <div class="about-form">
      <div id="about-header">Creators</div>
      <dl class="about-list">
        <dt>Polina Coulter</dt>
        <dd>https://github.com/polinacoulter</dd>
        <dt>Mark Abraham</dt>
        <dd>https://github.com/mabraham23</dd>
        <dt>Ammon Taylor</dt>
        <dd>https://github.com/human37</dd>
        <dt>Ryan Corry</dt>
        <dd>https://github.com/rcorry</dd>
      </dl>
    </div>
  </div>
</template>

<style scoped>

.about-form {
  border: 1px solid;
  border-color: white;
  width: 520px;
  height: 400px;
  margin-left: calc(50% - 250px);
  margin-top: 20px;
  box-shadow: 0px 0px 5px #ea4884,0px 0px 5px #ea4884;
}
.about-list dt{
  font-size: 20px;
  color: white;
  filter: drop-shadow(0 0 2px #ea4884) ;
  margin-left: 40px;
}
.about-list dd{
  font-size: 20px;
  color: white;
  margin-left: 60px;
  filter: drop-shadow(0 0 2px #ea4884);
  margin-bottom: 15px;
}

#about-header {
  font-size: 30px;
  color: white;
  text-align: center;
  filter: drop-shadow(0 0 2px #ea4884) drop-shadow(0 0 2px #ea4884);
  padding-top: 20px;
  padding-bottom: 10px;
}


</style>
