<template>
  <Layout :class="getClass" v-bind="lockEvents">
    <Layout :class="[layoutClass]">
      <Layout :class="`${prefixCls}-main`">
        <LayoutContent />
      </Layout>
    </Layout>
  </Layout>
</template>

<script lang="ts">
  import { defineComponent, computed, unref, onMounted } from 'vue';
  import { Layout } from 'ant-design-vue';

  import LayoutContent from './content/index.vue';

  import { useHeaderSetting } from '@/hooks/setting/useHeaderSetting';
  import { useMenuSetting } from '@/hooks/setting/useMenuSetting';
  import { useDesign } from '@/hooks/web/useDesign';
  import { useLockPage } from '@/hooks/web/useLockPage';
  import { useRootSetting } from '@/hooks/setting/useRootSetting';
  import { useAppInject } from '@/hooks/web/useAppInject';
  import { useAppStore } from '@/store/modules/app';
  import { ThemeEnum } from '@/enums/appEnum';

  export default defineComponent({
    name: 'DefaultLayout',
    components: {
      LayoutContent,
      Layout,
    },
    setup() {
      const { prefixCls } = useDesign('default-layout');
      const { getIsMobile } = useAppInject();
      const { getShowFullHeaderRef } = useHeaderSetting();
      const { getShowSidebar, getIsMixSidebar, getShowMenu } = useMenuSetting();
      const { getDarkMode } = useRootSetting();
      const appStore = useAppStore();
      // Create a lock screen monitor
      const lockEvents = useLockPage();

      const getSysBg = computed(() => appStore.getProjectConfig.sysBg);
      const layoutClass = computed(() => {
        let cls: string[] = ['ant-layout'];
        if (unref(getIsMixSidebar) || unref(getShowMenu)) {
          cls.push('ant-layout-has-sider');
        }
        return cls;
      });
      const getClass = computed(() => [prefixCls, { [`${unref(getSysBg)}-bg`]: unref(getSysBg) && getDarkMode.value === ThemeEnum.LIGHT }]);


      return {
        getClass,
        getShowFullHeaderRef,
        getShowSidebar,
        prefixCls,
        getIsMobile,
        getIsMixSidebar,
        layoutClass,
        lockEvents,
      };
    },
  });
</script>
<style lang="less">
  @prefix-cls: ~'@{namespace}-default-layout';

  .@{prefix-cls} {
    display: flex;
    width: 100%;
    min-height: 100%;
    background-color: @app-base-background;
    flex-direction: column;
    background-position: top center;
    background-repeat: no-repeat;
    background-size: cover;
    &.blue-bg {
      background-image: url('../../assets/images/bg/blueBg.png');
    }
    &.purple-bg {
      background-image: url('../../assets/images/bg/purpleBg.png');
    }
    &.green-bg {
      background-image: url('../../assets/images/bg/greenBg.png');
    }

    > .ant-layout {
      min-height: 100%;
      background: transparent !important;
    }

    &-main {
      width: 100%;
      background: transparent !important;
    }
  }
</style>
