import { IForm } from "@/base-ui/form/index"
export const searchFromConfig: IForm = {
  formItems: [
    {
      type: "input",
      label: "id",
      placeholder: "请输入id"
    },
    {
      type: "input",
      label: "用户名",
      placeholder: "用户名"
    },
    {
      type: "password",
      label: "密码",
      placeholder: "请输入密码"
    },
    {
      type: "select",
      label: "喜欢的运动",
      placeholder: "请选择喜欢的运动",
      options: [
        { title: "篮球", value: "basketball" },
        { title: "足球", value: "football" }
      ]
    },
    {
      type: "datepicker",
      label: "创建时间",
      otherOptions: {
        startPlaceholder: "开始时间",
        endPlaceholder: "结束时间",
        type: "datetimerange"
      }
    }
  ],
  labelWidth: "120px",
  itemLayout: {
    padding: "10px 20px"
  },
  colLayout: {
    span: 8
  }
}
