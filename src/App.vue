<template>
  <div class="layout--customer-app secondary-color">
    <NavBar ref="navbar"/>
    <router-view />
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue'
import RestaurantInfoService from '@/services/RestaurantInfoService.js';

const restaurantInfoService = new RestaurantInfoService();

export default {
  name: 'Home',
  components: {
    NavBar
  },
  data() {
    return {
      RestaurantInfo: {}
    }
  },
  methods: {
    async getColors() {
        this.$data.RestaurantInfo = await restaurantInfoService.getAll();
    },
    async setColors(){
      await this.getColors();
        document.documentElement.style.setProperty('--primary-color', this.$data.RestaurantInfo.primaryColor);
        document.documentElement.style.setProperty('--primary-color-light', this.pSBC(0.4, this.$data.RestaurantInfo.primaryColor, false, true));
        document.documentElement.style.setProperty('--secondary-color', this.$data.RestaurantInfo.secondaryColor);
        document.documentElement.style.setProperty('--secondary-color-light', this.pSBC(0.4, this.$data.RestaurantInfo.secondaryColor,false,true));
        document.documentElement.style.setProperty('--text-color-secondary', this.getTextColor('--secondary-color'));
        document.documentElement.style.setProperty('--text-color-primary', this.getTextColor('--primary-color'));
        document.documentElement.style.setProperty('--text-color-secondary-light', this.getTextColor('--secondary-color-light'));
        document.documentElement.style.setProperty('--text-color-primary-light', this.getTextColor('--primary-color-light'));
    },
    //https://stackoverflow.com/questions/5560248/programmatically-lighten-or-darken-a-hex-color-or-rgb-and-blend-colors
    pSBC(p,c0,c1,l) {
          let r,g,b,P,f,t,h,i=parseInt,m=Math.round,a=typeof(c1)=="string";
          if(typeof(p)!="number"||p<-1||p>1||typeof(c0)!="string"||(c0[0]!='r'&&c0[0]!='#')||(c1&&!a))return null;
          if(!this.pSBCr)this.pSBCr=(d)=>{
              let n=d.length,x={};
              if(n>9){
                  [r,g,b,a]=d=d.split(","),n=d.length;
                  if(n<3||n>4)return null;
                  x.r=i(r[3]=="a"?r.slice(5):r.slice(4)),x.g=i(g),x.b=i(b),x.a=a?parseFloat(a):-1
              }else{
                  if(n==8||n==6||n<4)return null;
                  if(n<6)d="#"+d[1]+d[1]+d[2]+d[2]+d[3]+d[3]+(n>4?d[4]+d[4]:"");
                  d=i(d.slice(1),16);
                  if(n==9||n==5)x.r=d>>24&255,x.g=d>>16&255,x.b=d>>8&255,x.a=m((d&255)/0.255)/1000;
                  else x.r=d>>16,x.g=d>>8&255,x.b=d&255,x.a=-1
              }return x};
          h=c0.length>9,h=a?c1.length>9?true:c1=="c"?!h:false:h,f=this.pSBCr(c0),P=p<0,t=c1&&c1!="c"?this.pSBCr(c1):P?{r:0,g:0,b:0,a:-1}:{r:255,g:255,b:255,a:-1},p=P?p*-1:p,P=1-p;
          if(!f||!t)return null;
          if(l)r=m(P*f.r+p*t.r),g=m(P*f.g+p*t.g),b=m(P*f.b+p*t.b);
          else r=m((P*f.r**2+p*t.r**2)**0.5),g=m((P*f.g**2+p*t.g**2)**0.5),b=m((P*f.b**2+p*t.b**2)**0.5);
          a=f.a,t=t.a,f=a>=0||t>=0,a=f?a<0?t:t<0?a:a*P+t*p:0;
          if(h)return"rgb"+(f?"a(":"(")+r+","+g+","+b+(f?","+m(a*1000)/1000:"")+")";
          else return"#"+(4294967296+r*16777216+g*65536+b*256+(f?m(a*255):0)).toString(16).slice(1,f?undefined:-2)
      },
      getTextColor(color) {
        const style = getComputedStyle(document.body);
        const backgroundColor = style.getPropertyValue(color);
        let rgbBackgroundColor;
        if(backgroundColor.startsWith('#')){
            rgbBackgroundColor = this.hexToRgb(backgroundColor)
        }
        else{
            rgbBackgroundColor = backgroundColor.match(/\d+/g);
        }
        let textColor;
        if ((rgbBackgroundColor[0] * 0.299 + rgbBackgroundColor[1] * 0.587 + rgbBackgroundColor[2] * 0.114) > 150) {
            textColor = 'rgba(0, 0, 0, 1)';
        } else {
            textColor = 'rgba(255, 255, 255, 1)';
        }
        return textColor;
      },
      //https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
      hexToRgb(hex) {
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? [
          parseInt(result[1], 16),
          parseInt(result[2], 16),
          parseInt(result[3], 16)
         ] : null;
      }
  },
  mounted() {
    this.setColors()
  },
  updated() {
    this.$refs.navbar.loggedInOrNot();
  }
}
</script>

<style>
.text-color {
  color: var(--text-color-primary) !important;
}

.primary-color {
  background-color: var(--primary-color) !important;
  box-shadow: 0 0 0.5rem 0.2rem var(--primary-color) !important;
}

.secondary-color {
  background-color: var(--secondary-color) !important;
  box-shadow: 0 0 0.5rem 0.2rem var(--primary-color) !important;
}

html, body{
  width: 100vw;
  min-height: 100vh;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  overflow-y: auto;
  text-color: var(--text-color);
}

#main-content{
  padding: 2rem;
}

main {
  width: 100%;
  height: 100vh;
  overflow-y: auto;
}

.layout--customer-app{
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto;
  /* display: flex;
  flex-direction: column; */
}

a {
  color: unset !important;
  text-decoration: unset !important;
}

.card {
  border-radius: 10px !important;
}

.icon {
    min-width: 2em;
    max-width: 2em;
    cursor: pointer;
}

.fontIcon {
  font-size: 1.5rem;
  text-align:center;
}

.iconRobot {
    min-width: 2em;
    max-width: 2em;
    margin-left: -4px;
    cursor: pointer;
}

.with-arrow{
    position: relative;
}

.with-arrow::after{
    content: '';
    width: 0.85em;
    height: 0.85em;
    top: 50%;
    position: absolute;
    border-top: solid 0.15em #000;
    border-right: solid 0.15em #000;
    transform: translateY(-50%);
}

.with-arrow--right::after{
    right: 1em;
    transform: translateY(-50%) rotate(45deg);
}
</style>
