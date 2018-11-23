<template>
	<div id="newsDetail">
		<head-top></head-top>
		<div class="detail">
			<div v-html="newsDetail"></div>
			<div class="pagination">
        <div class="pre" @click="goTo(-1)" v-if="showPre">上一篇</div>
        <div class="next" @click="goTo(1)" v-if="showNext">下一篇</div>
      </div>
		</div>
		<foot-guide></foot-guide>
	</div>
</template>

<script>
import headTop from '../components/header/head'
import footGuide from '../components/footer/footGuide'
import {
  newsDetail
} from '../service/getData'
export default {
  data () {
    return {
			newsDetail: {},
			typeName: '',
			id: '',
			type: '',
			showPre: true,
			showNext: true
    }
	},
	created() {
		this.id =  Number(this.$route.params.id);
		this.type = this.$route.params.type;
    this.getNewsDetail(this.$route.params.type, this.$route.params.id);
	},
  mounted () {
  },
  methods: {
		getNewsDetail (type, id) {
			newsDetail().then((res) => {
				this.typeName = res.data[type];
				this.newsDetail = res.data[type][id];
				id <= 1 ? this.showPre = false : this.showPre = true;
				id >= Object.keys(this.typeName).length ? this.showNext = false : this.showNext = true;
      })
		},
		goTo (page) {
			this.id = (this.id + page);
			this.$router.replace('/news-detail/' + this.type + '/' + this.id);
			this.getNewsDetail(this.type, this.id);
		}
	},
	components: {
		headTop,
		footGuide
	}
}
</script>

<style lang="scss" scoped>
  @import '../style/mixin';
	#newsDetail {
		background: $fc;
		.detail {
			width: 67%;
			margin: 60px auto;
			.pagination {
        margin: 28px auto;
        text-align: center;
        .pre, .next {
          border-radius: 2.5px;
          text-align: center;
          display: inline-block;
          background-color: $fc;
          border: solid 1px #d0cece;
					@include wh(55px, 30px);
					line-height: 30px;
					margin-right: 62px;
          cursor: pointer;
          font-weight: bold;
          @include sc(12px,$blue);
        }
      }
		}
	}
</style>