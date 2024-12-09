<template>
  <BasicModal v-bind="$attrs" @register="registerModal" title="官方声明" :footer="null" :width="500" :minHeight="300" class="about-modal">
    <div class="about-modal-main">
      郑重声明：本项目是在JNPF框架的基础上进行的创新性开发。我们对本项目拥有完整的知识产权，而JNPF框架的所有权则归属于JNPF官方公司。客户在使用本项目时，将获得JNPF框架的使用权，但仅限于使用目的，并不包括对框架本身的所有权或修改权。
      <br/>
      我们强调，客户在使用本项目时，必须遵守与我们签订的协议和条款，确保合法合规的使用。我们保留对本项目知识产权的保护权利，并承诺为客户提供必要的技术支持与服务，以确保客户能够充分利用JNPF框架的优势，推动企业数字化转型的进程。
      <br/>
      此声明旨在明确各方的权利和义务，保护知识产权，促进健康、有序的商业环境。我们感谢您的理解与支持，并期待与您建立长期稳定的合作关系。
    </div>
  </BasicModal>
</template>
<script lang="ts" setup>
import { BasicModal, useModalInner } from '@/components/Modal';

const [registerModal] = useModalInner();
</script>
<style scoped>
.about-modal-main{
  margin-top: 80px;
}
</style>
