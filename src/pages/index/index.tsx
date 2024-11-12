import React, { Component, useState } from 'react';
import { ScrollView, Text, View } from '@tarojs/components';
import { ActionSheet, Button, Cell, ConfigProvider, Dialog, Picker, Popover, Popup } from '@nutui/nutui-react-taro';

class Example extends Component {
  render() {
    return <ConfigProvider>
      <ScrollView scrollY style={{ height: 400, overflow: 'auto' }}>
        {
          Array.from({ length: 100 }).map((item, index) => {
            return <View style={{ padding: 20 }} key={`item_${index}`}>
              <Text>{index}</Text>
            </View>
          })
        }
      </ScrollView>
      <PopupExample />
      {/* <ActionSheetExample /> */}
      {/* <DialogExample /> */}
      {/* <PickerExample /> */}
      {/* <PopoverExample /> */}
    </ConfigProvider>
  }
}

const PopupExample = () => {
  const [showBasic, setShowBasic] = useState(false)
  return (
    <>
      <Cell
        title="展示弹出层"
        onClick={() => {
          setShowBasic(true)
        }}
      />
      <Popup
        visible={showBasic}
        style={{ padding: '30px 50px' }}
        onClose={() => {
          setShowBasic(false)
        }}
      >
        <View style={{ height: '200px', overflowY: 'scroll' }}>
          {Array.from({ length: 20 })
            .fill('')
            .map((_, i) => (
              <Cell style={{ backgroundColor: 'white' }} key={i}>
                <View>正文</View>
              </Cell>
            ))}
        </View>
      </Popup>
    </>
  )
}

const PickerExample = () => {
  const [showPicker, setShowPicker] = useState(false)
  return <>
    <Cell
      title="点击查看更多方向"
      onClick={() => {
        setShowPicker(true)
      }}
    />
    <Picker
      visible={showPicker}
      options={[]}
      duration="500"
      title=""
      onClose={() => {
        setShowPicker(false)
      }}
    >
      <div className="brickBox">
        12312123
      </div>
    </Picker>
  </>
}

const ActionSheetExample = () => {
  const [val, setVal] = useState('')
  const [isVisible, setIsVisible] = useState(false)
  const options = [
    {
      name: '权限设置',
    },
    {
      name: '重命名',
    },
    {
      name: '删除',
    },
  ]

  const handleSelect = (item: any) => {
    setVal(item.name)
    setIsVisible(false)
  }

  return (
    <>
      <Cell onClick={() => setIsVisible(!isVisible)}>
        <span>基础用法</span>
        <div style={{ marginInlineStart: '10px', color: '#999' }}>{val}</div>
      </Cell>
      <ActionSheet
        title="标题"
        visible={isVisible}
        options={options}
        onSelect={handleSelect}
        onCancel={() => setIsVisible(false)}
      />
    </>
  )
}

const DialogExample = () => {
  const [visible1, setVisible1] = useState(false)
  return <>
    <Cell title="基础弹框" onClick={() => setVisible1(true)} />
    <Dialog
      title="基础弹框"
      visible={visible1}
      onConfirm={() => setVisible1(false)}
      onCancel={() => setVisible1(false)}
    >
      支持函数调用和组件调用两种方式。
    </Dialog>
  </>
}

const PopoverExample = () => {
  const [basic, setBasic] = useState(false)
  const [dark, setDark] = useState(false)
  const itemList = [
    {
      key: 'key1',
      name: 'option1',
    },
    {
      key: 'key2',
      name: 'option2',
    },
    {
      key: 'key3',
      name: 'option3',
    },
  ]
  return (
    <>
      <Popover
        visible={basic}
        list={itemList}
        location="bottom-start"
        style={{ marginInlineEnd: '30px' }}
        onClick={() => {
          basic ? setBasic(false) : setBasic(true)
        }}
        onOpen={() => {
          console.log('打开菜单时触发')
        }}
        onClose={() => {
          console.log('关闭菜单时触发')
        }}
      >
        <Button type="primary" shape="square">
          明亮风格
        </Button>
      </Popover>

      <Popover
        visible={dark}
        list={itemList}
        theme="dark"
        location="bottom-start"
        style={{ marginInlineEnd: '30px' }}
        onClick={() => {
          dark ? setDark(false) : setDark(true)
        }}
      >
        <Button type="primary" shape="square">
          暗黑风格
        </Button>
      </Popover>
    </>
  )
}

export default Example;