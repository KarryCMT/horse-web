<template>
  <a-col
    :class="[...(getConfig.className || []), getConfig.layout === 'colFormItem' ? 'ant-col-item' : '']"
    :span="getConfig.span"
    v-if="!getConfig.noShow && (!getConfig.visibility || (Array.isArray(getConfig.visibility) && getConfig.visibility.includes('pc')))">
    <template v-if="getConfig.layout === 'colFormItem'">
      <template v-if="getConfig.jnpfKey === 'divider'">
        <jnpf-divider :contentPosition="getItem.contentPosition" :content="getItem.content" />
      </template>
      <template v-else>
        <a-form-item :name="getItem.__vModel__" :labelCol="getLabelCol">
          <template #label v-if="getConfig.showLabel">
            {{ getLabel ? getLabel + (formConf.labelSuffix || '') : '' }}
            <BasicHelp :text="getTipLabel" v-if="getLabel && getTipLabel" />
          </template>
          <template v-if="getConfig.jnpfKey === 'text'">
            <jnpf-text :content="getItem.content" :textStyle="getItem.textStyle" />
          </template>
          <template v-else-if="getConfig.jnpfKey === 'link'">
            <jnpf-link :content="getItem.content" :href="getItem.href" :target="getItem.target" :textStyle="getItem.textStyle" />
          </template>
          <template v-else-if="getConfig.jnpfKey === 'alert'">
            <jnpf-alert
              :title="getItem.title"
              :type="getItem.type"
              :closable="getItem.closable"
              :showIcon="getItem.showIcon"
              :description="getItem.description"
              :closeText="getItem.closeText" />
          </template>
          <template v-else-if="getConfig.jnpfKey === 'groupTitle'">
            <jnpf-group-title :content="getItem.content" :contentPosition="getItem.contentPosition" :helpMessage="getItem.helpMessage" />
          </template>
          <template v-else-if="getConfig.jnpfKey === 'button'">
            <jnpf-button :align="getItem.align" :buttonText="getItem.buttonText" :type="getItem.type" :disabled="getItem.disabled" />
          </template>
          <template v-else-if="getConfig.jnpfKey === 'uploadFile'">
            <jnpf-upload-file v-model:value="getConfig.defaultValue" detailed disabled />
          </template>
          <template v-else-if="getConfig.jnpfKey === 'uploadImg'">
            <jnpf-upload-img v-model:value="getConfig.defaultValue" detailed disabled />
          </template>
          <template v-else-if="getConfig.jnpfKey === 'colorPicker'">
            <jnpf-color-picker v-model:value="getConfig.defaultValue" :showAlpha="getItem.showAlpha" :colorFormat="getItem.colorFormat" disabled />
          </template>
          <template v-else-if="getConfig.jnpfKey === 'rate'">
            <jnpf-rate v-model:value="getConfig.defaultValue" :count="getItem.count" :allowHalf="getItem.allowHalf" disabled />
          </template>
          <template v-else-if="getConfig.jnpfKey === 'slider'">
            <jnpf-slider v-model:value="getConfig.defaultValue" :min="getItem.min" :max="getItem.max" :step="getItem.step" disabled />
          </template>
          <template v-else-if="getConfig.jnpfKey === 'editor'">
            <div v-html="getConfig.defaultValue"></div>
          </template>
          <template v-else-if="getConfig.jnpfKey === 'relationForm'">
            <p class="link-text" @click="toDetail(item)">{{ getItem.name }}</p>
          </template>
          <template v-else-if="getConfig.jnpfKey === 'popupSelect'">
            <p>{{ getItem.name }}</p>
          </template>
          <template v-else-if="getConfig.jnpfKey === 'barcode'">
            <jnpf-barcode
              :format="getItem.format"
              :lineColor="getItem.lineColor"
              :background="getItem.background"
              :width="getItem.width"
              :height="getItem.height"
              :staticText="getItem.staticText"
              :dataType="getItem.dataType"
              :relationField="getItem.relationField + '_id'"
              :formData="formData" />
          </template>
          <template v-else-if="getConfig.jnpfKey === 'qrcode'">
            <jnpf-qrcode
              :format="getItem.format"
              :colorLight="getItem.colorLight"
              :colorDark="getItem.colorDark"
              :width="getItem.width"
              :staticText="getItem.staticText"
              :dataType="getItem.dataType"
              :relationField="getItem.relationField + '_id'"
              :formData="formData" />
          </template>
          <template v-else-if="getConfig.jnpfKey === 'inputNumber'">
            <jnpf-input-number
              v-model:value="getConfig.defaultValue"
              :precision="getItem.precision"
              :addonBefore="getItem.addonBefore"
              :addonAfter="getItem.addonAfter"
              :thousands="getItem.thousands"
              :isAmountChinese="getItem.isAmountChinese"
              disabled
              detailed />
          </template>
          <template v-else-if="getConfig.jnpfKey === 'calculate'">
            <jnpf-calculate
              :expression="getItem.expression"
              :isStorage="getItem.isStorage"
              :formData="formData"
              :precision="getItem.precision"
              :thousands="getItem.thousands"
              :isAmountChinese="getItem.isAmountChinese"
              detailed />
          </template>
          <template v-else-if="getConfig.jnpfKey === 'location'">
            <jnpf-location v-model:value="getConfig.defaultValue" :enableLocationScope="getItem.enableLocationScope" detailed />
          </template>
          <template v-else-if="getConfig.jnpfKey === 'sign'">
            <jnpf-sign v-model:value="getConfig.defaultValue" detailed />
          </template>
          <template v-else-if="getConfig.jnpfKey === 'signature'">
            <jnpf-signature v-model:value="getConfig.defaultValue" detailed />
          </template>
          <template v-else-if="getConfig.jnpfKey === 'iframe'">
            <jnpf-iframe
              :href="getItem.href"
              :height="getItem.height"
              :borderType="getItem.borderType"
              :borderColor="getItem.borderColor"
              :borderWidth="getItem.borderWidth" />
          </template>
          <template v-else-if="getConfig.jnpfKey === 'input'">
            <jnpf-input
              v-model:value="getConfig.defaultValue"
              :addonBefore="getItem.addonBefore"
              :addonAfter="getItem.addonAfter"
              :useMask="getItem.useMask"
              :maskConfig="getItem.maskConfig"
              detailed />
          </template>
          <template v-else>
            <p>{{ getValue(getItem.__config__?.defaultValue || '') }}</p>
          </template>
        </a-form-item>
      </template>
    </template>
    <template v-else>
      <template v-if="getConfig.jnpfKey === 'card'">
        <a-card :hoverable="getItem.shadow === 'hover'" :size="formConf.size">
          <template #title v-if="getItem.header">{{ getItem.header }}<BasicHelp :text="getTipLabel" v-if="getTipLabel" /></template>
          <a-row>
            <Item v-for="(childItem, childIndex) in getConfig.children" v-bind="getBindValue" :key="childIndex" :item="childItem" @toDetail="toDetail" />
          </a-row>
        </a-card>
      </template>
      <a-row v-if="getConfig.jnpfKey === 'row'">
        <Item v-for="(childItem, childIndex) in getConfig.children" v-bind="getBindValue" :key="childIndex" :item="childItem" @toDetail="toDetail" />
      </a-row>
      <template v-if="getConfig.jnpfKey === 'tab'">
        <a-tabs :type="getItem.type" :tabPosition="getItem.tabPosition" :size="formConf.size" v-model:activeKey="getConfig.active">
          <a-tab-pane v-for="pane in getConfig.children" :key="pane.name" :tab="pane.titleI18nCode ? t(pane.titleI18nCode, pane.title) : pane.title">
            <a-row>
              <Item
                v-for="(childItem, childIndex) in pane.__config__.children"
                v-bind="getBindValue"
                :key="childIndex"
                :item="childItem"
                @toDetail="toDetail" />
            </a-row>
          </a-tab-pane>
        </a-tabs>
      </template>
      <template v-if="getConfig.jnpfKey === 'steps'">
        <a-steps :size="formConf.size" v-model:current="getConfig.active" :type="item.simple ? 'navigation' : 'default'" :status="item.processStatus">
          <a-step v-for="step in getConfig.children" :key="step.name" :title="step.titleI18nCode ? t(step.titleI18nCode, step.title) : step.title">
            <template #icon v-if="step.icon">
              <span :class="step.icon + ' custom-icon'"></span>
            </template>
          </a-step>
        </a-steps>
        <a-row v-for="(step, stepIndex) in getConfig.children" :key="step.name" class="!pt-12px w-full" v-show="getConfig.active === stepIndex">
          <Item v-for="(childItem, childIndex) in step.__config__.children" v-bind="getBindValue" :key="childIndex" :item="childItem" @toDetail="toDetail" />
        </a-row>
      </template>
      <template v-if="getConfig.jnpfKey === 'collapse'">
        <a-collapse :ghost="getItem.ghost" :expandIconPosition="getItem.expandIconPosition" :accordion="getItem.accordion" v-model:activeKey="getConfig.active">
          <a-collapse-panel v-for="pane in getConfig.children" :key="pane.name" :header="pane.titleI18nCode ? t(pane.titleI18nCode, pane.title) : pane.title">
            <a-row>
              <Item
                v-for="(childItem, childIndex) in pane.__config__.children"
                v-bind="getBindValue"
                :key="childIndex"
                :item="childItem"
                @toDetail="toDetail" />
            </a-row>
          </a-collapse-panel>
        </a-collapse>
      </template>
      <template v-if="getConfig.jnpfKey === 'table' && !getConfig.noShow">
        <div class="jnpf-child-list" v-if="item.layoutType === 'list'">
          <a-collapse expandIconPosition="end" :bordered="false" class="outer-collapse" v-model:activeKey="outerActiveKey">
            <a-collapse-panel forceRender>
              <template #header>
                <span class="min-h-22px inline-block">{{ getConfig.showTitle ? getLabel : '' }}</span>
                <BasicHelp :text="getTipLabel" v-if="getConfig.showTitle && getLabel && getTipLabel" />
              </template>
              <a-collapse :bordered="false" v-model:activeKey="innerActiveKey">
                <template #expandIcon="{ isActive }">
                  <CaretRightOutlined :rotate="isActive ? 90 : 0" />
                </template>
                <a-collapse-panel v-for="(record, index) in getDefaultValue" :key="record.jnpfId" forceRender>
                  <template #header>
                    <span class="min-h-22px inline-block">{{ getConfig.showTitle ? getLabel : '' }}({{ index + 1 }})</span>
                  </template>
                  <a-row :gutter="formConf.formStyle ? 0 : formConf.gutter">
                    <a-col :span="column.__config__.span" v-for="column in getColumns" :key="column.__config__.formId">
                      <a-form-item :labelCol="column.labelCol">
                        <template #label v-if="column.__config__.showLabel">
                          {{ column.title ? column.title + (column.__config__.labelSuffix || '') : '' }}
                          <BasicHelp :text="column.tipLabel" v-if="column.title && column.tipLabel" />
                        </template>
                        <template v-if="column.__config__?.jnpfKey === 'uploadFile'">
                          <jnpf-upload-file v-model:value="record[column.dataIndex]" detailed disabled />
                        </template>
                        <template v-else-if="column.__config__?.jnpfKey === 'uploadImg'">
                          <jnpf-upload-img v-model:value="record[column.dataIndex]" detailed disabled />
                        </template>
                        <template v-else-if="column.__config__?.jnpfKey === 'colorPicker'">
                          <jnpf-color-picker
                            v-model:value="record[column.dataIndex]"
                            :showAlpha="column.showAlpha"
                            :colorFormat="column.colorFormat"
                            disabled />
                        </template>
                        <template v-else-if="column.__config__?.jnpfKey === 'rate'">
                          <jnpf-rate v-model:value="record[column.dataIndex]" :count="column.count" :allowHalf="column.allowHalf" disabled />
                        </template>
                        <template v-else-if="column.__config__?.jnpfKey === 'slider'">
                          <jnpf-slider v-model:value="record[column.dataIndex]" :min="column.min" :max="column.max" :step="column.step" disabled />
                        </template>
                        <template v-else-if="column.__config__?.jnpfKey === 'relationForm'">
                          <p class="link-text" @click="toTableDetail(column, record[column.dataIndex + '_id'])">{{ record[column.dataIndex] }}</p>
                        </template>
                        <template v-else-if="['relationFormAttr', 'popupAttr'].includes(column.__config__?.jnpfKey)">
                          <p v-if="!record[column.dataIndex]">{{ record[column.relationField.split('_jnpfTable_')[0] + '_' + column.showField] }}</p>
                          <p v-else>{{ record[column.dataIndex] }}</p>
                        </template>
                        <template v-else-if="column.__config__?.jnpfKey === 'inputNumber'">
                          <jnpf-input-number
                            v-model:value="record[column.dataIndex]"
                            :precision="column.precision"
                            :addonBefore="column.addonBefore"
                            :addonAfter="column.addonAfter"
                            :thousands="column.thousands"
                            :isAmountChinese="column.isAmountChinese"
                            disabled
                            detailed />
                        </template>
                        <template v-else-if="column.__config__?.jnpfKey === 'calculate'">
                          <jnpf-calculate
                            :rowIndex="index"
                            :expression="column.expression"
                            :isStorage="column.isStorage"
                            :formData="formData"
                            :precision="column.precision"
                            :thousands="column.thousands"
                            :isAmountChinese="column.isAmountChinese"
                            detailed />
                        </template>
                        <template v-else-if="column.__config__?.jnpfKey === 'location'">
                          <jnpf-location v-model:value="record[column.dataIndex]" :enableLocationScope="column.enableLocationScope" detailed />
                        </template>
                        <template v-else-if="column.__config__?.jnpfKey === 'sign'">
                          <jnpf-sign v-model:value="record[column.dataIndex]" detailed />
                        </template>
                        <template v-else-if="column.__config__?.jnpfKey === 'signature'">
                          <jnpf-signature v-model:value="record[column.dataIndex]" detailed />
                        </template>
                        <template v-else-if="column.__config__?.jnpfKey === 'input'">
                          <jnpf-input
                            v-model:value="record[column.dataIndex]"
                            :addonBefore="column.addonBefore"
                            :addonAfter="column.addonAfter"
                            :useMask="column.useMask"
                            :maskConfig="column.maskConfig"
                            detailed />
                        </template>
                        <template v-else>
                          <p>{{ getValue(record[column.dataIndex]) }}</p>
                        </template>
                      </a-form-item>
                    </a-col>
                  </a-row>
                </a-collapse-panel>
                <a-collapse-panel key="summary" v-if="getDefaultValue.length && item.showSummary">
                  <template #header>
                    <span class="min-h-22px inline-block">合计</span>
                  </template>
                  <a-row :gutter="formConf.formStyle ? 0 : formConf.gutter">
                    <template v-for="(column, cIndex) in getColumns" :key="column.__config__.formId">
                      <a-col :span="column.__config__.span" v-if="column.dataIndex && item.summaryField.includes(column.dataIndex)">
                        <a-form-item :labelCol="column.labelCol">
                          <template #label v-if="column.__config__.showLabel">
                            {{ column.title ? column.title + (column.__config__.labelSuffix || '') : '' }}
                            <BasicHelp :text="column.tipLabel" v-if="column.title && column.tipLabel" />
                          </template>
                          <JnpfInput :value="getColumnSum[cIndex]" disabled detailed :style="column.style" />
                        </a-form-item>
                      </a-col>
                    </template>
                  </a-row>
                </a-collapse-panel>
              </a-collapse>
            </a-collapse-panel>
          </a-collapse>
        </div>
        <a-form-item v-else>
          <JnpfGroupTitle :content="getLabel" v-if="getConfig.showTitle && getLabel" :helpMessage="getTipLabel" :bordered="false" />
          <a-table
            :data-source="getItem.__config__.defaultValue"
            :columns="getColumns"
            size="small"
            :pagination="false"
            :scroll="{ x: 'max-content' }"
            :bordered="formConf.formStyle === 'word-form' || !!getConfig?.complexHeaderList?.length">
            <template #headerCell="{ column }">
              {{ column.title }}
              <BasicHelp v-if="column.title && column.tipLabel" :text="column.tipLabel" />
            </template>
            <template #bodyCell="{ column, record, index }">
              <template v-if="column.key === 'index'">{{ index + 1 }}</template>
              <template v-else-if="column.__config__?.jnpfKey === 'uploadFile'">
                <jnpf-upload-file v-model:value="record[column.dataIndex]" detailed disabled />
              </template>
              <template v-else-if="column.__config__?.jnpfKey === 'uploadImg'">
                <jnpf-upload-img v-model:value="record[column.dataIndex]" detailed disabled />
              </template>
              <template v-else-if="column.__config__?.jnpfKey === 'colorPicker'">
                <jnpf-color-picker v-model:value="record[column.dataIndex]" :showAlpha="column.showAlpha" :colorFormat="column.colorFormat" disabled />
              </template>
              <template v-else-if="column.__config__?.jnpfKey === 'rate'">
                <jnpf-rate v-model:value="record[column.dataIndex]" :count="column.count" :allowHalf="column.allowHalf" disabled />
              </template>
              <template v-else-if="column.__config__?.jnpfKey === 'slider'">
                <jnpf-slider v-model:value="record[column.dataIndex]" :min="column.min" :max="column.max" :step="column.step" disabled />
              </template>
              <template v-else-if="column.__config__?.jnpfKey === 'relationForm'">
                <p class="link-text" @click="toTableDetail(column, record[column.dataIndex + '_id'])">{{ record[column.dataIndex] }}</p>
              </template>
              <template v-else-if="['relationFormAttr', 'popupAttr'].includes(column.__config__?.jnpfKey)">
                <p v-if="!record[column.dataIndex]">{{ record[column.relationField.split('_jnpfTable_')[0] + '_' + column.showField] }}</p>
                <p v-else>{{ record[column.dataIndex] }}</p>
              </template>
              <template v-else-if="column.__config__?.jnpfKey === 'inputNumber'">
                <jnpf-input-number
                  v-model:value="record[column.dataIndex]"
                  :precision="column.precision"
                  :addonBefore="column.addonBefore"
                  :addonAfter="column.addonAfter"
                  :thousands="column.thousands"
                  :isAmountChinese="column.isAmountChinese"
                  disabled
                  detailed />
              </template>
              <template v-else-if="column.__config__?.jnpfKey === 'calculate'">
                <jnpf-calculate
                  :rowIndex="index"
                  :expression="column.expression"
                  :isStorage="column.isStorage"
                  :formData="formData"
                  :precision="column.precision"
                  :thousands="column.thousands"
                  :isAmountChinese="column.isAmountChinese"
                  detailed />
              </template>
              <template v-else-if="column.__config__?.jnpfKey === 'location'">
                <jnpf-location v-model:value="record[column.dataIndex]" :enableLocationScope="column.enableLocationScope" detailed />
              </template>
              <template v-else-if="column.__config__?.jnpfKey === 'sign'">
                <jnpf-sign v-model:value="record[column.dataIndex]" detailed />
              </template>
              <template v-else-if="column.__config__?.jnpfKey === 'signature'">
                <jnpf-signature v-model:value="record[column.dataIndex]" detailed />
              </template>
              <template v-else-if="column.__config__?.jnpfKey === 'input'">
                <jnpf-input
                  v-model:value="record[column.dataIndex]"
                  :addonBefore="column.addonBefore"
                  :addonAfter="column.addonAfter"
                  :useMask="column.useMask"
                  :maskConfig="column.maskConfig"
                  detailed />
              </template>
              <template v-else>
                <p>{{ getValue(record[column.dataIndex]) }}</p>
              </template>
            </template>
            <template #summary v-if="getItem.__config__.defaultValue.length && getItem.showSummary">
              <a-table-summary fixed>
                <a-table-summary-row>
                  <a-table-summary-cell :index="0">{{ t('component.table.summary') }}</a-table-summary-cell>
                  <a-table-summary-cell v-for="(item, index) in getColumnSum" :key="index" :index="index + 1" :align="getSummaryCellAlign(index)">
                    {{ item }}
                  </a-table-summary-cell>
                </a-table-summary-row>
              </a-table-summary>
            </template>
          </a-table>
        </a-form-item>
      </template>
      <template v-if="getConfig.jnpfKey === 'tableGrid'">
        <table
          class="table-grid-box"
          :style="{
            '--borderType': getItem.__config__.borderType,
            '--borderColor': getItem.__config__.borderColor,
            '--borderWidth': getItem.__config__.borderWidth + 'px',
          }">
          <tbody>
            <tr v-for="(tr, index) in getConfig.children" :key="index">
              <td
                v-for="(td, i) in tr.__config__.children"
                :key="i"
                :colspan="td.__config__.colspan"
                :rowspan="td.__config__.rowspan"
                v-show="!td.__config__.merged"
                :style="{
                  '--backgroundColor': td.__config__.backgroundColor,
                }">
                <Item
                  v-for="(childItem, childIndex) in td.__config__.children"
                  v-bind="getBindValue"
                  :key="childIndex"
                  :item="childItem"
                  @toDetail="toDetail" />
              </td>
            </tr>
          </tbody>
        </table>
      </template>
    </template>
  </a-col>
</template>

<script lang="ts" setup>
  import { computed, unref, reactive, toRefs, onMounted } from 'vue';
  import { omit } from 'lodash-es';
  import { thousandsFormat } from '@/utils/jnpf';
  import { useI18n } from '@/hooks/web/useI18n';
  import { CaretRightOutlined } from '@ant-design/icons-vue';
  import { buildUUID } from '@/utils/uuid';

  interface State {
    outerActiveKey: number[];
    innerActiveKey: string[];
  }

  defineOptions({ name: 'Item' });
  const props = defineProps({
    item: { type: Object, required: true },
    formConf: { type: Object, required: true },
    formData: { type: Object },
    loading: { type: Boolean, default: false },
  });
  const emit = defineEmits(['toDetail']);
  const { t } = useI18n();
  const state = reactive<State>({
    outerActiveKey: [0],
    innerActiveKey: [],
  });
  const { outerActiveKey, innerActiveKey } = toRefs(state);

  const getBindValue = computed(() => ({ ...omit(props, ['item']) }));
  const getItem = computed(() => {
    const item = props.item;
    const config = item.__config__;
    if (['groupTitle', 'divider', 'link', 'text'].includes(config.jnpfKey)) {
      if (item.contentI18nCode) item.content = t(item.contentI18nCode, item.content);
      if (item.helpMessageI18nCode) item.helpMessage = t(item.helpMessageI18nCode, item.helpMessage);
    }
    if (config.jnpfKey === 'button') {
      if (item.buttonTextI18nCode) item.buttonText = t(item.buttonTextI18nCode, item.buttonText);
    }
    if (config.jnpfKey === 'alert') {
      if (item.titleI18nCode) item.title = t(item.titleI18nCode, item.title);
      if (item.descriptionI18nCode) item.description = t(item.descriptionI18nCode, item.description);
      if (item.closeTextI18nCode) item.closeText = t(item.closeTextI18nCode, item.closeText);
    }
    if (config.jnpfKey === 'card') {
      if (item.headerI18nCode) item.header = t(item.headerI18nCode, item.header);
    }
    return item;
  });
  const getConfig = computed(() => props.item.__config__);
  const getDefaultValue = computed(() => {
    let defaultValue = props.item.__config__.defaultValue;
    if (unref(getConfig).jnpfKey === 'table') {
      defaultValue = defaultValue.map(o => ({ ...o, jnpfId: buildUUID() }));
    } else {
      Array.isArray(defaultValue) && (defaultValue = defaultValue.join());
    }
    return defaultValue;
  });
  const getLabelCol = computed(() => {
    const globalLabelWidth = props.formConf.labelWidth;
    let labelCol = {};
    if (props.formConf.labelPosition !== 'top' && unref(getConfig).showLabel) {
      let labelWidth = (unref(getConfig).labelWidth || globalLabelWidth) + 'px';
      if (!unref(getConfig).showLabel) labelWidth = '0px';
      labelCol = { style: { width: labelWidth } };
    }
    return labelCol;
  });
  const getLabel = computed(() => (unref(getConfig).labelI18nCode ? t(unref(getConfig).labelI18nCode, unref(getConfig).label) : unref(getConfig).label));
  const getTipLabel = computed(() =>
    unref(getConfig).tipLabelI18nCode ? t(unref(getConfig).tipLabelI18nCode, unref(getConfig).tipLabel) : unref(getConfig).tipLabel,
  );
  const getColumns = computed(() => {
    if (unref(getConfig).jnpfKey !== 'table') return [];
    const noColumn = {
      width: 50,
      title: t('component.table.index'),
      dataIndex: 'index',
      key: 'index',
      align: 'center',
      customRender: ({ index }) => index + 1,
      fixed: 'left',
    };
    const list = unref(getConfig)
      .children.filter(
        o => !o.__config__.noShow && (!o.__config__.visibility || (Array.isArray(o.__config__.visibility) && o.__config__.visibility.includes('pc'))),
      )
      .map(o => ({
        ...o,
        title: o.__config__?.labelI18nCode ? t(o.__config__?.labelI18nCode, o.__config__?.label) : o.__config__?.label,
        tipLabel: o.__config__?.tipLabelI18nCode ? t(o.__config__?.tipLabelI18nCode, o.__config__?.tipLabel) : o.__config__?.tipLabel,
        dataIndex: o.__vModel__,
        width: o.__config__?.columnWidth || undefined,
        align: o.__config__.tableAlign || 'left',
        fixed: o.__config__.tableFixed == 'left' || o.__config__.tableFixed == 'right' ? o.__config__.tableFixed : false,
        ...(props.item.layoutType === 'list' ? { labelCol: getChildTableLabelCol(o.__config__) } : {}),
      }));
    let columnList = list;
    if (props.item.layoutType === 'list') return columnList;
    let complexHeaderList: any[] = props.item.__config__.complexHeaderList || [];
    if (complexHeaderList.length) {
      let childColumns: any[] = [];
      let firstChildColumns: string[] = [];
      for (let i = 0; i < complexHeaderList.length; i++) {
        const e = complexHeaderList[i];
        e.title = e.fullNameI18nCode ? t(e.fullNameI18nCode, e.fullName) : e.fullName;
        e.align = e.align;
        e.children = [];
        e.jnpfKey = 'complexHeader';
        if (e.childColumns?.length) {
          childColumns.push(...e.childColumns);
          for (let k = 0; k < e.childColumns.length; k++) {
            const item = e.childColumns[k];
            for (let j = 0; j < list.length; j++) {
              const o = list[j];
              if (o.__vModel__ == item && o.__config__.tableFixed !== 'left' && o.__config__.tableFixed !== 'right') e.children.push({ ...o });
            }
          }
        }
        if (e.children.length) firstChildColumns.push(e.children[0].__vModel__);
      }
      complexHeaderList = complexHeaderList.filter(o => o.children.length);
      let newList: any[] = [];
      for (let i = 0; i < list.length; i++) {
        const e = list[i];
        if (!childColumns.includes(e.__vModel__) || e.__config__?.tableFixed === 'left' || e.__config__?.tableFixed === 'right') {
          newList.push(e);
        } else {
          if (firstChildColumns.includes(e.__vModel__)) {
            const item = complexHeaderList.find(o => o.childColumns.includes(e.__vModel__));
            newList.push(item);
          }
        }
      }
      columnList = newList;
    }
    let columns = [noColumn, ...columnList];
    const leftFixedList = columns.filter(o => o.fixed === 'left');
    const rightFixedList = columns.filter(o => o.fixed === 'right');
    const noFixedList = columns.filter(o => o.fixed !== 'left' && o.fixed !== 'right');
    return [...leftFixedList, ...noFixedList, ...rightFixedList];
  });
  const getSummaryColumn = computed(() => {
    let defaultColumns = unref(getColumns);
    let columns: any[] = [];
    for (let i = 0; i < defaultColumns.length; i++) {
      const e = defaultColumns[i];
      if (e.jnpfKey === 'table' || e.jnpfKey === 'complexHeader') {
        if (e.children?.length) columns.push(...e.children);
      } else {
        columns.push(e);
      }
      if (e.fixed && e.children?.length) {
        for (let j = 0; j < e.children.length; j++) {
          e.children[j].fixed = e.fixed;
        }
      }
    }
    return columns.filter(o => o?.key != 'index' && o?.key != 'action');
  });
  const getColumnSum = computed(() => {
    if (unref(getConfig).jnpfKey !== 'table') return [];
    const list = unref(getSummaryColumn);
    const sums: any[] = [];
    const isSummary = key => props.item.summaryField.includes(key);
    const useThousands = key => list.some(o => o.__vModel__ === key && o.thousands);
    const tableData = list.filter(o => !o.__config__.noShow && (!o.__config__.visibility || o.__config__.visibility.includes('pc')));
    tableData.forEach((column, index) => {
      let sumVal = unref(getConfig).defaultValue.reduce((sum, d) => sum + getCmpValOfRow(d, column.__vModel__), 0);
      if (!isSummary(column.__vModel__)) sumVal = '';
      sumVal = Number.isNaN(sumVal) ? '' : sumVal;
      const realVal = sumVal && !Number.isInteger(sumVal) ? Number(sumVal).toFixed(2) : sumVal;
      sums[index] = useThousands(column.__vModel__) ? thousandsFormat(realVal) : realVal.toString();
    });
    return sums;
  });

  function toDetail(item) {
    emit('toDetail', item);
  }
  function toTableDetail(item, value) {
    item.__config__.defaultValue = value;
    emit('toDetail', item);
  }
  function getValue(value) {
    return Array.isArray(value) ? value.join() : value;
  }
  function getCmpValOfRow(row, key) {
    const isSummary = key => props.item.summaryField.includes(key);
    if (!props.item.summaryField.length || !isSummary(key)) return 0;
    const target = row[key];
    if (!target) return 0;
    const data = isNaN(target) ? 0 : Number(target);
    return data;
  }
  function getSummaryCellAlign(index) {
    if (!unref(getSummaryColumn).length) return;
    return unref(getSummaryColumn)[index]?.align || 'left';
  }
  function getChildTableLabelCol(config) {
    const globalLabelWidth = props.formConf.labelWidth;
    let labelCol = {};
    if (props.formConf.labelPosition !== 'top' && config.showLabel) {
      let labelWidth = (config.labelWidth || globalLabelWidth) + 'px';
      if (!config.showLabel) labelWidth = '0px';
      labelCol = { style: { width: labelWidth } };
    }
    return labelCol;
  }
  // 平铺布局时设置默认展开
  function setActiveKey() {
    if (unref(getConfig).jnpfKey !== 'table' || props.item.layoutType !== 'list') return;
    state.outerActiveKey = [0];
    state.innerActiveKey = [];
    if (!props.item.defaultExpandAll) return;
    state.innerActiveKey = ['summary'];
    if (!unref(getDefaultValue).length) return;
    for (let i = 0; i < unref(getDefaultValue).length; i++) {
      state.innerActiveKey.push(unref(getDefaultValue)[i].jnpfId);
    }
  }

  onMounted(() => {
    setActiveKey();
  });
</script>
