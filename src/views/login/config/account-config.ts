export const rules = {
  name: [
    { required: true, message: "用户名是必传内容", trigger: "blur" },
    {
      pattern: /^[a-z0-9]{5,10}$/,
      required: true,
      message: "用户名必须是5-10位",
      trigger: "blur"
    }
  ],
  password: [
    { required: true, message: "密码是必传内容", trigger: "blur" },
    {
      pattern: /^[a-z0-9]{4,}$/,
      required: true,
      message: "密码必须是4位以上",
      trigger: "blur"
    }
  ]
}
