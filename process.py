import os
import sys


def replace_latex_delimiters(file_path):
    """替换文件中的LaTeX定界符"""
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()

    # 分步执行替换操作，先生成新的内容但不立即覆盖原文件
    new_content = content
    new_content = new_content.replace("\\( ", "$")  # 将 \( 替换为 $
    new_content = new_content.replace(" \\)", "$")  # 将 \) 替换为 $
    new_content = new_content.replace("\\(", "$")  # 将 \( 替换为 $
    new_content = new_content.replace("\\)", "$")  # 将 \) 替换为 $
    new_content = new_content.replace("\\[", "$$")  # 将 \[ 替换为 $$
    new_content = new_content.replace("\\]", "$$")  # 将 \] 替换为 $$

    # 仅在内容确实发生变化时写回并返回 True，否则返回 False
    if new_content != content:
        with open(file_path, "w", encoding="utf-8") as f:
            f.write(new_content)
        return True
    return False


def process_directory(directory):
    """递归处理目录中的所有Markdown文件"""
    for root, _, files in os.walk(directory):
        for file in files:
            if file.endswith(".md"):
                file_path = os.path.join(root, file)
                try:
                    changed = replace_latex_delimiters(file_path)
                    # 仅在文件发生实际变动时输出
                    if changed:
                        print(f"已处理: {file_path}")
                except Exception as e:
                    print(f"处理失败 [{file_path}]: {str(e)}")


if __name__ == "__main__":
    # 获取目标目录（命令行参数或当前目录）
    target_dir = r"./source/_posts"

    if not os.path.isdir(target_dir):
        print(f"错误: 目录不存在 - {target_dir}")
        sys.exit(1)

    print(f"开始处理目录: {target_dir}")
    process_directory(target_dir)
    print("处理完成！")
