import {
  ProCard,
  ProForm,
  ProFormText,
  ProFormRadio,
  ProFormSwitch,
  ProFormSelect,
  ProFormInstance,
} from '@ant-design/pro-components'
import {useOptionsStore} from 'src/preview/store/usePlayerStore'
import {Alert, Form, message, Tooltip} from 'antd'
import {QuestionCircleOutlined} from '@ant-design/icons'
import {useEffect, useRef} from 'react'
const swithColSpan = {xs: 8, sm: 12, md: 12, lg: 12}
const VideoOptionsForm = () => {
  const {options, setOptions} = useOptionsStore()
  const formRef = useRef<ProFormInstance>()
  useEffect(() => {
    if (!formRef) return
    formRef.current?.setFieldsValue(options)
  }, [options])
  return (
    <ProForm
      formRef={formRef}
      layout="horizontal"
      grid={true}
      rowProps={{
        gutter: [16, 0],
      }}
      onFinish={async (v: any) => {
        setOptions(v)
        message.success('配置更新成功！')
      }}
      // request={async () => options}
    >
      <ProFormRadio.Group
        name="mode"
        label="模式"
        radioType="button"
        colProps={{
          xs: 12,
          sm: 24,
          md: 24,
          lg: 24,
        }}
        fieldProps={{
          // buttonStyle: 'solid',
          size: 'small',
        }}
        options={[
          {
            label: '竖屏',
            value: 'AspectFill',
          },
          {
            label: '横屏',
            value: 'AspectFit',
          },
          {
            label: '满屏',
            value: 'Fill',
          },
        ]}
      />
      <ProFormRadio.Group
        name="alphaDirection"
        label={
          <Tooltip title="视频Alpha素材，默认为右边，带Key素材不需要设置,useMetaData 为 false 生效">
            alpha位置 <QuestionCircleOutlined />
          </Tooltip>
        }
        radioType="button"
        colProps={{
          xs: 12,
          sm: 24,
          md: 24,
          lg: 24,
        }}
        fieldProps={{
          size: 'small',
        }}
        valueEnum={{
          left: '左',
          right: '右',
        }}
      />
      <ProFormSwitch
        colProps={swithColSpan}
        fieldProps={{
          size: 'small',
        }}
        name="mute"
        label="静音"
        // initialValue={options.mute}
      />
      <ProFormSwitch
        colProps={swithColSpan}
        fieldProps={{
          size: 'small',
        }}
        // initialValue={options.loop}
        name="loop"
        label="循环"
      />
      <ProFormSwitch
        colProps={swithColSpan}
        fieldProps={{
          size: 'small',
        }}
        // initialValue={options.useMetaData}
        name="useMetaData"
        label="带Key视频"
      />
      <ProFormSwitch
        colProps={swithColSpan}
        fieldProps={{
          size: 'small',
        }}
        // initialValue={options.useAccurate}
        name="useAccurate"
        label="帧同步"
      />
      <ProFormSwitch
        colProps={swithColSpan}
        fieldProps={{
          size: 'small',
        }}
        // initialValue={options.useFrameCache}
        name="useFrameCache"
        label="帧缓存"
      />
      <ProFormSwitch
        colProps={swithColSpan}
        fieldProps={{
          size: 'small',
        }}
        // initialValue={options.useVideoDBCache}
        name="useVideoDBCache"
        label="本地存储"
      />
      <ProFormSwitch
        colProps={swithColSpan}
        fieldProps={{
          size: 'small',
        }}
        // initialValue={options.forceBlob}
        name="forceBlob"
        label="强制blob"
      />
      <ProFormSwitch
        colProps={swithColSpan}
        fieldProps={{
          size: 'small',
        }}
        // initialValue={options.showVideo}
        name="showVideo"
        label="显示MP4"
      />
      <ProFormSwitch
        colProps={swithColSpan}
        fieldProps={{
          size: 'small',
        }}
        // initialValue={options.showPlayerInfo}
        name="showPlayerInfo"
        label="播放信息"
      />
      <ProFormRadio.Group
        name="logLevel"
        label="日志"
        radioType="button"
        // initialValue={options.logLevel}
        colProps={{
          span: 24,
        }}
        fieldProps={{
          size: 'small',
        }}
        options={['debug', 'info', 'warn', 'error']}
      />

      <ProFormRadio.Group
        name="renderType"
        label={
          <Tooltip title="canvas2d 带 key 开发中,不设置可以自动旋转">
            渲染 <QuestionCircleOutlined />
          </Tooltip>
        }
        radioType="button"
        // initialValue={options.renderType}
        colProps={{
          span: 24,
        }}
        fieldProps={{
          size: 'small',
        }}
        // options={['webgl', 'canvas2d']}
        valueEnum={{
          webgl: 'webgl',
          canvas2d: 'canvas2d',
        }}
      />
    </ProForm>
  )
}
const VideoOptions = () => {
  return <VideoOptionsForm />
}
export default VideoOptions
