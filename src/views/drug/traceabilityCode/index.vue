<template>
	<div class="bg">
		<a-form :model="searchParams" ref="formRef" :rules="rules">
			<a-row type="flex" >
				<a-col :span="6">
    				<a-form-item label="单据号" name="billno">
    					<a-input v-model:value="searchParams.billno" />
    				</a-form-item>
    			</a-col>
				<a-col :span="1"></a-col>
				<a-col :span="6">
    				<a-form-item label="追溯码"  name="drugcodes">
    					<a-input v-model:value="searchParams.drugcodes" />
    				</a-form-item>
    			</a-col>
				<a-col :span="6">
					<a-button class="searchBtn" type="primary" pre-icon="icon-ym icon-ym-header-search" @click="search" >查询</a-button>
					<a-button class="searchBtn" pre-icon="icon-ym icon-ym-btn-refresh">重置</a-button>
				</a-col>
			</a-row>
		</a-form>

		<div class="contentInfo">
			<div class="resultTitle">
				追溯码查询结果
			</div>

			<div class="infoArea">
				<div class="title">基本信息</div>
				<div class="flexBox">
					<div class="infoItem">
						产品名称： 阿莫西林
					</div>
					<div class="infoItem">
						产品规格： 阿莫西林
					</div>
					<div class="infoItem">
						产品名称： 阿莫西林
					</div>
					<div class="infoItem">
						包装比例： 阿莫西林
					</div>
					<div class="infoItem">
						生产厂商： 阿莫西林
					</div>
					<div class="infoItem">
						生产线名称： 阿莫西林
					</div>
					<div class="infoItem">
						生产线负责人： 阿莫西林
					</div>
					<div class="infoItem">
						生产批号： 阿莫西林
					</div>
					<div class="infoItem">
						生产日期： 阿莫西林
					</div>
					<div class="infoItem">
						失效日期： 阿莫西林
					</div>
					<div class="infoItem">
						包装层级： 中包
					</div>
					<div class="infoItem">
						最小包装追溯码数量： 200
					</div>
				</div>
			</div>

			<div class="infoArea">
				<div class="title">入库信息</div>
				<div class="flexBox">
					<div class="infoItem">
						入库单据： PHR5555
					</div>
					<div class="infoItem">
						入库日期： 2024-11-06
					</div>
					<div class="infoItem">
						出库单据： 暂无
					</div>
					<div class="infoItem">
						出库日期： 暂无
					</div>
				</div>
			</div>

			<div class="infoArea">
				<div class="title">包装关系</div>
				<div class="flexBox">
					<div class="infoItem">
						<div class="itemCard">
							<div class="topTitle">三级包装码（大码）</div>
							<div class="line">12354684555555</div>
						</div>
					</div>
					<div class="infoItem">
						<div class="itemCard" v-for="item in 2">
							<div class="topTitle">二级包装码（中码）</div>
							<div class="line">12354684555555</div>
						</div>
					</div>
					<div class="infoItem">
						<div class="itemCard" v-for="item in 2">
							<div class="topTitle">一级包装码（小码）</div>
							<div class="line" v-for="item in 10">12354684555555</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		
	</div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue';
import type { Rule } from 'ant-design-vue/es/form';
import { defHttp } from '@/utils/http/axios';

const searchParams = reactive({
	billno: '',
	drugcodes: '',
})
// const traceabilityCode = ref('')
const formRef = ref();

const rules: Record<string, Rule[]> = {
	billno: [{ required: true, message: '请填写单据号!' }],
	drugcodes: [{ required: true, message: '请填写追溯码!' }],
}

const search = () => {
	formRef.value.validate().then(() => {
		let data = {
			billno: searchParams.billno,
			drugcodes: searchParams.drugcodes,
		}
		
		defHttp.post({ url: '/drugProxy/billinv2/scantracecode', data });
    })
}

</script>

<style lang="less" scoped>
.bg {
	background-color: #fff;
	padding: 20px;
	.searchBtn {
		margin-left: 10px;
	}
	.contentInfo {
		margin-top: 20px;
		.resultTitle {
			font-weight: 600;
			font-size: 18px;
			padding-bottom: 15px;
			border-bottom: 1px solid #ccc;
			padding-left: 20px;
		}
		.infoArea {
			margin-top: 15px;
			background-color: #f5f5f5;
			border-radius: 4px;
			padding: 20px;
			.title {
				font-weight: 600;
			}
			.flexBox {
				display: flex;
				flex-wrap: wrap;
				box-sizing: border-box;
				padding: 0 30px;
				.infoItem {
					width: 33.33%;
					margin: 10px 0;
					padding-left: 20px;
				}
				.itemCard {
					background-color: #fff;
					border: 0.5px solid #eee;
					margin-top: 15px;
					padding: 10px;
					.topTitle {
						padding: 10px;
						text-align: center;
						border-bottom: 1px solid #eee;
					}
					.line {
						padding: 8px 10px;
					}
				}
			}
		}
	}
}
</style>