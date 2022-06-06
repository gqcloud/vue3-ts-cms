import { IForm } from "@/base-ui/form/index"
export const searchFromConfig: IForm = {
  formItems: [
    {
      field: "name",
      type: "input",
      label: "角色名称",
      placeholder: "请输入角色名称"
    },
    {
      field: "intro",
      type: "input",
      label: "权限介绍",
      placeholder: "请输入权限介绍"
    },
    {
      field: "creatTime",
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
