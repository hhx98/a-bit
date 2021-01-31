// 折叠tokens，作为下标为3的项
export default function nestTokens(tokens) {
  let nestedTokens = [];
  // 栈
  const sections = [];
  // 收集者 会变化 运用到了js引用类型
  let collector = nestedTokens;

  console.log(tokens);

  for (let i = 0; i < tokens.length; i++) {
    let token = tokens[i];
    switch (token[0]) {
      case "#":
        // 收集子项
        collector.push(token);
        // 入栈
        sections.push(token);
        // 收集器换
        collector = token[2] = [];

        break;
      case "/":
        // 出栈
        sections.pop();
        // 换收集器 为栈顶
        collector =
          sections.length > 0 ? sections[sections.length - 1][2] : nestedTokens;
        break;
      default:
        // 判断栈
        collector.push(token);
    }
  }

  return nestedTokens;
}
