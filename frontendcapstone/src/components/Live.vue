<template>
    <div class="Live">
      <audio ref="Live" controls autoplay>
        <source :src="streamUrl" type="audio/mpeg">
        Your browser does not support the audio element.
      </audio>
    </div>
  </template>
  
  <script>
  export default {
    name: 'LiveComp',
    data() {
      return {
        streamUrl: 'https://zeno.fm/radio/radio-khaltsha/'
      };
    },
    mounted() {
      // additional audio player controls here
      // For example: this.$refs.audioPlayer.play() to start playback
    }
  };
  </script>
  
  <style scoped>
  audio {
 width: 1000px;
 height: 20px;
 margin-left: 15%;
 margin-top: 10px;
 position: absolute;
 top: 20px;
  }
  </style>
  