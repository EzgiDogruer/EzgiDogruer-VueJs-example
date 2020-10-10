<template>
  <div>

    
   <h3> {{ $t('message.hello', { name: ' ' }) }}</h3>
      
      <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: "Home",
  
};
</script>

<style>
h3 {
  
  margin-top:2em;
  margin-bottom: 1em;
  color: rgba(231, 164, 19, 0.521);
  font-weight: 600;
  text-align: center;
  font-size: 400%;
  font-style: italic;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  
  letter-spacing: 4px;
}


</style>
